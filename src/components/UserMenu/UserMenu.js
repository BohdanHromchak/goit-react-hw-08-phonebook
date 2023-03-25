import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/selectors';
import { useSelector } from 'react-redux';
import {  Button, Box } from '@mui/material';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

    return(<Box sx={{display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '1rem'}}>
        <p>{user.email}</p>
        <Button variant="outlined" color="inherit" type="button" size="small" onClick={() => dispatch(logOut())}>Logout</Button>
      </Box>)
}

