import styled from "styled-components";
import {Property} from "csstype";

interface TSTextProps {
    width?: Property.Width
    fontSize?: Property.FontSize
}

export const TextStyled = styled.span<TSTextProps>(props => ({
        width: props.width ? props.width : "200px",
        fontSize: props.fontSize ? props.fontSize : ''
    })
);
