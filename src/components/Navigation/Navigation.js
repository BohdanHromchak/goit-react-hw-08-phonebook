import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Box, AppBar, Toolbar, Button, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={{ flexGrow: 1, mb: '1rem' }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <NavLink to="/">
            <IconButton
              color="inherit"
              aria-label="home"
              edge="start"
              size="large"
            >
              <HomeIcon />
            </IconButton>
          </NavLink>

          {isLoggedIn ? (
            <Box sx={{display: 'flex', alignItems: 'center',  gap: '2rem'}}>
              <NavLink to="/contacts"><Button color="inherit">CONTACTS</Button></NavLink>
              <UserMenu />
            </Box>
          ) : (
            <div>
              <NavLink to="/register">
                <Button color="inherit">Register</Button>
              </NavLink>
              <NavLink to="/login">
                <Button color="inherit">LOGIN</Button>
              </NavLink>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
