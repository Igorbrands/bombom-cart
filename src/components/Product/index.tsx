import { Container, Button, Description } from './styles';
import { CartProductType } from '../../pages/Dashboard';
import formatValue from '../../utils/formatValue';

type ProductProps = {
  product: CartProductType;
  handleAddToCart: (clickedProduct: CartProductType) => void;
};

function Product({ product, handleAddToCart }: ProductProps) {
  const price = formatValue(product.price);

  return (
    <Container>
      <div>
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <Description>
        <span>{product.name}</span>
        <span>{price} </span>
        <Button onClick={() => handleAddToCart(product)}>
          Adicionar ao Carrinho
        </Button>
      </Description>
    </Container>
  );
}

export default Product;
