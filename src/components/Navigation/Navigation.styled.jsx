import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
`;

export const Item = styled.li`
  font-size: 16px;

  :not(:last-child) {
    margin-right: 12px;
  }

  a {
    text-decoration: none;
    color: currentColor;

    :hover {
      color: #f354b1;
    }
  }
`;
