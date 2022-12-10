import styled from "styled-components";
import {Property} from "csstype";

export type STextareaType = {
    height?: Property.Height;
};
export const TextareaStyled = styled.textarea<STextareaType>(props => ({
    height: `${props.height || "150px"}`,
    borderRadius: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: "10px 15px",
    width: "100%",
    border: `1px solid ${props.theme.colors.primaryLightest}`,
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    "&:focus": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        border: `1px solid rgba(255, 255, 255, 0.1)`,
    }
}))
