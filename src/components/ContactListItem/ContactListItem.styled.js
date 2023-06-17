import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  border-radius: 7px;
  border: ${props => `2px solid ${props.theme.colors.accent}`};
  margin-bottom: 4px;
  padding-left: 8px;
`;

export const Button = styled.button`
  min-width: 66px;
  background-color: ${props => props.theme.colors.accent};
  font-size: 20px;
  border: none;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${props => props.theme.colors.danger};
  }
`;
