import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.shadows.default};

  transition: box-shadow 0.2s;

  :hover {
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

export const Option = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0.85rem;
  cursor: pointer;

  transition: background 0.2s;

  font: ${({ theme }) => theme.fonts.P2RegularRoboto};

  img {
    font-size: 0;
  }

  :first-child {
    padding-top: 0.75rem;
  }

  :last-child {
    padding-bottom: 0.75rem;
  }

  :hover {
    background: ${({ theme }) => theme.colors.grayL};
  }
`;