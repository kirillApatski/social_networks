import styled from "styled-components";

export const AppWrapper = styled.div(props => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    backgroundColor: `${props.theme.colors.primary}`
}));