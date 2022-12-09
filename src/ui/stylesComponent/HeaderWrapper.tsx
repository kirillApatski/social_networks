import styled from "styled-components";

export const HeaderWrapper = styled.header(props => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "50px",
    padding: "0 30px",
    borderRadius: "15px",
    border: `1px solid ${props.theme.colors.border}`,
    backgroundColor: `${props.theme.colors.primaryLighter}`
}));