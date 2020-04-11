<template>
    <div class="wrapper">
        <input type="text" />

<!--        <div>-->
<!--            <div class="book" v-for="book in books" :key="book.id">-->
<!--                <div class="info">-->
<!--                    <h1>{{book.title}}</h1>-->
<!--                    <p>{{book.author}}</p>-->
<!--                </div>-->
<!--                <div class="image">-->
<!--                    <img :src="'/images/'+book.image">-->
<!--                </div>-->
<!--                <div class="buttons">-->
<!--                    &lt;!&ndash;                    <router-link :to="{name: '/bookDetail', params: {bookId: book.bookId}">View Book Detail</router-link>&ndash;&gt;-->
<!--                    <router-link :to="{name: 'bookDetail', params: {bookId: book.bookId}}">View Book Details</router-link>-->
<!--                    &lt;!&ndash;                    <button class="auto" v-on:click="">View Book Detail</button>&ndash;&gt;-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>
    export default { //this makes this component accessible for other pages
        name: 'book',
        //props are the parameters the component accepts
        props: { //when i use this component, i will pass in an array (this will be the mock data of library books)
            book: Object
        },
        methods: {
            // viewBookDetail: function(book) {
            //     //TODO: route new view book detail page
            //     console.log(book);
            // }

        }
    }
</script>


<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>