import styled from "styled-components";

export const Logo = styled.span(props => ({
    color: `${props.theme.colors.text}`,
    fontSize: "30px",
    fontWeight: "bold"
}))