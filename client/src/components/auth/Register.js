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

const Register = props => {
  const [formData, setFormData] = useState({
    email: null,
    password: null,
    password2: null
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/auth/register", formData)
      .then(res => {
        console.log(res);
        // Send res to State with user
        // Send to user state when create Redux
        props.history.push("/");
      })
      .catch(err => {
        console.log(err.response.data);
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
          Register
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
            <TextField
              type="password"
              label="Confirm Password"
              name="password2"
              margin="normal"
              fullWidth
              className={classes.userText}
              onChange={handleChange}
              error={errors.password2 ? true : false}
              helperText={errors.password2 ? errors.password2 : null}
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
              Already have an account? <Link to="/login">Login</Link>
            </Typography>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Register;

// <div className={classes.root}>
//   <Container maxWidth="xs">
//     <Typography align="center" variant="h4" className={classes.title}>
//       Register
//     </Typography>
//     <Paper className={classes.paper}>
//       <form>
//         <TextField
//           label="Email"
//           margin="normal"
//           fullWidth
//           className={classes.userText}
//           onChange={handleChange}
//           error={errors.email ? true : false}
//           helperText={errors.email ? errors.email : null}
//         />
//         <TextField
//           label="Password"
//           margin="normal"
//           fullWidth
//           className={classes.userText}
//           onChange={handleChange}
//           error={errors.password ? true : false}
//           helperText={errors.password ? errors.password : null}
//         />
//         <TextField
//           label="Confirm Password"
//           margin="normal"
//           fullWidth
//           className={classes.userText}
//           onChange={handleChange}
//           error={errors.password2 ? true : false}
//           helperText={errors.password2 ? errors.password2 : null}
//         />
//         <Button
//           color="primary"
//           variant="contained"
//           fullWidth
//           className={classes.btn}
//         >
//           Submit
//         </Button>
//         <Typography variant="subtitle2" className={classes.subtitle}>
//           Already have an account? Login
//         </Typography>
//       </form>
//     </Paper>
//   </Container>
// </div>;
