// Import: Packages
import styled from "styled-components/macro";

// Element: ScaleSwitch
export const ScaleSwitch = styled.div`
  transform: scale(0.65);
  -webkit-tap-highlight-color: transparent;
`;

// Styled: Button
export const Button = styled.span``;

// Styled: Label
export const Label = styled.label`
  align-items: center;
  background: #f57a7e;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: space-between;
  position: relative;
  transition: background-color 0.2s;
  width: 100px;

  & ${Button} {
    background: #fff;
    background: ${({ isGlobalThemeDark, props }) =>
      isGlobalThemeDark
        ? (props) => props.theme.colors.global.highlightSecondary
        : "#f5f4f4"};
    border-radius: 45px;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    content: "";
    height: 45px;
    left: 2px;
    position: absolute;
    top: 2px;
    transition: 0.2s;
    width: 45px;
  }

  &:active ${Button} {
    width: 60px;
  }
`;

// Styled: Checkbox
export const Checkbox = styled.input`
  display: none;
  height: 0;
  visibility: hidden;
  width: 0;

  &:checked + ${Label} ${Button} {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;
