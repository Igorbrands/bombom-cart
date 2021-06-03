import { useState } from 'react';
import { useQuery } from 'react-query';
import Product from '../../components/Product';
import Cart from '../../components/Cart';
import { Drawer } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { MdShoppingCart } from 'react-icons/md';

import { Container, Content, StyledButton, CartWrapper } from './styles';

export type CartProductType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  amount: number;
};

const getProducts = async (): Promise<CartProductType[]> =>
  await (await fetch('http://localhost:3000/products')).json();

const Dashboard = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([] as CartProductType[]);

  const { data, isLoading, error } = useQuery<CartProductType[]>(
    'products',
    getProducts
  );

  const getTotalProducts = (products: CartProductType[]) => {
    const total = products.reduce((acc, product) => acc + product.amount, 0);
    return total;
  };

  const handleAddToCart = (clickedProduct: CartProductType) => {
    setCartProducts((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedProduct.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedProduct.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedProduct, amount: 1 }];
    });
  };

  const hahdleRemoveFromCart = (id: number) => {
    setCartProducts((prev) =>
      prev.reduce((acc, product) => {
        if (product.id === id) {
          if (product.amount === 1) return acc;
          return [...acc, { ...product, amount: product.amount - 1 }];
        } else {
          return [...acc, product];
        }
      }, [] as CartProductType[])
    );
  };

  if (isLoading) {
    return <h2>Carregando...</h2>;
  }
  if (error) {
    return <h2>ALgo deu errado...</h2>;
  }

  return (
    <Container>
      <h1>Choco Shop</h1>
      <Content>
        {data?.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
        <Drawer
          anchor="right"
          open={cartIsOpen}
          onClose={() => setCartIsOpen(false)}
        >
          <Cart
            cartItems={cartProducts}
            addToCart={handleAddToCart}
            removeFromCart={hahdleRemoveFromCart}
            closeCart={() => setCartIsOpen(false)}
          />
        </Drawer>
        <CartWrapper>
          <StyledButton onClick={() => setCartIsOpen(true)}>
            <Badge badgeContent={getTotalProducts(cartProducts)} color="error">
              <MdShoppingCart />
            </Badge>
          </StyledButton>
        </CartWrapper>
      </Content>
    </Container>
  );
};

export default Dashboard;
