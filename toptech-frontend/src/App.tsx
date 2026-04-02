import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { Container, Row, Col } from "react-bootstrap";

// Componente para a Página Inicial
const Home = () => {
  const MOCK_PRODUCTS = [
    {
      id: 1,
      name: "Placa de Vídeo RTX 4070",
      price: 4200.0,
      category: "GPU",
      image:
        "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800",
    },
    {
      id: 2,
      name: "Processador Ryzen 7 7800X3D",
      price: 2800.0,
      category: "CPU",
      image:
        "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=800",
    },
  ];

  return (
    <Container>
      <header className="my-5 text-center">
        <h1 className="fw-bold">Ofertas de Hardware</h1>
      </header>
      <Row xs={1} md={2} lg={4} className="g-4 mb-5">
        {MOCK_PRODUCTS.map((product) => (
          <Col key={product.id}>
            <ProductCard {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

function App() {
  return (
    <Router>
      <div
        className="bg-light d-flex flex-column"
        style={{ minHeight: "100vh" }}
      >
        <NavigationBar />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
            <Route path="/carrinho" element={<Cart />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
