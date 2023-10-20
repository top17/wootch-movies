import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
  font-family: Roboto, sans-serif;
  font-weight: 400;
  box-sizing: border-box;
}

body{
  /* background-color: #ffe3e3; */
  background: linear-gradient(135deg, #ffe3e3, #ffa8a8, #ffc9c9);
  /* background-color:#ecd9c6; */
  /* background-color: #ffffe6; */
  margin: 0 auto;
  /* min-width: 100vh; */
  /* height: 100vh; */
  max-width: 80%;

}


`
