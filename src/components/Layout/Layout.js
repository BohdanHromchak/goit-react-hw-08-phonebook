import css from './Layout.module.css'
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => {
    return <div className={css.container}>
      <Navigation/>
      <Outlet />
    </div>;
  };