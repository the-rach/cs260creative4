<template>
    <div class="wrapper">
        <div class="books">
            <div class="book" v-for="book in books" :key="book.id">
                <div class="info">
                    <h1>{{book.title}}</h1>
                    <p>{{book.author}}</p>
                </div>
                <div class="image">
                    <img :src="'/images/'+book.image">
                </div>
                <div class="buttons">
                    <button class="auto" v-on:click="addToBookList(book)">Add to Book List</button>
                    <button class="'auto" v-on:click="addToReadList(book)">Add to To Read List</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import axios from 'axios'; //TODO NEW
    export default { //this makes this component accessible for other pages
        name: 'libraryBooks',
        //props are the parameters the component accepts
        props: { //when i use this component, i will pass in an array (this will be the mock data of library books)
            books: Array,
            // books: [],  //TODO NEW - should this return data() like example?
        },
        // created() {
        //     this.getBooks(); //TODO NEW
        // },
        methods: {
            // async getBooks() { //TODO NEW
            //     try {
            //         let response = await axios.get("/api/books");
            //         this.books = response.data;
            //         return true;
            //
            //     } catch (error) {
            //         console.log(error);
            //     }
            // },
            addToBookList: function(book) {
                let foundBook = this.$root.$data.bookList.find(aBook => aBook.id === book.id);
                if (foundBook) {
                    //book is already in bookList
                } else { //this book is not in bookList, so add it

                    //todo: should this pass in the id?
                    this.$root.$data.bookList.push({book: book});
                }
            },
            addToReadList: function(book) {
                let foundBook = this.$root.$data.toReadList.find(aBook => aBook.id === book.id);
                if (foundBook) {
                    //book is already in bookList
                } else { //this book is not in bookList, so add it

                    /*
                    NOTE: because I populated this array with a property called book that holds this book object,
                    in my bookList.vue when I want to use this book object's properties, I need to call book.book.title,
                    or the title (property) will not appear in the HTML. I won't be able to access it with just book.title
                     */

                    this.$root.$data.toReadList.push({book: book});
                }
            }
        }
    }
</script>


<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .books {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .book {
        margin: 18px;
        margin-top: 50px;
        width: 275px; /*this used to be 200*/
    }

    .book img {
        border: 2px solid #333;
        height: 400px;
        width: 275px;/*this used to be 200*/
        object-fit: cover;
    }

    .book .image {
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    }

    .info {
        background: #E9967A;
        color: #000;
        padding: 10px 30px;
        height: 85px;
    }

    .info h1 {
        font-size: 18px;
    }

    .info h2 {
        font-size: 14px;
    }

    .info p {
        margin: 0px;
        font-size: 14px;
    }


    .buttons {
        display: flex;
        margin: 15px;
        justify-content: space-around;
    }

    button {
        height: 50px;
        background: lightgrey;
        color: black;
        border: none;
    }

    .auto {
        margin-left: 10px;
    }

    .footer {
        font-size: 1em;
        font-weight: bold;
        opacity: .25;
        text-align: center;
        padding-top: 1.5em;
        padding-bottom: 1em;
        margin-top: 1em;
        transition: opacity 1s ease-in-out;
        border-top: 2px solid darkgray;
    }
</style>