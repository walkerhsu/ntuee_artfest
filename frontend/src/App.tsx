import {useRef, RefObject} from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NewsImgs from './components/ImagesFile/NewsImgs';
import NewsImgs2 from './components/ImagesFile/NewsImgs2';
import './App.css';

const IntroductionPage = lazy(() => import('./pages/IntroductionPage'));
const VisitPage = lazy(() => import('./pages/VisitPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

function App() {
  const ref: RefObject<HTMLDivElement>  = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    // console.log(ref.current);
  };

  return (
    <BrowserRouter>
      <NavBar handleClick={handleClick}/>
      <Routes>
        <Route path='/' element={<HomePage />} />
         
        <Route path='visit' element={
          <Suspense fallback={<div>Loading...</div>}>
            <VisitPage />
          </Suspense>
        } />

        <Route path='introductions' element={
          <Suspense fallback={<div>Loading...</div>}>
            <IntroductionPage/>
          </Suspense>
        }
        />
       
        <Route path='news' element={
          <Suspense fallback={<div>Loading...</div>}>
            <NewsPage NewsImgs={NewsImgs}/>
          </Suspense>
        } />

        <Route path='news/2' element={
          <Suspense fallback={<div>Loading...</div>}>
            <NewsPage NewsImgs={NewsImgs2}/>
          </Suspense>
        } />
        <Route path='news/3' element={
          <Suspense fallback={<div>Loading...</div>}>
            <NewsPage NewsImgs={NewsImgs}/>
          </Suspense>
        } />
        <Route path='news/4' element={
          <Suspense fallback={<div>Loading...</div>}>
            <NewsPage NewsImgs={NewsImgs}/>
          </Suspense>
        } />

        <Route path='about' element={
          <Suspense fallback={<div>Loading...</div>}>
            <AboutUsPage />
          </Suspense>
        } />

        <Route path='*' element={<ErrorPage />} />

        {/* <Route path='Announcement/:id' element={
          <Suspense fallback={<div>Loading...</div>}>
            <Announcement />
          </Suspense>
        } /> */}
      
      </Routes>
      <Footer ref={ref}/>
      <div ref={ref}/>
    </BrowserRouter>
    
  );
}

export default App;
