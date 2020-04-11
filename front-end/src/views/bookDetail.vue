<template>
    <div>
        <h2>Book Detail</h2>
        <br>
        <div class="book-container">
            <div><b><span style="color: #f2b5a0; ">Title: </span></b>{{book.title}}</div>
        <div><b><span style="color: #f2b5a0; ">Author: </span></b>{{book.author}}</div>
        <div><b><span style="color: #f2b5a0; ">Year: </span></b>{{book.year}}</div>
        </div>
        <br>
        <div><b>BOOK REVIEWS: </b></div>
        <br>
        <div class="review" v-for="review in reviews" :key="review.reviewId">
            <div><b><span style="color: #f2b5a0; ">Name: </span></b>{{review.name}}</div>
            <div><b><span style="color: #f2b5a0; ">Comment: </span></b>{{review.comment}}</div>
        </div>
        <br>
        <br>
        <button class="auto" v-on:click="goToCreateReview()">Create Book Review</button>
    </div>
</template>

<script>
    import serverData from "../serverData";
    import router from "../router";
    export default {
        name: 'bookDetail', //name of this component
        components: { //components that can be used in bookListWeb template
        },
        methods: {
            goToCreateReview: async function() {
                const bookId = this.$route.params.bookId;
                await router.push({ name: "review", params: {bookId: bookId} });
            }
        },
        computed: { //the property is the bookList array
            book() { //this is a computed property and returns the book whose details we want
                let bookId = this.$route.params.bookId;
                let bookLibrary = this.$root.$data.bookLibrary;
                let idx = bookLibrary.findIndex(aBook => aBook.bookId === bookId);
                return bookLibrary[idx];
            }
        },
        asyncComputed: {
            async reviews() {
                let bookId = this.$route.params.bookId;
                return  await serverData.getReviews(bookId);
            }
        }
    }
</script>

<style scoped>
.book-container {
    /*border: 2px solid #333;*/
    font-size: 20px;

}

</style>