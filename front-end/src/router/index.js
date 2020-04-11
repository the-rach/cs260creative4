import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeLibrary from "../views/homeLibraryWeb.vue";
import bookDetail from "../views/bookDetail.vue";
import booksToReadWeb from "../views/booksToReadWeb.vue";
import bookSuggestionsWeb from "../views/bookSuggestionsWeb";


Vue.use(VueRouter)

/*
NOTE: the path is the URL path (can give it any pathname I want despite the name or component name). The name is the name of the view
web page that will be linked to this path, and the component is the instance of this webpage that was imported. This component is the
web page vue, and not the component vue that is in this webpage.
 */

const routes = [
  {
    path: '/',
    name: 'HomeLibrary',
    component: HomeLibrary
  },
  {
    path: '/bookDetail/:bookId',
    name: 'bookDetail',
    component: bookDetail
  },
  {
    path: '/booksToRead',
    name: 'booksToReadWeb',
    component: booksToReadWeb
  },
  {
    path: '/bookSuggestions',
    name: 'bookSuggestionsWeb',
    component: bookSuggestionsWeb
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
