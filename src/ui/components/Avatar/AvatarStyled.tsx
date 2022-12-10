import styled from "styled-components";

type SizesType = "smallest" | "small" | "large" | "middle";
type SAvatarPropsType = {
    size?: SizesType;
    img?: string;
    isEditable?: boolean;
};

const imgSizes = (size: SizesType) => {
    const sizePx = size === "small" ? 35 : size === "large" ? 200 : size === "smallest" ? 30 : 60;
    return {
        minWidth: sizePx,
        maxWidth: sizePx,
        maxHeight: sizePx,
        minHeight: sizePx,
    };
};

export const AvatarStyled = styled.img<SAvatarPropsType>((props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backgroundImage: `url(${props.img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    border: `1px solid ${props.theme.colors.secondary}`,
    backgroundRepeat: "no-repeat",
    img: {
        objectFit: "cover",
        objectPosition: "center",
        minWidth: "100%",
        minHeight: "100%",
    },
    ...imgSizes(props.size || "middle"),
}));

export const SAvatarShadow = styled.div((props) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    opacity: 0,
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
        opacity: 1,
    },
}));
