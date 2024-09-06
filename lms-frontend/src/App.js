import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import LibrarianDashboard from "./Components/LibraianDashboard/LibrarianDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/librarian-dashboard" element={<LibrarianDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
