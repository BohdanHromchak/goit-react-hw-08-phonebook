import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

    return(<div>
        <p>{user.email}</p>
        <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
      </div>)
}

