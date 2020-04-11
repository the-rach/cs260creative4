<template>
    <div>
        <h2>Book Detail</h2>
        <div>Title: {{book.title}}</div>
        <div>Author: {{book.author}}</div>
        <div>Year: {{book.year}}</div>

        <div>BOOK REVIEWS: </div>
        <div class="review" v-for="review in reviews" :key="review.reviewId">
            <div>Name: {{review.name}}</div>
            <div>Comment: {{review.comment}}</div>
        </div>
    </div>
</template>

<script>
    import serverData from "../serverData"
    export default {
        name: 'bookDetail', //name of this component
        components: { //components that can be used in bookListWeb template
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


</style>