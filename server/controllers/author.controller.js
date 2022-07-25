const Author = require("../models/author.model");

const createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then((newAuthor) => {
            console.log(newAuthor)
            res.json({ newAuthor });
        })
            .catch((err) => console.log(err))
};

const getAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            console.log(allAuthors);
            res.json(allAuthors);
        })
    .catch((err) => console.log(err))
};

const getOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then((queriedAuthor) => {
            console.log(queriedAuthor);
            res.json(queriedAuthor);
        })
        .catch((err) => console.log(err))
};

const updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedAuthor) => {
            console.log(updatedAuthor);
            res.json({ updatedAuthor });
        })
        .catch((err) => console.log(err))
};

const deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then((deletedResponse) => {
            console.log(deletedResponse)
            res.json({ deletedResponse });
        })
        .catch((err) => console.log(err))
};

module.exports = {
    createNewAuthor,
    getOneAuthor,
    getAllAuthors,
    updateAuthor,
    deleteAuthor,
};