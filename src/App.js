import logo from './logo.svg';
import './App.css';
import Header from './layouts/Header/Header';
import Layouts from './layouts/Layouts';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import WidgetPage from './pages/Widget/Widget';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route index path={'/'} element = {<Home />}></Route>
            <Route path = {'/widget'} element = {<WidgetPage />}></Route>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
