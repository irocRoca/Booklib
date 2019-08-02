import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Paper,
  Grid,
  TextField,
  makeStyles,
  Button
} from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 15,
    marginTop: 50
  }
}));

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    bookCover: "qwert",
    published: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(book);
    axios
      .post("/api/add/book", book)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err.response.data));
  };

  const handleChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const classes = useStyles();
  return (
    <div>
      <Container>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item sm={6} />
            <form onSubmit={handleSubmit} noValidate>
              <Grid item sm={6}>
                <TextField
                  label="Title"
                  name="title"
                  placeholder="Enter Title"
                  onChange={handleChange}
                  value={book.title}
                />

                <TextField
                  label="Author"
                  name="author"
                  placeholder="Book Author"
                  onChange={handleChange}
                  value={book.author}
                />

                <Grid>
                  <TextareaAutosize
                    label="description"
                    name="description"
                    placeholder="Short Description"
                    rows={5}
                    onChange={handleChange}
                    value={book.description}
                  />
                </Grid>
                {/* <TextField
                  label="bookCover"
                  name="bookCover"
                  type="file"
                  onChange={handleFile}
                  value={book.bookCover}
                /> */}
                <TextField
                  label="Published Date"
                  name="published"
                  type="date"
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={handleChange}
                  value={book.publishedDate}
                />
              </Grid>
              <Button color="primary" variant="contained" type="submit">
                Submit
              </Button>
            </form>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default AddBook;
