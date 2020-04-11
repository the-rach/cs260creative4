<template>
    <div class="wrapper">
        <div class="books" v-if="booksToRead.length > 0">
            <div class="book" v-for="book in booksToRead" :key="book.id">
                <div class="info">
                    <h1>{{book.book.title}}</h1>
                    <p>{{book.book.author}}</p>
                </div>
                <div class="image">
                    <img :src="'/images/'+book.book.image">
                </div>
                <div class="buttons">
                    <button class="auto" v-on:click="removeFromBookList(book)">Remove from To Read List</button>
                </div>
            </div>
        </div>
        <div v-else>
            Please add books to your To Read List first and come back.
        </div>
    </div>
</template>

<script>
    export default {
        name: 'booksToReadList',
        props: { //books to read is passed as an attribute
            booksToRead: Array
        },
        methods: {
            removeFromBookList: function(book) { //toReadList is the public array declared in main.js
                let idx = this.$root.$data.toReadList.findIndex(aBook => aBook.book.id === book.id);
                this.$root.$data.toReadList.splice(idx, 1);
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