import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Importamos o hook de navegação
import { useCart } from "../context/CartContext";

const NavigationBar = () => {
  const navigate = useNavigate(); // Criamos a função navigate
  const { cart } = useCart();

  const totalItens = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="mb-4 sticky-top shadow"
    >
      <Container>
        {/* Usamos onClick para navegar. O estilo do cursor vira 'pointer' com a classe pe-auto */}
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
          className="fw-bold fs-3 text-primary"
        >
          TopTech
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link href="#gpu">Placas de Vídeo</Nav.Link>
            <Nav.Link href="#cpu">Processadores</Nav.Link>
          </Nav>

          <Form className="d-flex me-3">
            <Form.Control
              type="search"
              placeholder="Buscar hardware..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Buscar</Button>
          </Form>

          <Nav className="gap-2 align-items-center">
            {/* Botão do Carrinho chamando a função navigate ao clicar */}
            <Button
              onClick={() => navigate("/carrinho")}
              variant="primary"
              className="position-relative d-flex align-items-center"
            >
              <span className="me-1">🛒</span> Carrinho
              {totalItens > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItens}
                </span>
              )}
            </Button>

            <Button variant="outline-light">Entrar</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
