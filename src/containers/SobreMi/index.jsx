import React, {lazy, Suspense} from 'react'
import './index.scss'
import Loading from '../../components/Loading';

const Presentation = lazy(() => import ('../../components/Presentation'));
const Services = lazy(() => import ('../../components/Services'));
const Works = lazy(() => import('../../components/Works'));
const Studies = lazy(() => import('../../components/Studies'));

const SobreMi = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className='SobreMi'>
        <Presentation />
        <Services />
        <Works />
        <Studies />
      </main>
    </Suspense>
  )
}

export default SobreMi;