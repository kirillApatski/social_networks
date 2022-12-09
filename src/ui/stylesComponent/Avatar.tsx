import styled from "styled-components";



export const Avatar = styled.img(props => ({
    width: `${props.width}`,
    height: `${props.height}`,
    borderRadius: "50%",

    border: `1px solid ${props.theme.colors.primaryLightest}`,
}))