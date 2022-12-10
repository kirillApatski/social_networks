import styled from "styled-components";
import {Property} from 'csstype'

type WrapperPropsType = {
    flexDirection?: Property.FlexDirection,
    alignItems?: Property.AlignItems,
    justifyContent?: Property.JustifyContent,
    gap?: string | number,
    margin?: Property.Margin,
    padding?: Property.Padding,
    backgroundColor?: Property.BackgroundColor,
    maxWidth?: Property.MaxWidth,
    width?: string | number,
    color?: Property.Color,
    borderRadius?: Property.BorderRadius,
    border?: Property.Border
    height?: Property.Height,
    opacity?: Property.Opacity,
    overflow?: Property.OverflowY | Property.OverflowX,
    flexWrap?: Property.FlexWrap,
    flexGrow?: Property.FlexGrow,
}


export const Wrapper = styled.div<WrapperPropsType>((props)=> ({
    display: "flex",
    flexDirection: props.flexDirection,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    columnGap: props.gap || 30,
    rowGap: props.gap || 10,
    margin: props.margin,
    padding: props.padding,
    backgroundColor: props.backgroundColor,
    borderRadius: props.borderRadius,
    border: props.border,
    maxWidth: props.maxWidth,
    color: props.color,
    width: props.width,
    height: props.height,
    opacity: props.opacity,
    overflow: props.overflow,
    flexWrap: props.flexWrap,
    flexGrow: props.flexGrow,
}))

export const UiWrapper = styled(Wrapper)(props => ({
    backgroundColor: props.theme.colors.primaryLighter,
    padding:"20px",
    borderRadius:"20px",
    border: `1px solid ${props.theme.colors.border}`
}))
