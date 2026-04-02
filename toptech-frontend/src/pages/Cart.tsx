import { Container, Table, Button, Card } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Container className="my-5">
      <h2 className="fw-bold mb-4">Seu Carrinho</h2>

      {/* Removido o 'align' e adicionado 'align-middle' no className */}
      <Table responsive hover className="align-middle">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th className="text-center">Total</th>
            <th className="text-end">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=50"
                  alt="Produto"
                  className="me-3 rounded"
                />
                <span>Placa de Vídeo RTX 4070</span>
              </div>
            </td>
            <td>R$ 4.200,00</td>
            <td>1</td>
            <td className="text-center">R$ 4.200,00</td>
            <td className="text-end">
              <Button variant="outline-danger" size="sm">
                Remover
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <Card className="mt-4 shadow-sm border-0 bg-light">
        <Card.Body className="text-end">
          <h4 className="mb-3">
            Total da Compra:{" "}
            <span className="text-success fw-bold">R$ 4.200,00</span>
          </h4>
          <div className="d-flex justify-content-end gap-2">
            <Link to="/" className="btn btn-outline-secondary">
              Continuar Comprando
            </Link>
            <Button variant="success" size="lg">
              Finalizar Pedido
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );

  const { cart, removeFromCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <Container className="my-5 text-center">
        <h2>Seu carrinho está vazio 😢</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Voltar para a Loja
        </Link>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="fw-bold mb-4">Seu Carrinho</h2>
      <Table responsive hover className="align-middle">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Qtd</th>
            <th>Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>R$ {item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>R$ {(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remover
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-end mt-4">
        <h4>
          Total:{" "}
          <span className="text-success">R$ {totalPrice.toFixed(2)}</span>
        </h4>
        <Button variant="success" size="lg">
          Finalizar Compra
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
