import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/contacts/contactsOperations';
import { TextField, Button, Container } from '@mui/material';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.phone.value;
console.log('ok')
    dispatch(addContacts({ name, number }));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          mb: '2rem',
          
        }}
      >
        <TextField
        sx={{width: 400}}
          id="filled-basic"
          label="Name"
          variant="filled"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <TextField
         sx={{width: 400}}
          id="filled-basic"
          label="Number"
          variant="filled"
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button variant="outlined" sx={{fontWeight: 700,  width: 150}} type="submit">Add contact</Button>
      </Container>
    </form>
  );
};
