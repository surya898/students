import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import First from './components/First';
import Dash from './pages/Dash';
import Eng from './pages/Eng';
import Maths from './pages/Maths';
import Mal from './pages/Mal';
import Cs from './pages/Cs';
import Question from './pages/Question';
import Header from './components/Header';
import Quizz from './pages/Quizz';
import Exam from './pages/Exam';
import Log from './pages/Log';
import Reg from './pages/Reg';
import Premium from './pages/Premium';
import Premiums from './pages/Premiums';
import Dummypayment from './pages/Dummypayment';

function App() {
  const location = useLocation(); // Get current route

  return (
    <>
      {/* Show Header only if the current route is NOT "/" */}
      {location.pathname !== '/' && <Header />}

      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/log" element={<Log />} />
        <Route path="/reg" element={<Reg />} />


        <Route path="/dash" element={<Dash />} />
        <Route path="/eng" element={<Eng />} />
        <Route path="/math" element={<Maths />} />
        <Route path="/mal" element={<Mal />} />
        <Route path="/cs" element={<Cs />} />
        <Route path="/prev" element={<Question />} />
        <Route path="/quiz" element={<Quizz />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/premiums" element={<Premiums />} />
        <Route path="/payment" element={<Dummypayment />} />



      </Routes>
    </>
  );
}

export default App;
