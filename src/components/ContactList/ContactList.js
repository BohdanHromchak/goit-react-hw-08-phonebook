import {
  selectIsLoading,
  selectError,
  selectFilterQuery,
} from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchContacts,
  deleteContacts,
} from '../../redux/contacts/contactsOperations';
import { Grid, Paper, Button } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectFilterQuery);

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ gap: '1rem' }}
      >
        {contacts.map(({ id, name, number }) => (
          <Paper
            key={id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: 500,
            }}
          >
            <ContactsIcon />
            <span>{name}:</span>
            <span>{number}</span>
            <Button
              onClick={() => dispatch(deleteContacts(id))}
             
            >
              Delete
            </Button>
          </Paper>
        ))}
      </Grid>
    </>
  );
};
