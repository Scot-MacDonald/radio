import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  // :root {
  //   --color-nemo: #ff4a11;
  //   --color-granite: #252629;
  //   --color-water-10: #f3f5f9;
  //   --color-foam: #ffffff;

  //   --gap: 20px;
  // }
    
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
a{padding-bottom:100px;}
  body {
   background:black;
   color:white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  ul {
    list-style-type: none;
  }
  
  footer {
    bottom: 0;
    position: fixed;
    width: 100%;
  }
  
`;
