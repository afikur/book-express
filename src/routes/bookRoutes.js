const express = require('express');

const bookRouter = express.Router();

function route(nav) {
  const books = [
    {
      id: '1',
      title: 'War and Peace',
      genre: 'Historical Fiction',
      author: 'Lev Nikolayenvich Tolstory',
      reead: false,
    },
    {
      id: '2',
      title: 'Les Miserables',
      genre: 'Historial Fiction',
      author: 'Victor Hugo',
      read: false,
    },
    {
      id: '3',
      title: 'The Time Machine',
      genre: 'Science Fiction',
      author: 'H. G. Wells',
      read: false,
    },
    {
      id: '4',
      title: 'A Journey into the Center of the Earth',
      genre: 'Science Fiction',
      author: 'Jules Verne',
      read: false,
    },
    {
      id: '5',
      title: 'The Wind in the Willows',
      genre: 'Fantasy',
      author: 'Kenneth Gramhame',
      read: false,
    },
    {
      id: '6',
      title: 'Life on the MIssissippi',
      genre: 'History',
      author: 'Mark Twain',
      read: false,
    },
    {
      id: '7',
      title: 'Childhood',
      genre: 'Biography',
      author: 'Lev Nikolayevich Tolstory',
      read: false,
    },
  ];

  bookRouter.route('/')
    .get((req, res) => {
      res.render('bookListView', {
        nav,
        title: 'Library',
        books,
      });
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render('bookView', {
        nav,
        title: 'Library',
        book: books.find(book => book.id === id),
      });
    });

  return bookRouter;
}

module.exports = route;
