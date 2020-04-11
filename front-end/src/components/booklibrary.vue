<template>
    <div class="wrapper">
        <div class="books">
            <div class="book" v-for="book in books" :key="book.id">
                <div class="info">
                    <h1>{{book.title}}</h1>
                    <p>{{book.author}}</p>
                    <p>{{book.year}}</p>
                </div>
<!--                <div class="image">-->
<!--                    <img :src="'/images/'+book.image">-->
<!--                </div>-->
                <div class="buttons">
                     <router-link :to="{name: 'bookDetail', params: {bookId: book.bookId}}">View Book Details</router-link>
                    <router-link :to="{name: 'book', params: {bookId: book.bookId}}">Edit Book</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default { //this makes this component accessible for other pages
        name: 'libraryBooks',
        //props are the parameters the component accepts
        props: { //when i use this component, i will pass in an array (this will be the mock data of library books)
            books: Array,
        },
        methods: {
            viewBookDetail: function(book) {
                //TODO: route new view book detail page
                console.log(book);
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
        background: #f2b5a0;
        color: #000;
        padding: 10px 30px;
        height: 200px;
        border: 2px solid #333;
    }

    .info h1 {
        font-size: 22px;
    }

    .info h2 {
        font-size: 18px;
    }

    .info p {
        margin: 0px;
        font-size: 18px;
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