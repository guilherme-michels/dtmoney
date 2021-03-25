import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5428cc;
    --green: #33cc95;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
}

*{
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media(max-width: 1080px){
        font-size: 93.75%;
    }

    @media(max-width: 720px){
        font-size: 87.5%;
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialised;
}
 
body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 480;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor:pointer;
}

.submit-button {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: #33cc95;
      color: #fff;
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.5rem;
      font-weight: 600;

      transition: 0.2s;
    } 

.submit-button:hover {
    filter: brightness(0.9)
}      

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay{
background: rgba(0,0,0, 0.5);

position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;

display: flex;
align-items: center;
justify-content: center;
}

.react-modal-content {
width: 100%;
max-width: 576px;
background: #f0f2f5;
padding: 3rem;
position: relative;     
border-radius: 0.25rem;
}

.react-modal-close {
    border: 0;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    background: transparent;

    transition: 0.2s;
}

.react-modal-close:hover {
    filter: brightness(0.8  )
}


`;
