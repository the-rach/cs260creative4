const express = require('express');
const bodyParser = require("body-parser");

//this middleware runs on every single request to node (turns it into json to be easily used below)
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/bookStore', {
    useNewUrlParser: true
});

// Configure multer so that it will upload to '../front-end/public/images'
//multer is a library we are using to handle file uploads
const multer = require('multer') //imports multer
const upload = multer({
    dest: '../front-end/public/images/', //where we should upload photos to
    limits: { //limits tile size to this byte size (prevents user from uploading lots of info)
        fileSize: 10000000
    }
});


const bookSchema = new mongoose.Schema({
    id: Number,
    title: String,
    author: String,
    year: String,
    // imagePath: String,
});

const Book = mongoose.model('Book', bookSchema);

app.get('/api/book', async (req, res) => {
    //TODO: get books from mongo
    const books = [{
        bookId: 3,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        image: 'janeausten.jpeg',
        year: 1813
    }];
    res.send({success: true, books: books});
});

app.post('/api/book', async (req, res) => {
    const book = req.body;
    //TODO: save this to mongo

    //TODO: generate a real ID for the book
    book.bookId = 'our magical id here';

    console.log(book);
    res.send({success: true, book: book});
    // try{
    //     await book.save();
    //     res.send(book);
    // } catch (error) {
    //     console.log(error);
    //     res.sendStatus(500);
    // }
});

app.put('/api/book/:bookId', async (req, res) => {
    const book = req.body;
    console.log(book);
    //TODO: update this book in mongo

    let bookId = parseInt(req.params.bookId);
    if (isNaN(bookId)) {
        res.send({success: false, reason: 'bookId was not an integer: ' + bookId});
        return;
    }

    if (bookId !== book.bookId) {
        res.send({success: false, reason: 'bookId did not match: ' + bookId});
        return;
    }

    res.send({success: true});
    // try{
    //     await book.save();
    //     res.send(book);
    // } catch (error) {
    //     console.log(error);
    //     res.sendStatus(500);
    // }
});

app.delete('/api/book/:bookId', async (req, res) => {
    let bookId = parseInt(req.params.bookId);
    if (isNaN(bookId)) {
        res.send({success: false, reason: 'bookId was not an integer: ' + bookId});
        return;
    }

    //TODO: verify the exists in the database and if it doesn't
    // then return this error
    let bookFound = true;
    if (!bookFound) {
        res.send({success: false, reason: 'A book with that ID was not found: ' + bookId});
        return;
    }

    //TODO: delete the book from mongo here

    res.send({success: true});
    // try{
    //     await book.save();
    //     res.send(book);
    // } catch (error) {
    //     console.log(error);
    //     res.sendStatus(500);
    // }
});

app.post('/api/book/:bookId/review', async (req, res) => {
    const review = req.body;
    let bookId = parseInt(req.params.bookId);
    if (isNaN(bookId)) {
        res.send({success: false, reason: 'bookId was not an integer: ' + bookId});
        return;
    }

    //TODO: verify the exists in the database and if it doesn't
    // then return this error
    let bookFound = true;
    if (!bookFound) {
        res.send({success: false, reason: 'A book with that ID was not found: ' + bookId});
        return;
    }

    //TODO: generate an ID and put it on the review
    review.reviewId = 'some id';

    //TODO: add the book to the mongo review collection


    res.send({success: true, review: review});
    // try{
    //     await book.save();
    //     res.send(book);
    // } catch (error) {
    //     console.log(error);
    //     res.sendStatus(500);
    // }
});

app.delete('/api/book/:bookId/review/:reviewId', async (req, res) => {
    const review = req.body;
    let bookId = parseInt(req.params.bookId);
    if (isNaN(bookId)) {
        res.send({success: false, reason: 'bookId was not an integer: ' + bookId});
        return;
    }

    //TODO: verify the book exists in the database and if it doesn't
    // then return this error
    let bookFound = true;
    if (!bookFound) {
        res.send({success: false, reason: 'A book with that ID was not found: ' + bookId});
        return;
    }

    let reviewId = parseInt(req.params.reviewId);
    if (isNaN(bookId)) {
        res.send({success: false, reason: 'reviewId was not an integer: ' + reviewId});
        return;
    }

    //TODO: verify the review exists in the database and if it doesn't
    // then return this error
    let reviewFound = true;
    if (!reviewFound) {
        res.send({success: false, reason: 'A review with that ID was not found: ' + reviewId});
        return;
    }

    //TODO: delete the review from mongo

    res.send({success: true});
    // try{
    //     await book.save();
    //     res.send(book);
    // } catch (error) {
    //     console.log(error);
    //     res.sendStatus(500);
    // }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));