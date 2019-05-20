import dotenv from 'dotenv';
import express from 'express';
import contactsRouter from './api/contacts';
import postsRouter from './api/posts';
import bodyParser from 'body-parser';
import loadContacts from './contactsData';
import loadUsers from './userData';
import loadPosts from './postsData';
import usersRouter from './api/users';
import session from 'express-session';
import authenticate from './authenticate';
import passport from './auth';
import './db';

module.exports = require("./main.js");

dotenv.config();

export const app = express(); 

const port = process.env.PORT;


//session middleware
app.use(session({
  secret: 'ilovedarts',
  resave: true,
  saveUninitialized: true
}));

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.use('/api/contacts', contactsRouter);
app.use('/api/posts', passport.authenticate('jwt', {session: false}), postsRouter);
app.use('/api/users', usersRouter);


app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});