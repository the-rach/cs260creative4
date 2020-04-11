<template>
    <div class="form-container">
        <form class="review-form" @submit.prevent="onSubmit">
            <p>
                <label for="name">Name:</label>
                <input id="name" v-model="name" placeholder="name">
            </p>

            <p>
                <label for="review">Review:</label>
                <textarea id="review" v-model="review"></textarea>
            </p>

            <p>
                <input type="submit" value="Submit">
            </p>

        </form>
    </div>
</template>

<script>
    export default {
        name: 'bookSuggestions',
        methods: {
            data() {
                return {
                    name: null,
                    review: null,
                    id: this.name,
                }
            },
            onSubmit() {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    id: this.name,
                }
                this.$emit('review-submitted', productReview)
                this.name = null
                this.review = null
                this.id = null
            }
        }
    }
</script>

<style scoped>
    .review-form {
        width: 400px;
        padding: 20px;
        margin: auto;
        border: 1px solid #d8d8d8;
    }

    .form-container{
        padding: 50px;
    }

</style>