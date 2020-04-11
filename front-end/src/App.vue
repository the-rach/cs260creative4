<template>
  <div id="app">
    <h1>Welcome to The Book Lounge!</h1>
    <p>In The Book Lounge, you can add the books you've read to your Book List or make a list of books that you want to read </p>
    <img class="home-image" src = "../public/images/book.jpg" alt="Books">
    <div id="nav">
      <div class="nav-item">
        <router-link to="/">The Book Lounge Library</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/booklist">My Book List</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/booksToRead">Books To Read List</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/bookSuggestions">Books Suggestions</router-link>
      </div>
    </div>
    <router-view/>

    <div class = "footer">
      <p>Contact me! <a href="https://github.com/the-rach">Github Classroom Account</a></p>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-align: center;
  color: gray;
  padding: 30px;
  /*background-color: lavenderblush;*/
}

#nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: whitesmoke;
  border: 1px solid #e7e7e7;
  text-align: center;
}


.nav-item {
  float: left;
  border-right: 1px solid #bbb;
  padding: 15px;
}

.home-image {
  padding: 30px;

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
