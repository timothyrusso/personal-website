import styled from 'styled-components';
import sunLogo from '../../assets/sun.svg';
import moonLogo from '../../assets/moon.png';

export type DarkModeButtonProps = {
  darkMode: boolean;
};

export const DarkModeButton = styled.button<DarkModeButtonProps>`
  min-width: 24px;
  background-image: ${({ darkMode }) =>
    darkMode ? `url(${sunLogo})` : `url(${moonLogo})`};
  min-height: 24px;
  padding: 0;
  align-self: center;
  border: none;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  background-color: transparent;
  margin-top: 25px;
  transition: all linear 0.1s;
`;
