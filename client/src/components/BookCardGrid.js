import React from "react";
import Grid from '@mui/material/Grid';
import BookCard from './BookCard';

const BookCardGrid = ({ books }) => {

  return (
    <>
     <div className="BookGridContainer">
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={book.id}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </div>
    </>
  );
};

export default BookCardGrid;

