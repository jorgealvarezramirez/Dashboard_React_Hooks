import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
