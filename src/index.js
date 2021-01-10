import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg"
      alt=""
    />
  );
};

const Title = () => {
  return <h4>A Promised Land</h4>;
};

const Author = () => {
  return (
    <h5 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
      Barack Obama
    </h5>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
