import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* flex-direction: column; */
`;

export const StyledButton = styled(IconButton)``;
export const CartWrapper = styled.div`
  position: fixed;
  z-index: 100;
  right: 1.25rem;
  top: 1.25rem;
`;
