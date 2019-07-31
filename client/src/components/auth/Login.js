import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(themes => ({
  root: {
    flexGrow: 1,
    marginTop: 50
  },
  paper: {
    padding: " 20px 48px 64px 48px"
  },
  userText: {
    paddingTop: 8,
    paddingBottom: 8
  },
  btn: {
    marginTop: 25
  },
  title: {
    marginBottom: 20
  },
  subtitle: {
    marginTop: 10,
    color: "lightgrey"
  }
}));

const Login = props => {
  const [formData, setFormData] = useState({
    email: null,
    password: null
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/auth/login", formData)
      .then(res => {
        console.log(res.data);
        // Send res to State with user
        // Send to user state when create Redux
        props.history.push("/");
      })
      .catch(err => {
        setErrors(err.response.data);
      });
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="xs">
        <Typography align="center" variant="h4" className={classes.title}>
          Login
        </Typography>
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              label="Email"
              margin="normal"
              name="email"
              fullWidth
              className={classes.userText}
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email ? errors.email : null}
            />
            <TextField
              type="password"
              label="Password"
              name="password"
              margin="normal"
              fullWidth
              className={classes.userText}
              onChange={handleChange}
              error={errors.password ? true : false}
              helperText={errors.password ? errors.password : null}
            />
            <Button
              color="primary"
              variant="contained"
              fullWidth
              className={classes.btn}
              type="submit"
            >
              Submit
            </Button>
            <Typography variant="subtitle2" className={classes.subtitle}>
              Don't have an account? <Link to="/register"> Register</Link>
            </Typography>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
