import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
:root {
  --btnText: white;
  --second-color: green;
  --background-notification: lightgreen;
  --background-section: mintcream;
  --cubic-transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}
/* Reset */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 10px;
  font-weight: 600;
}

#root {
        margin: 20px;
    }

p {
  margin-bottom: 10px;
  margin-top: 0;
}

link {
  text-decoration: none;
}

ul {
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
}


 .btn-submit {
     color: #252537;
    background: #B8F2E6;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    transition: all 0.2s linear;
    letter-spacing: 0.05em;
}


.btn-submit:hover {
    background:linear-gradient(-225deg, #E3FDF5 50%, #FFE6FA 50%);
}


body {
  font-family: 'Vibur', cursive;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 400;
  color: var(--black);
  background-color: var(--background);
  margin: 0;
}

.btn {
  padding: 8px 15px;
  border-radius: 5px;
}
.numberCard{
max-width: 50%;
    margin-left: auto;
    margin-right: auto;
}


`;