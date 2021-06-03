import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
#root {
  width: 100%;
  height: 100%;
}

* {
  margin: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
