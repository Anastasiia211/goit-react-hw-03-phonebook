import styled from 'styled-components';

export const FormContainer = styled.div`
   margin-bottom: 20px;
   padding: 15px;
   border-radius: 5px;
background-image: linear-gradient(-225deg, #E3FDF5 50%, #FFE6FA 50%);
box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);

.container{
 display:flex;
 flex-direction: column;
 margin-bottom:15px;
}

label{
margin-bottom:10px;
font-weight:400;
}

input{
     background: #fff;
    padding:10px;
  font-family: 'Abel', sans-serif;
opacity: .95;
}
`