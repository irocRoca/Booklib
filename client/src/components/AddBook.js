import React from "react";
import {
  Container,
  Paper,
  Grid,
  TextField,
  makeStyles
} from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 15,
    marginTop: 50
  }
}));

const AddBook = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item sm={6} />
            <Grid item sm={6}>
              <TextField label="Title" name="title" placeholder="Enter Title" />

              <TextField
                label="Author"
                name="Author"
                placeholder="Book Author"
              />

              <Grid>
                <TextareaAutosize
                  label="description"
                  name="description"
                  placeholder="Short Description"
                  rows={5}
                />
              </Grid>
              <TextField label="bookCover" name="bookCover" type="file" />
              <TextField
                label="Published Date"
                name="published"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default AddBook;
