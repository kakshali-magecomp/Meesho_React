import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import Headr from "./components/Headr";
import Login from "./components/Login";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [response, setResponse] = useState(null);

  return (
    <BrowserRouter>
      <Headr />  
    
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login setResponse={setResponse} />} />
        <Route path="/home" element={<Home response={response} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;