<template>
    <div>
        <h2>Create a new book</h2>
        <br>
        <div class="form">
            <input v-model="book.title" type="text" name="title" placeholder="Title" />
            <input v-model="book.author" type="text" name="author" placeholder="Author" />
            <input v-model="book.year" type="text" name="year" placeholder="Year" />
            <button class="auto" v-if="isCreate" v-on:click="createBook()">Create Book</button>
            <button class="auto" v-if="!isCreate" v-on:click="updateBook()">Update Book</button>
            <button class="auto" v-if="!isCreate" v-on:click="deleteBook()">Delete Book</button>
        </div>
    </div>
</template>

<script>
    import serverData from "../serverData"
    import router from '../router'

    export default {
        name: 'book', //name of this component
        components: { //components that can be used in bookListWeb template
        },
        data() {
            return {
                book: null,
                isCreate: false
            }
        },
        created: function() {
            this.fetchData();
            this.isCreate = this.$route.params.bookId === 'create';
        },
        methods: {
            fetchData: function() {
                if (this.$route.params.bookId === 'create') {
                    this.book = {title: '', author: '', year: ''};
                } else {
                    let bookId = this.$route.params.bookId;
                    let bookLibrary = this.$root.$data.bookLibrary;
                    let idx = bookLibrary.findIndex(aBook => aBook.bookId === bookId);
                    this.book = bookLibrary[idx];
                }
            },
            createBook: async function() {
                // Send the book to the server to be created
                const newBook = await serverData.createBook(this.book);

                // Save the book we got back from the server with bookId in it, to the list of books
                this.$root.$data.bookLibrary.push(newBook);

                // Open a message saying the book was created
                alert('The book was created!');

                // Take them back to the home page
                await router.push({ name: "HomeLibrary" });
            },
            updateBook: async function() {
                // Send the book to the server to be updated
                const updatedBook = await serverData.updateBook(this.book);

                // Update the book in the list of books in memory
                let bookLibrary = this.$root.$data.bookLibrary;
                let idx = bookLibrary.findIndex(aBook => aBook.bookId === this.book.bookId);
                const existingBook = bookLibrary[idx];

                // Open a message saying the book was updated
                existingBook.title = updatedBook.title;
                existingBook.author = updatedBook.author;
                existingBook.year = updatedBook.year;

                // Take them back to home page
                await router.push({ name: "HomeLibrary" });
            },
            deleteBook: async function() {
                // Send the bookId to the server to delete the book
                const worked = await serverData.deleteBook(this.book.bookId);

                // If it worked, let the user know the book was deleted
                if (worked)
                {
                    // Remove the book from the list of books in memory
                    let bookLibrary = this.$root.$data.bookLibrary;
                    let idx = bookLibrary.findIndex(aBook => aBook.bookId === this.book.bookId);
                    bookLibrary.splice(idx, 1);

                    alert('The book was deleted.');

                    // Take them back to the home page
                    await router.push({ name: "HomeLibrary" });
                }


            }
        }
    }
</script>

<style scoped>
    input {
        display: block;
        width: 100%;
        padding: 10px;
    }

    .form {
        width: 400px;
        margin: auto;

    }

</style>