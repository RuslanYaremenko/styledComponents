import { Property as CSS } from 'csstype';
import { HTMLAttributes } from "react";
import { colors } from './utils/colors';
import dimensions from './utils/dimensions';
import fonts from './utils/fonts';

export interface Theme {
    colors: typeof colors;
    dimensions: typeof dimensions;
    fonts: typeof fonts;
}

export type TColorThemeHook = {
    colors?: typeof colors;
};

export type ThemeElement = {
    theme?: Theme;
};

export type TColorAnimate = { 
    bgColor?: ColorType;
    bgMiddleColor?: ColorType;
    count?: number | string;
    isSearch?: boolean;
};
export type ColorType1 = typeof colors;
export type ColorType = keyof ColorType1;
export type IconColorType = 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error';
export interface ColorsProps {
    backgroundColor?: ColorType;
    color?: ColorType;
    brColor?: ColorType;
    phColor?: ColorType;
    hwColor?: ColorType;
    hwBgColor?: ColorType;
    brColorTop?: ColorType;
    brColorLeft?: ColorType;
    brColorBottom?: ColorType;
    opacity?: number;
}
export interface HoverProps extends ColorsProps, FontProps, ClickableProps {
    hoverFontWeight?: CSS.FontWeight;
    hoverTextDecoration?: CSS.TextDecoration<string>;
    hoverTextColor?: ColorType;
    cursor?: string;
}
export interface ClickableProps {
    cursor?: CSS.Cursor;
}
export interface FontProps {
    fontWeight?: CSS.FontWeight;
    fontSize?: string | number;
    lineHeight?: string | number;
    center?: boolean;
    noEllipses?: boolean;
    cursorPointer?: boolean;
    max2Lines?: boolean;
    textAlign?: CSS.TextAlign;
    textDecoration?: string;
    fontStyle?: CSS.FontStyle;
    lowercase?: boolean;
}
export interface SizesProps {
    width?: string | number;
    width1366?: string | number;
    padding?: string | number;
    margin?: string | number;
    top?: string | number;
    left?: string | number;
    height?: string | number;
    maxHeight?: string | number;
    bxSizing?: string;
    minWidth?: string | number;
    maxWidth?: string | number;
    marginBottom?: string | number;
    minHeight?: string | number;
}
export interface BorderProps {
    border?: string;
    borderTop?: string;
    borderBottom?: string;
    borderRadius?: string;
    hasBorder?: boolean;
    hasBlueBorder?: boolean;
    hasBorderTop?: boolean;
    hasBorderBottom?: boolean;
    hasBorderLeft?: boolean;
    hasBorderRight?: boolean;
    noOutLine?: boolean;
    boxShadow?: string;
    hasGreyBorder?: boolean;
}
export interface PositionProps extends SizesProps, ColorsProps {
    position?: CSS.Position;
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
    zIndex?: string | number;
    overflowY?: CSS.OverflowY;
    overflowX?: CSS.OverflowY;
}
export interface StFlexProps extends SizesProps, ColorsProps, PositionProps, BorderProps, FontProps {
    jc?: CSS.JustifyContent;
    sb?: boolean;
    center?: boolean;
    justifyContent?: CSS.JustifyContent;
    alignItems?: CSS.AlignItems;
    alignContent?: CSS.AlignContent;
    ai?: CSS.AlignItems;
    direction?: CSS.Direction;
    flexDirection?: CSS.FlexDirection;
    wrap?: CSS.FlexWrap;
    hasEllipsis?: boolean;
    type?: string;
    hasMarginTop?: string;
    cursor?: string;
    fw?: string;
    noSelect?: boolean;
    flex?: string | number;
    overflowX?: CSS.OverflowY;
}
export interface StGridProps extends SizesProps, ColorsProps, PositionProps, BorderProps, FontProps {
    columns1536?: string;
    columns1366?: string;
    columns?: string;
    gap?: string;
    row?: any;
    align?: CSS.AlignContent;
    linkWithTextDecor?: boolean;
    columns1600?: string;
    columns1650?: string;
    columns1750?: string;
    columns1700?: string;
    columns1800?: string;
    columns1440?: string;
}
export interface StDivProps extends SizesProps, ColorsProps, PositionProps, BorderProps, FontProps {
    userSelect?: string;
    zIndex?: string;
    center?: boolean;
    hasEllipsis?: boolean;
    noSelect?: boolean;
    cursor?: string;
    alignSelf?: string;
    outline?: string;
    flexFull?: boolean;
    display?: string;
}
export interface StPProps extends SizesProps, ColorsProps, PositionProps, FontProps {
    userSelect?: string;
    textAlign?: CSS.TextAlign;
    display?: string;
    name?: string;
    width?: string | number;
    hwFontWeight?: number;
    whiteSpace?: CSS.WhiteSpace;
    max2LinesStyle?: boolean;
}
export interface StLinkProps extends SizesProps, ColorsProps, PositionProps, FontProps, HoverProps {
    userSelect?: string;
    txtDecorNone?: boolean;
    textDecor?: string;
}
export interface StSpanProps extends SizesProps, ColorsProps, PositionProps, FontProps {
    userSelect?: string;
    capitalize?: boolean;
}
export interface StCellProps extends SizesProps {
    withoutTSError?: any;
}

export type TCardContainer = { paddingTop?: string; margin?: string };
export type TContainerStyle = { width?: string; height?: string; noBorder?: boolean };

export type TWidthMarginBt = { width?: string; marginBt?: boolean };
export type TCardText = { link?: boolean } & ColorsProps;

export interface ModalSizesProps {
    width?: string | number;
    height?: string | number;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xs?: boolean;
    ex?: boolean;
    mdl?: boolean;
}

export type HtmlAttributes = HTMLAttributes<HTMLDivElement>;
