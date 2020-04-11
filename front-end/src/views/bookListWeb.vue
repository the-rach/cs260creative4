<template>
    <div>
        <h2>Your Book List:</h2>
        <!--use bookList component in this webpage-->
        <!--binding attribute :book-list to the books() computed property to pass this array into bookList component-->
        <bookList :book-list="books"/>
    </div>
</template>

<script>
    import bookList from "../components/bookList.vue" //use bookList component in bookListWeb.vue
    export default {
        name: 'bookListWeb', //name of this component
        components: { //components that can be used in bookListWeb template
            bookList
        },
        computed: { //the property is the bookList array
            books() {
                return this.$root.$data.bookList;
            }
        },
    }
</script>

<style scoped>


</style>