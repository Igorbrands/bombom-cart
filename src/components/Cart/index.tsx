import { CartProductType } from '../../pages/Dashboard';
import CartItem from '../CartItem';
import formatValue from '../../utils/formatValue';

import {
  Container,
  TotalContainer,
  ContainerButton,
  FreeDeliver,
} from './styles';

type CartProps = {
  cartItems: CartProductType[];
  addToCart: (clcikedProduct: CartProductType) => void;
  removeFromCart: (id: number) => void;
};

function Cart({ cartItems, addToCart, removeFromCart }: CartProps) {
  const calcTotal = (products: CartProductType[]) =>
    products.reduce(
      (acc: number, product) => acc + product.amount * product.price,
      0
    );

  return (
    <Container>
      <h2>Meu carrinho</h2>
      {cartItems.length === 0 ? <p>Carrinho vazio 🙁</p> : null}
      {cartItems.map((product) => (
        <CartItem
          key={product.id}
          item={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <TotalContainer>
        <div>
          <span>Total</span>
          <span>{formatValue(calcTotal(cartItems))}</span>
        </div>
        <FreeDeliver>Parabéns, sua compra tem frete grátis !</FreeDeliver>
      </TotalContainer>
      <ContainerButton>
        <button>Finalizar compra</button>
      </ContainerButton>
    </Container>
  );
}

export default Cart;
