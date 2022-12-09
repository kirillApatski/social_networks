import styled from "styled-components";

export const SSidebar = styled.ul(props => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    transition: "0.2s",
    padding: "13px",
    columnGap: 15,
    rowGap: 20,
    listStyleType: "none"
}))