import styled from 'styled-components';
import sunLogo from '../../assets/sun.png';
import moonLogo from '../../assets/moon.png';

export type DarkModeButtonProps = {
  darkMode: boolean;
};

export const DarkModeButton = styled.button<DarkModeButtonProps>`
  min-width: 26px;
  background-image: ${({ darkMode }) =>
    darkMode ? `url(${sunLogo})` : `url(${moonLogo})`};
  min-height: 26px;
  align-self: center;
  border: none;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    opacity: 0.5;
  }
`;
