import axios from 'axios'; //TODO NEW

let server = {
    //okay to leave this empty
};

server.getBooks = async function () {
    try {
        let response = await axios.get("/api/books");
        this.books = response.data;
        return true;

    } catch (error) {
        console.log(error);
    }
};





export default server;