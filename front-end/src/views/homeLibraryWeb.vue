<template>
  <div>
    <div class="intro">
    <h2>This is The Book Lounge Library collection!</h2>
    <p>Add the books you've read to your Book List or add books that you would like to read to your Books To Read List</p>
    </div>
    <!--This makes use of the booklibrary component, & binds the books attribute to the books computed value --->
    <!--books is assigned the value of bookLibrary (which is all the mock data library) and it is passed into libraryBooks component-->
    <libraryBooks :books="books"/>
  </div>
</template>

<script>
import libraryBooks from "../components/booklibrary.vue" //use books component and make it a property in homeLibraryWeb.vue
// import axios from 'axios'; //TODO NEW

export default {
  name: 'HomeLibrary',
  components: {
    libraryBooks //this has a libraryBooks component, which was imported from bookLibrary.vue
  },
  computed: {
    books() { //this is a computed property and returns the bookLibrary from main.js
      return this.$root.$data.bookLibrary;
      // return libraryBooks.created(); //TODO NEW
    },
    // data() {
    //
    // }
  }
}
</script>

<style scoped>
 .intro {
   padding-top: 20px;
 }
</style>