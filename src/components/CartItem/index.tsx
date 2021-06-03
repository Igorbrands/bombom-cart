import { CartProductType } from '../../pages/Dashboard';
import formatValue from '../../utils/formatValue';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

import { Container, Description } from './styles';

type CartItemProps = {
  item: CartProductType;
  addToCart: (clickedProduct: CartProductType) => void;
  removeFromCart: (id: number) => void;
};

function CartItem({ item, addToCart, removeFromCart }: CartItemProps) {
  const price = formatValue(item.price);
  const total = formatValue(item.amount * item.price);

  return (
    <Container>
      <div>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Description>
        <span>{item.name}</span>
        <p>Price: {price}</p>
        <span>Total: {total}</span>
        <div>
          <MdRemoveCircleOutline
            size={24}
            onClick={() => removeFromCart(item.id)}
          />
          {item.amount}
          <MdAddCircleOutline size={24} onClick={() => addToCart(item)} />
        </div>
      </Description>
    </Container>
  );
}

export default CartItem;
