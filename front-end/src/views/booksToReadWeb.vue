<template>
    <div>
        <h2>Your To Read List:</h2>
        <!--use booksToRead component in this webpage-->
        <!--binding attribute :book-list to the books() computed property to pass this array into booksToRead component-->

        <!--NOTE: THIS WANTS THIS TO BE :BOOKS-TO-READ AND NOTHING ELSE, WHY?-->
        <booksToReadList :books-to-read="books"/>
    </div>
</template>

<script>
    import booksToReadList from "../components/booksToReadList.vue" //use booksToReadList component in booksToReadList.vue
    export default {
        name: 'booksToReadWeb', //name of this component
        components: { //components that can be used in bookListWeb template
            booksToReadList
        },
        computed: { //the property is the public ToReadList array defined in main.js
            books() {
                return this.$root.$data.toReadList;
            }
        },
    }
</script>

<style scoped>


</style>