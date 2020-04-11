<template>
    <div>
        <h2>Book Suggestions</h2>
        <p>Please submit a book that we should add to our Book Lounge Library.</p>

        <!--use bookSuggestions component in this webpage-->
        <!--binding attribute :book-list to the books() computed property to pass this array into bookList component-->
        <bookSuggestions @review-submitted="addReview"/> <!--do I need to pass anything in?-->

        <div class="suggestion-results">
            <h2>Current Book Suggestions</h2>
            <p v-if="!this.$root.$data.reviews.length">There are no reviews yet.</p>
            <ul>
                <li v-for="review in this.$root.$data.reviews" :key="review.id">
                    <p>Name: {{ review.name }} --- Suggestion: {{ review.review }}</p>
<!--                    <p>{{ review.review }}</p>-->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import bookSuggestions from "../components/bookSuggestions.vue" //use bookSuggestions component in bookSuggestionsWeb.vue
    export default {
        name: 'bookSuggestionsWeb', //name of this component
        components: { //components that can be used in bookListWeb template
            bookSuggestions
        },
        methods: {
            addReview(productReview) {
                this.$root.$data.reviews.push(productReview)
            }
        }

    }
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 20px;
}

.suggestion-results{
    margin: auto;
}

</style>