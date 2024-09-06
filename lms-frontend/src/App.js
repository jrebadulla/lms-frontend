
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Components/Login/LoginPage';

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
