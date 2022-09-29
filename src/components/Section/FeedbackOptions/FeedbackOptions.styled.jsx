import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  gap: 10px;
  margin-left: 20px;
`;
const Item = styled.li``;

const Button = styled.button`
  padding: 8px;

  border: 1px solid black;
  border-radius: 10px;

  outline: none;

  background-color: transparent;

  font-size: 18px;
  font-weight: 900;

  cursor: pointer;

  transition: transform 250ms linear, background-color 250ms linear,
    color 250ms linear;

  &:hover {
    background-color: black;
    color: white;
    transform: scale(1.1);
  }
`;

export { List, Item, Button };
