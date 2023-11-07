import styled from 'styled-components';

export const List = styled.div`
display:flex;
flex-direction: column;
background-color: var(--btnText);
padding:15px;
row-gap: 10px;
border-radius: 5px;
`

export const ListItem = styled.li`
display: flex;
  align-items: center;
  column-gap: 15px;

  p {
    min-width: 300px;
  }
`