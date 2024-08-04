import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';
import { Quiz } from './components/Quiz/Quiz';
import { Exercises } from './components/Exercises/Exercises';
import { Botchat } from './components/Botchat/Botchat';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='Components'>
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='quiz' element={<Quiz />} />
            <Route path='home' element={<Home />} />
            <Route path='exercises' element={<Exercises />} />
            <Route path='botchat' element={<Botchat />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
