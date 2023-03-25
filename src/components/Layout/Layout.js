import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation/Navigation';


export const Layout = () => {
    return <>
      <Navigation/>
      <Suspense fallback={null}>
      <Outlet />
      </Suspense>
    </>;
  };