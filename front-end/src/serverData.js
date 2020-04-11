import axios from 'axios'; //TODO NEW

let server = {
    //okay to leave this empty
};

server.getBooks = async function () {
    try {
        let response = await axios.get("/api/book");
        if (!response.data.success) {
            alert('Unexpected error getting books from server: ' + response.reason);
            return false;
        }
        return response.data.books;
    } catch (error) {
        console.log(error);
        alert('Unexpected error getting books: ' + error.message);
    }
};

server.getReviews = async function (bookId) {
    try {
        let response = await axios.get("/api/book/" + bookId + "/review");
        if (!response.data.success) {
            alert('Unexpected error getting books from server: ' + response.reason);
            return false;
        }
        return response.data.reviews;
    } catch (error) {
        console.log(error);
        alert('Unexpected error getting reviews: ' + error.message);
    }
};





export default server;