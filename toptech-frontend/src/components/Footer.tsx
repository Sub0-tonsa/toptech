import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="text-primary fw-bold">TopTech</h5>
            <p className="text-muted">
              Sua vitrine de hardware de alto desempenho. 
              Do entusiasta ao profissional.
            </p>
          </Col>
          <Col md={4} className="mb-4 text-center">
            <h5>Links Úteis</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-muted">Sobre nós</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Garantia</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Política de Privacidade</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4 text-end">
            <h5>Contato</h5>
            <p className="text-muted mb-0">contato@toptech.com</p>
            <p className="text-muted">Siga-nos nas redes sociais</p>
          </Col>
        </Row>
        <hr className="bg-secondary" />
        <p className="text-center text-muted mb-0">
          © 2026 TopTech Marketplace - Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;