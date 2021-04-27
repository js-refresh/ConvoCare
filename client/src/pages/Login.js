import { Button, Grid, Paper, TextField } from '@material-ui/core';
import { useState } from 'react';
import { Form, } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { setUser } from '../redux/actions';

export default function Login() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const history = useHistory();
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert('User Login Successful');
          dispatch(setUser(data));
          history.push('/');
        }
      });
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Paper elevation={3}>
      <Form onSubmit={handleSubmit}>
        <Grid container style={{textAlign: 'center'}}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              type="text"
              onChange={handleChange}
              value={form.username}
              name="username"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              onChange={handleChange}
              value={form.password}
              name="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button className='login-btn' type="submit">Login</Button>
          </Grid> 
          <Grid item xs={12}>
            <Button className='register-btn' type="submit"><Link className="register" to="register">Register</Link></Button>
          </Grid>
        </Grid>
      </Form>
    </Paper>
  );
}