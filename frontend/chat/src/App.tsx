import Chatsmember from "./componement/member";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/main.css";
import Login from "./componement/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chatsmember />}></Route>
          <Route path="/signIn" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
