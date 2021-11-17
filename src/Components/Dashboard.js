import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";



const Dashboard = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Misión Tic</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Mi Primer Componente</Nav.Link>
            <Nav.Link href="#pricing">Calculadora</Nav.Link>
            <Link to="/">Salir</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Dashboard;
