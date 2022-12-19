import styled from "styled-components";

export const LinkStyled = styled.li(props => ({
    backgroundColor: props.theme.primaryLighter,
    width: "100%",
    listStyleType: "none",
    a: {
        display: "inline-block",
        width: "100%",
        padding: "10px 10px",
        borderRadius: "10px",
        fontSize: "20px",
        "&:hover": {
            backgroundColor: props.theme.colors.primaryLightest
        },
        "&:focus": {
            backgroundColor: props.theme.colors.primaryLightest
        },
    },

}));