import './App.css';
import { MainPage } from './pages/mainPage';
import { Route,Routes } from 'react-router-dom';
import { Blank } from './components/blank';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/blank" element={<Blank/>}/>
      </Routes>
    </div>
  );
}

export default App;
