<template>
    <div>
        <h2>Create a new book review...</h2>

        <div class="form">
            <input v-model="review.name" type="text" name="name" placeholder="Name" />
            <input v-model="review.comment" type="text" name="comment" placeholder="Comment" />
            <button class="auto" v-on:click="createReview()">Create Review</button>
        </div>
    </div>
</template>

<script>
    import serverData from "../serverData"
    import router from '../router'

    export default {
        name: 'review', //name of this component
        components: { //components that can be used in bookListWeb template
        },
        data() {
            return {
                review: null
            }
        },
        created: function() {
            this.fetchData();
        },
        methods: {
            fetchData: function() {
                this.review = {name: '', comment: ''};

            },
            createReview: async function() {
                // Put the book ID of the book to tie this review to into the
                // review object
                this.review.bookId = this.$route.params.bookId;

                // Send the review to the server to be created
                await serverData.createReview(this.review);

                // Open a message saying the book was created
                alert('The review was created!');

                // Take them back to the home page
                await router.push({ name: "HomeLibrary" });
            }
        }
    }
</script>

<style scoped>
    input {
        display: block;
        width: 100%;
    }

    .form {
        width: 400px;
    }

</style>