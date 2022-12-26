import styled, {css} from "styled-components";


interface TSInputProps {
    isError?: boolean;
    hasRightIcon?: boolean;
    hasLeftIcon?: boolean;
}

export const InputStyled = styled.input<TSInputProps>`
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 15px;
  background-color: ${({theme}) => theme.colors.input.default};
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  transition-property: background-color;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
  &:focus {
    border: ${({theme}) => `1px solid ${theme.colors.primary}`};
    opacity: 1;
  }

  ${(props) =>
    props.isError &&
    css`
            border: 1px solid ${props.theme.colors.severity.error};

            &:focus {
              border: 1px solid ${props.theme.colors.severity.error};
            }
          `}
  &::placeholder {
    opacity: 0.4;
  }

  ${(props) =>
    props.hasLeftIcon &&
    css`
            padding-left: 40px;
          `}
  ${(props) =>
    props.hasRightIcon &&
    css`
            padding-right: 35px;
          `}
`;