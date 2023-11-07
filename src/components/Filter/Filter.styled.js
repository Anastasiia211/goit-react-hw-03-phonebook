import styled from 'styled-components';

export const FilterContainer = styled.div`
background-image: linear-gradient(-225deg, #E3FDF5 50%, #FFE6FA 50%);
  padding: 30px;
  box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
  border-radius: 5px;
  margin-bottom: 30px;

  .container {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  label {
    margin-bottom: 5px;
    color: var(--colorPrimary);
    font-weight: 600;
  }

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--black);
  }
`;