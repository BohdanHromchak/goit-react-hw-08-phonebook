import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { TextField, Button, Container } from '@mui/material';


 const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
<Container sx={{maxWidth: 'sm', display: 'flex', flexDirection: 'column', gap: '1rem', width: '200'}}>



      <TextField id="outlined-basic" label="Username" variant="outlined" type="text" name="name"/>
      <TextField id="outlined-basic" label="Email" variant="outlined" type="email" name="email"/>
      <TextField id="outlined-basic" label="Password" variant="outlined" type="password" name="password" />
      <Button type="submit" variant="contained" sx={{width: 1/3, margin: '0 auto'}}>Register</Button>
      </Container>

    </form>
  );
};
export default Register