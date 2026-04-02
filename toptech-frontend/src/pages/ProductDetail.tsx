import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // Pega o ID do produto da URL

  return (
    <Container className="my-5">
      <Link to="/" className="btn btn-outline-secondary mb-4">← Voltar para a Loja</Link>
      <Row className="align-items-center">
        <Col md={6}>
          <img 
            src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800" 
            alt="Produto" 
            className="img-fluid rounded shadow" 
          />
        </Col>
        <Col md={6}>
          <Badge bg="primary mb-2">GPU</Badge>
          <h1 className="fw-bold">Placa de Vídeo RTX 4070 (ID: {id})</h1>
          <p className="text-muted fs-5">
            A arquitetura NVIDIA® Ada Lovelace traz um salto quântico em desempenho e gráficos alimentados por IA. 
            Experimente mundos virtuais realistas com ray tracing e jogos com taxas de quadros ultra-altas.
          </p>
          <h2 className="text-success my-4">R$ 4.200,00</h2>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">Adicionar ao Carrinho</Button>
            <Button variant="outline-dark">Comprar Agora</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;