const express = require('express');
const bodyParser = require("body-parser");
const uuid = require("uuid")

//this middleware runs on every single request to node (turns it into json to be easily used below)
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/bookstore', {
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
    bookId: {
        required: true,
        type: String,
        unique: true
    },
    title: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    year: String,
    imagePath: String
});

const Book = mongoose.model('Book', bookSchema);

const reviewSchema = new mongoose.Schema({
    reviewId: {
        required: true,
        type: String,
        unique: true
    },
    bookId: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    comment: {
        required: true,
        type: String
    }
});

const Review = mongoose.model('Review', reviewSchema);

app.get('/apis/book', async (req, res) => {
    try {
        let books = await Book.find(); //get a list of all the books in the collection
        res.send({success: true, books: books});
    } catch (error) {
        console.log(error);
        res.send({success: false, reason: 'Unexpected error: ' + error.message});
    }


});

app.post('/apis/book', async (req, res) => {
    const newBook = new Book({
        bookId: uuid.v4(), //creates a unique id
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        imagePath: req.body.imagePath ? req.body.imagePath : null
    });
    try {
        await newBook.save();
        //const book = await Book.findOne({bookId: newBook.bookId}); //finds book in collection w/ specific id
        console.log(newBook);
        res.send({success: true, book: newBook});
    } catch (error) {
        console.log(error);
        res.send({success: false, reason: 'Unexpected error: ' + error.message});
    }
});

app.put('/apis/book/:bookId', async (req, res) => {
    let bookId = req.params.bookId;
    if (bookId !== req.body.bookId) {
        res.send({success: false, reason: 'bookId did not match: ' + bookId});
        return;
    }

    try {
        //we don't want to use _id because it is a pain, create a unique string id instead
        // let book = await Book.findOne({ //find book in DB and saves it in item
        //     _id: req.params.id
        // });
        //finds book w/ this property (bookId:) with this specific book id
        const book = await Book.findOne({bookId: bookId}); //finds book in DB collection w/ specific id

        if (book !== null) { //book is not in DB
            book.title = req.body.title;
            book.author =  req.body.author;
            book.year = req.body.year;
            await book.save(); //save it in DB
            res.send({success: true, book});
        } else {
            res.send({success: false, reason: 'Did not find the book to update: ' + bookId});
        }

    } catch(error) {
        console.log(error);
        res.send({success: false, reason: 'Unexpected error: ' + error.message});
    }
});

app.delete('/apis/book/:bookId', async (req, res) => {
    let bookId = req.params.bookId;

    try {
        const book = await Book.findOne({bookId: bookId}); //finds book in DB collection w/ specific id
        if (book !== null) {
            await Book.deleteOne({bookId: bookId});
            res.send({success: true});
        } else {
            res.send({success: false, reason: 'Did not find the book to delete: ' + bookId});
        }

    } catch(error) {
        console.log(error);
        res.send({success: false, reason: 'Unexpected error: ' + error.message});
    }
});

/*
const newBook = new Book({
        bookId: uuid.v4(), //creates a unique id
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        imagePath: req.body.imagePath ? req.body.imagePath : null
    });
    try {
        await newBook.save();
        //const book = await Book.findOne({bookId: newBook.bookId}); //finds book in collection w/ specific id
        console.log(newBook);
        res.send({success: true, book: newBook});
    } catch (error) {
        console.log(error);
        res.send({success: false, reason: 'Unexpected error: ' + error.message});
    }


 */

app.post('/apis/book/:bookId/review', async (req, res) => {
    let bookId = req.params.bookId;

    if (bookId !== req.body.bookId) {
        res.send({success: false, reason: 'Book IDs do not match: ' + bookId});
        return;
    }

    try {
        const book = await Book.findOne({bookId: bookId}); //finds book in collection w/ specific id
        if (book === null) {
            res.send({success: false, reason: 'A book with that ID was not found: ' + bookId});
            return;
        }

        const newReview = new Review({
            reviewId: uuid.v4(), //creates a unique id
            bookId: req.body.bookId,
            name: req.body.name,
            comment: req.body.comment
        });
        await newReview.save();
        res.send({success: true, review: newReview});

    } catch (error) {
        console.log(error);
        res.send({success: false, reason: 'Unexpected error: ' + error.message});
    }
});

app.get('/apis/book/:bookId/review', async (req, res) => {
    let bookId = req.params.bookId;

    try {
        const book = await Book.findOne({bookId: bookId}); //finds book in collection w/ specific id
        if (book === null) {
            res.send({success: false, reason: 'A book with that ID was not found: ' + bookId});
            return;
        }

        let reviews = await Review.find({bookId: bookId}); //get a list of all the reviews in the collection
        res.send({success: true, reviews: reviews});

    } catch (error) {
        console.log(error);
        res.send({success: false, reason: 'Unexpected error: ' + error.message});
    }
});

app.listen(4000, () => console.log('Server listening on port 4000!'));