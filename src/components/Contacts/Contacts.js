import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from '@mui/material';

const Contacts = () => {
  return (
    <>
      <ContactForm />

      {/* <Container sx={{  display: 'flex', alignItems: 'center',
          gap: '1rem', 
          flexDirection: 'column',
          justifyContent: 'center',}}> */}
        <Filter />
        <ContactList />
      {/* </Container> */}
    </>
  );
};
export default Contacts;
