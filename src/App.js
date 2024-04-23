import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Component/Home/SignIn';
import SignUp from './Component/Home/SignUp';
import ForgotPassword from './Component/Home/ForgotPassword';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
         <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
