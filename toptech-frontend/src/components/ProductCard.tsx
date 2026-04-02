import { Card, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

const ProductCard = ({ id, name, price, category, image }: ProductProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <Card className="h-100 shadow-sm border-0">
      {/* Container da Imagem com o Badge da Categoria */}
      <div
        className="position-relative"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/produto/${id}`)}
      >
        <Badge
          bg="primary"
          className="position-absolute m-2 top-0 start-0 shadow-sm"
        >
          {category}
        </Badge>
        <Card.Img
          variant="top"
          src={image}
          style={{ height: "200px", objectFit: "cover" }}
          alt={name}
        />
      </div>

      <Card.Body className="d-flex flex-column">
        {/* Título clicável para ver detalhes */}
        <Card.Title
          className="fs-5 mt-2"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/produto/${id}`)}
        >
          {name}
        </Card.Title>

        <Card.Text className="fw-bold text-success fs-4 mt-auto">
          R$ {price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </Card.Text>

        <Button
          variant="primary"
          className="w-100 mt-2 fw-bold"
          onClick={() => addToCart({ id, name, price, image })}
        >
          🛒 Adicionar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
