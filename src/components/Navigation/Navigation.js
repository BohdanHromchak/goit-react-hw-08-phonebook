import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header>
        <nav>
          <NavLink to="/">
            Home
          </NavLink>

          {isLoggedIn ? (
            <>
            <NavLink to="/contacts">
              Contacts
            </NavLink>
            <UserMenu/>
            </>
          ) : (<>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
          </>)}
        </nav>
        </header>
      );
}