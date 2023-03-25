import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Contacts } from './Contacts/Contacts';
import { Register } from './Register/Register';
import { Login } from './Login/Login';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/selectors';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';


export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return  isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route path="login" element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          } />
        <Route path="contacts" element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          } />
      </Route>
    </Routes>
  );
};
