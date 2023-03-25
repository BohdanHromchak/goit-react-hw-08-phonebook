import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
      <ContactPhoneIcon color="primary" sx={{ fontSize: '4rem' }} />
      <Typography sx={{fontSize: '2rem', color: '#1976d2', fontWeight: 800}}>PHONEBOOK</Typography>
      
    </Container>
  );
};

export default Home;
