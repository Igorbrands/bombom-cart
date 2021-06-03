import { CartProductType } from '../../pages/Dashboard';
import CartItem from '../CartItem';
import formatValue from '../../utils/formatValue';
import { MdClear } from 'react-icons/md';

import {
  Container,
  CartHeader,
  CartContent,
  TotalContainer,
  ContainerButton,
  FreeDeliver,
  ContainerBottom,
} from './styles';

type CartProps = {
  cartItems: CartProductType[];
  addToCart: (clcikedProduct: CartProductType) => void;
  removeFromCart: (id: number) => void;
  closeCart: () => void;
};

function Cart({ cartItems, addToCart, removeFromCart, closeCart }: CartProps) {
  const calcTotal = (products: CartProductType[]) =>
    products.reduce(
      (acc: number, product) => acc + product.amount * product.price,
      0
    );
  const totalPrice = calcTotal(cartItems);
  console.log(calcTotal(cartItems));

  return (
    <Container>
      <CartHeader>
        <h2>Meu carrinho</h2>
        <MdClear size={24} onClick={closeCart} />
      </CartHeader>
      <CartContent>
        {cartItems.length === 0 ? <span>Carrinho vazio 🙁</span> : null}
        {cartItems.map((product) => (
          <CartItem
            key={product.id}
            item={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </CartContent>
      <ContainerBottom>
        <TotalContainer>
          <div>
            <span>Total</span>
            <span>{formatValue(totalPrice)}</span>
          </div>
          {totalPrice > 1000 && (
            <FreeDeliver>
              <p>Parabéns, sua compra tem frete grátis !</p>
            </FreeDeliver>
          )}
        </TotalContainer>
        <ContainerButton>
          <button>Finalizar compra</button>
        </ContainerButton>
      </ContainerBottom>
    </Container>
  );
}

export default Cart;
