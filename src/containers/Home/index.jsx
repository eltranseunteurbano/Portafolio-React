import React, {lazy, Suspense} from 'react'
import './index.scss'
import Loading from '../../components/Loading';

const Presentation = lazy(() => import ('../../components/Presentation'));
const Services = lazy(() => import ('../../components/Services'));
const LastProjects = lazy(() => import ('../../components/LastsProjects'));

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className='Home appear'>
        <Presentation />
        <Services />
        <LastProjects />
      </main>
      </Suspense>
  )
}

export default Home;

