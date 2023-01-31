import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/Home/Home';
import News from './components/News/News';
import About from './components/About/About';
import Foods from './components/Foods/Foods';
import NewsDetail from './components/NewsDetail/NewsDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/about' element={<About />} />
        <Route path='/foods' element={<Foods />} />
        <Route path='/news-detail/:newsid/:lang' element={<NewsDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
