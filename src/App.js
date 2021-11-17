import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import Calculadora from "./components/Calculadora";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Home</h1>
              <nav>
                <Link to="/dashboard">Dashboard</Link>
              </nav>
            </div>
          }
        ></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="calculadora" element={<Calculadora />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
