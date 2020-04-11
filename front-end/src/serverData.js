import axios from 'axios'; //TODO NEW

let server = {
    //okay to leave this empty
};

server.getBooks = async function () {
    try {
        let response = await axios.get("/apis/book");
        if (!response.data.success) {
            alert('Unexpected error getting books from server: ' + response.reason);
            return false;
        }
        return response.data.books;
    } catch (error) {
        // console.log(error);
        alert('Unexpected error getting books: ' + error.message);
    }
};

server.createBook = async function(book) {
    try {
        let response = await axios.post("/apis/book", book);
        if (!response.data.success) {
            alert('Unexpected error creating book: ' + response.reason);
            return {};
        }
        return response.data.book;
    } catch (error) {
        // console.log(error);
        alert('Unexpected error creating book: ' + error.message);
    }
};

server.updateBook = async function(book) {
    try {
        let response = await axios.put("/apis/book/" + book.bookId, book);
        if (!response.data.success) {
            alert('Unexpected error updating book: ' + response.reason);
            return {};
        }
        return response.data.book;
    } catch (error) {
        // console.log(error);
        alert('Unexpected error updating book: ' + error.message);
    }
};

server.deleteBook = async function(bookId) {
    try {
        let response = await axios.delete("/apis/book/" + bookId);
        if (!response.data.success) {
            alert('Unexpected error deleting book: ' + response.reason);
            return false;
        }
        return true;
    } catch (error) {
        // console.log(error);
        alert('Unexpected error deleting book: ' + error.message);
        return false;
    }
};

server.getReviews = async function (bookId) {
    try {
        let response = await axios.get("/apis/book/" + bookId + "/review");
        if (!response.data.success) {
            alert('Unexpected error getting books from server: ' + response.reason);
            return false;
        }
        return response.data.reviews;
    } catch (error) {
        // console.log(error);
        alert('Unexpected error getting reviews: ' + error.message);
    }
};

server.createReview = async function (review) {
    try {
        let response = await axios.post("/apis/book/" + review.bookId + "/review", review);
        if (!response.data.success) {
            alert('Unexpected error creating review: ' + response.reason);
            return false;
        }
        return response.data.review;
    } catch (error) {
        // console.log(error);
        alert('Unexpected error creating review: ' + error.message);
    }
};






export default server;