import { Fragment } from 'react';
import MainHeader from './MainHeader.component';

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
