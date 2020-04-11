import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import mock from './mock-data'
import serverData from "./serverData"
import AsyncComputed from 'vue-async-computed'

Vue.config.productionTip = false;


Vue.use(AsyncComputed);

let main = async function () {
  let books = await serverData.getBooks();

  let data = {
      // bookLibrary: mock,
      bookLibrary: books,
      bookList: [],
      toReadList: [],
      reviews: []
  };

  new Vue({
    router,
    data,
    render: h => h(App)
  }).$mount('#app')
};

main();
