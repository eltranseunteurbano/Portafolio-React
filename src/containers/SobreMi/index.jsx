import React, {lazy, Suspense} from 'react'
import './index.scss'
import Loading from '../../components/Loading';

const Presentation = lazy(() => import ('../../components/Presentation'));
const Services = lazy(() => import ('../../components/Services'));

const SobreMi = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className='SobreMi'>
        <Presentation />
        <Services />
      </main>
    </Suspense>
  )
}

export default SobreMi;