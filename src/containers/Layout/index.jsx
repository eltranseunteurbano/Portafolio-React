import React, {lazy, Suspense} from 'react'
import Loading from '../../components/Loading';


const Header = lazy(() => import('../../components/Header')); 
const Footer = lazy(() => import('../../components/Footer')); 

const Layout = ({ children }) => {
  return (
    <Suspense fallback={<Loading />}>
      <div className='App'>
        <Header />
        {children}
        <Footer />
      </div>
    </Suspense>
  );
};

export default Layout;