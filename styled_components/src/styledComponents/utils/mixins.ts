import { css } from "styled-components";
import { colors } from "./colors";
import dimensions from "./dimensions";
import {
    ClickableProps,
    PositionProps,
    ColorsProps,
    StFlexProps,
    BorderProps,
    SizesProps,
    HoverProps,
    FontProps,
    ModalSizesProps,
    ThemeElement,
    TColorAnimate,
} from '../types';

export const modalWidth = {
    xs: '380px',
    ex: '380px',
    sm: '520px',
    md: '600px',
    mdl: '705px',
    lg: '900px',
};

export const ellipsisStyles = css < SizesProps >`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const truncateStyle = css`
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-box-orient: vertical;
`;
export const max2LinesStyle = css`
   white-space: normal;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
`;
export const flexStyles = css < StFlexProps >`
    display: flex;
    ${props => props.flexDirection && `flex-direction: ${props.flexDirection};`};
    ${props => props.alignItems && `align-items: ${props.alignItems};`};
    ${props => props.ai && `align-items: ${props.ai};`};
    ${props => props.justifyContent && `justify-content: ${props.justifyContent};`};
    ${props => props.jc && `justify-content: ${props.jc};`};
    ${props => props.sb && `justify-content: space-between;`};
    ${props => props.center && `justify-content: center; align-items: center`};
    ${props => props.fw && `flex-wrap: ${props.fw}`};
    ${props => props.flex && `flex: ${props.flex}`};
`;
export const hoverStyles = css < HoverProps >`
&:hover {
 &&&& {
    ${props => props.hoverTextDecoration && `text-decoration-line: ${props.hoverTextDecoration};`};
    ${props => props.hoverFontWeight && `font-weight: ${props.hoverFontWeight};`};
    ${props => props.hoverTextColor && `color: ${colors[props.hoverTextColor]} !important;`};
    ${props => props.cursor && `cursor: ${props.cursor};`};
 }
}
`;
export const clickableStyles = css < ClickableProps >`
 &&&& {
    cursor: ${props => (props.cursor ? props.cursor : 'pointer')}
 }
`;
export const fontStyles = css < FontProps >`
 &&&& {
    ${props => props.fontWeight && `font-weight: ${props.fontWeight}!important;`};
    ${props => props.fontSize && `font-size: ${props.fontSize};`};
    ${props => props.lineHeight && `line-height: ${props.lineHeight};`};
    ${props => props.cursorPointer && `cursor: pointer;`};
    ${props => props.textAlign && `text-align: ${props.textAlign};`};
    ${props => props.textDecoration && `text-decoration: ${props.textDecoration};`};
    ${props => props.lowercase && `text-transform: lowercase;`};
    ${props => props.max2Lines && max2LinesStyle};
    ${props => props.fontStyle && `font-style: ${props.fontStyle};`};
 }
`;
export const colorsStyles = css < ColorsProps & ThemeElement>`
    ${({ theme, backgroundColor }) => backgroundColor && `background-color: ${theme.colors[backgroundColor]};`};
    ${({ theme, color }) => color && `color: ${theme.colors[color]};`};
    ${props => props.opacity && `opacity: ${props.opacity};`};
`;
export const sizeStyles = css < SizesProps >`
    ${props => props.width && `width: ${props.width};`};  
    ${props => props.height && `height: ${props.height};`};
    ${props => props.padding && `padding: ${props.padding};`};
    ${props => props.margin && `margin: ${props.margin};`};
    ${props => props.minWidth && `min-width: ${props.minWidth};`};
    ${props => props.bxSizing && `box-sizing: ${props.bxSizing}`}
    ${props => props.maxWidth && `max-width: ${props.maxWidth};`};
    ${props => props.minHeight && `min-height: ${props.minHeight};`};
    ${props => props.maxHeight && `max-height: ${props.maxHeight};`};
    ${props => props.marginBottom && `margin-bottom: ${props.marginBottom};`};
`;
export const positionStyles = css < PositionProps >`
    ${props => props.overflowY && `overflow-y: ${props.overflowY};`}; 
    ${props => props.overflowX && `overflow-x: ${props.overflowX};`}; 
    ${props => props.position && `position: ${props.position};`}; 
    ${props => props.top && `top: ${props.top};`};
    ${props => props.bottom && `bottom: ${props.bottom};`};
    ${props => props.left && `left: ${props.left};`};
    ${props => props.right && `right: ${props.right};`}; 
    ${props => props.zIndex && `z-index: ${props.zIndex};`}; 
`;
export const borderStyles = css < BorderProps >`
    ${props => props.hasBorder && `border: 1px solid ${props.theme.colors.primary}; border-radius: ${props.theme.dimensions.borderRadius};`};
    ${props => props.hasGreyBorder && `border: 1px solid ${props.theme.colors.border}; border-radius: ${props.theme.dimensions.borderRadius};`};
    ${props => props.hasBorderRight && `border-right: 1px solid ${props.theme.colors.border};`};
    ${props => props.hasBorderLeft && `border-left: 1px solid ${props.theme.colors.border};`};
    ${props => props.hasBorderTop && `border-top: 1px solid ${props.theme.colors.border};`};
    ${props => props.hasBorderBottom && `border-bottom: 1px solid ${props.theme.colors.border};`};
    ${props => props.borderBottom && `border-bottom: ${props.borderBottom};`};
    ${props => props.borderTop && `border-top: ${props.borderTop};`};
    ${props => props.border && `border: ${props.border};`};
    ${props => props.borderRadius && `border-radius: ${props.borderRadius}`};
    ${props => props.boxShadow && `box-shadow: ${props.boxShadow}`};
    ${props => props.noOutLine && `outline: none!important`};
`;
export const noSelect = css`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;
export const dropDownWrapperStyles = css`
    border: 1px solid ${colors.blueDark};
    box-sizing: border-box;
    border-radius: 5px;
    position: initial !important;
    margin: 0 !important;
    justify-content: flex-start !important;
    align-items: center;
    height: 42px;
    i {
        color: ${colors.blueDark};
    }
    & > .Dropdown > .Dropdown__Menu {
        z-index: 11 !important;
        margin: 8px 0 0 0 !important;
    }  
`;

export const dropdownModifiersStyles = (width: number) => css`
    &.ui.active.visible.upward.top.pointing.dropdown {
        .left.menu.transition.visible {
            margin-top: ${width}px !important;
            bottom: unset !important;
            margin-left: -40px;
        }
    }
`;

export const hasBlueBorder = css < BorderProps >`
    border: 1px solid ${colors.primary}; 
    border-radius: ${dimensions.borderRadius};
`;

export const hasGreyBorder = css < BorderProps >`
    border: 1px solid ${colors.grey};
    border-radius: ${dimensions.borderRadius};
`;

export const modalSizeXs = css < ModalSizesProps >`
    ${props => props.xs && `width: ${props.width || modalWidth.xs};`};  
    ${props => props.xs && `height: ${props.height || 'fit-content'};`};
`;

export const modalSizeEx = css < ModalSizesProps >`
    ${props => props.ex && `width: ${props.width || modalWidth.ex};`};  
    ${props => props.ex && `height: ${props.height || 'fit-content'};`};
`;

export const modalSizeSm = css < ModalSizesProps >`
    ${props => props.sm && `width: ${props.width || modalWidth.sm};`};  
    ${props => props.sm && `height: ${props.height || 'fit-content'};`};
`;

export const modalSizeMd = css < ModalSizesProps >`
    ${props => props.md && `width: ${props.width || modalWidth.md};`};  
    ${props => props.md && `height: ${props.height || 'fit-content'};`};
`;

export const modalSizeMdl = css < ModalSizesProps >`
    ${props => props.mdl && `width: ${props.width || modalWidth.mdl};`};  
    ${props => props.mdl && `height: ${props.height || 'fit-content'};`};
`;

export const modalSizeLg = css < ModalSizesProps >`
    ${props => props.lg && `width: ${props.width || modalWidth.lg};`};  
    ${props => props.lg && `height: ${props.height || 'fit-content'};`};
`;

export const rcSlider = css`
.rc-slider {
    position: relative;
    height: 14px;
    padding: 5px 0;
    width: 90%;
    margin-left: 14px;
    @media (max-width: 1500px) {
       margin-left: 8px;
    }
    border-radius: 6px;
    -ms-touch-action: none;
    touch-action: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider-rail {
    position: absolute;
    width: 100%;
    background-color: ${colors.greyLight};
    height: 1px;
    border-radius: 6px;
  }
  .rc-slider-track {
    position: absolute;
    left: 0;
    height: 1px;
    border-radius: 6px;
    background-color: ${colors.primary};
  }
  .rc-slider-handle {
    position: absolute;
    margin-left: 0;
    margin-top: -5px;
    width: 10px;
    height: 10px;
    cursor: pointer;
    cursor: -webkit-grab;
    cursor: grab;
    border-radius: 50%;
    border: solid 2px ${colors.white};
    background-color: ${colors.primary};
    -ms-touch-action: pan-x;
    touch-action: pan-x;
  }
  .rc-slider-handle:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 1px ${colors.primary};
    outline: none;
  }
  .rc-slider-handle-click-focused:focus {
    border-color: ${colors.primary};
    box-shadow: unset;
  }
  .rc-slider-handle:hover {
    border-color: ${colors.primary};
  }
  .rc-slider-handle:active {
    border-color: ${colors.primary};
    box-shadow: 0 0 5px ${colors.primary};
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
  .rc-slider-mark {
    position: absolute;
    top: 12px;
    left: 0;
    width: 100%;
    font-size: 12px;
  }
  .rc-slider-mark-text {
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    color: ${colors.greyMiddle};
    font-size: ${dimensions.fontSize2XS};
    &:last-child {
      content: url("/static/iconsV2/infinity.svg");
      margin-top: 3px;
    }
  }
  .rc-slider-mark-text-active {
    color: ${colors.darkGrey};
  }
  .rc-slider-step {
    position: absolute;
    width: 100%;
    height: 4px;
    background: transparent;
  }
  .rc-slider-dot {
    position: absolute;
    bottom: 0;
    margin-left: -4px;
    width: 7px;
    height: 7px;
    border: 3px solid ${colors.greyLight};
    background-color: ${colors.greyLight};
    cursor: pointer;
    border-radius: 50%;
    vertical-align: middle;
  }
  .rc-slider-dot-active {
    border-color: ${colors.primary};
    background-color: transparent!important;
  }
  .rc-slider-disabled {
    background-color: ${colors.primary};
    .rc-slider-mark-text {
      color: ${colors.grey};
      &:last-child {
        content: url("/static/icons/Infitiny-grey.svg");
        margin-top: 10px;
      }
    }
  }
  .rc-slider-disabled .rc-slider-track {
    background-color: ${colors.primary};
  }
  .rc-slider-disabled .rc-slider-handle,
  .rc-slider-disabled .rc-slider-dot {
    border-color: ${colors.primary};
    box-shadow: none;
    background-color: ${colors.primary};
    cursor: not-allowed;
  }
  .rc-slider-disabled .rc-slider-mark-text,
  .rc-slider-disabled .rc-slider-dot {
    cursor: not-allowed !important;
  }
  .rc-slider-vertical {
    width: 14px;
    height: 100%;
    padding: 0 5px;
  }
  .rc-slider-vertical .rc-slider-rail {
    height: 1px;
    width: 4px;
  }
  .rc-slider-vertical .rc-slider-track {
    left: 5px;
    bottom: 0;
    width: 4px;
  }
  .rc-slider-vertical .rc-slider-handle {
    margin-left: -5px;
    margin-bottom: -7px;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
  }
  .rc-slider-vertical .rc-slider-mark {
    top: 0;
    left: 18px;
    height: 100%;
  }
  .rc-slider-vertical .rc-slider-step {
    height: 100%;
    width: 4px;
  }
  .rc-slider-vertical .rc-slider-dot {
    left: 2px;
    margin-bottom: -4px;
  }
  .rc-slider-vertical .rc-slider-dot:first-child {
    margin-bottom: -4px;
  }
  .rc-slider-vertical .rc-slider-dot:last-child {
    margin-bottom: -4px;
  }
  .rc-slider-tooltip-zoom-down-enter,
  .rc-slider-tooltip-zoom-down-appear {
    animation-duration: .3s;
    animation-fill-mode: both;
    display: block !important;
    animation-play-state: paused;
  }
  .rc-slider-tooltip-zoom-down-leave {
    animation-duration: .3s;
    animation-fill-mode: both;
    display: block !important;
    animation-play-state: paused;
  }
  .rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,
  .rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {
    animation-name: rcSliderTooltipZoomDownIn;
    animation-play-state: running;
  }
  .rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {
    animation-name: rcSliderTooltipZoomDownOut;
    animation-play-state: running;
  }
  .rc-slider-tooltip-zoom-down-enter,
  .rc-slider-tooltip-zoom-down-appear {
    transform: scale(0, 0);
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .rc-slider-tooltip-zoom-down-leave {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  @keyframes rcSliderTooltipZoomDownIn {
    0% {
      opacity: 0;
      transform-origin: 50% 100%;
      transform: scale(0, 0);
    }
    100% {
      transform-origin: 50% 100%;
      transform: scale(1, 1);
    }
  }
  @keyframes rcSliderTooltipZoomDownOut {
    0% {
      transform-origin: 50% 100%;
      transform: scale(1, 1);
    }
    100% {
      opacity: 0;
      transform-origin: 50% 100%;
      transform: scale(0, 0);
    }
  }
  .rc-slider-tooltip {
    position: absolute;
    left: -9999px;
    top: -9999px;
    visibility: visible;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider-tooltip * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider-tooltip-hidden {
    display: none;
  }
  .rc-slider-tooltip-placement-top {
    padding: 4px 0 8px 0;
  }
  .rc-slider-tooltip-inner {
    padding: 6px 2px;
    min-width: 24px;
    height: 24px;
    font-size: 12px;
    line-height: 1;
    color: ${colors.primary};
    text-align: center;
    text-decoration: none;
    background-color: ${colors.grey};
    border-radius: 6px;
    box-shadow: 0 0 4px ${colors.greyLighter};
  }
  .rc-slider-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
  .rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
    bottom: 4px;
    left: 50%;
    margin-left: -4px;
    border-width: 4px 4px 0;
    border-top-color: ${colors.grey};
  }
`;
export const waveStyles = css <TColorAnimate & ThemeElement>`
    ${({ theme, bgColor, bgMiddleColor }) => (
        bgColor && `background: linear-gradient(-90deg,
        ${theme.colors[bgColor]} 0%,
        ${theme.colors[`${bgMiddleColor}`]} 50%,
         ${theme.colors[bgColor]} 100%
         )`)};
    background-size: 400% 400%;
    animation: wave 1s ease-in-out;
    ${({ count }) => `animation-iteration-count: ${count || 'infinite'}`};
    @keyframes wave {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
`;
export const animateOpacityIn = css`
    @keyframes opacity-in {
        from {
          opacity: 0;
          transition: all 0.2s ease-in-out;
          visibility: hidden!important;
        }
        to {
          opacity: 1;
          visibility: visible!important;
        } 
    }
`;
export const animateOpacityOut = css`
    @keyframes opacity-out {
        from {
          opacity: 1;
          transition: all 0.2s ease-in-out;
          visibility: visible!important;
        }
        to {
          opacity: 0;
          visibility: hidden!important;
        } 
    }
`;

export const animateScaleOut = css<{isChangedLeft?: boolean; modalTop?: string}>`
   @keyframes fadeOut {
        0% {opacity:1;}
        100% {opacity:0;}
    }
    @-moz-keyframes fadeOut {
        0% {opacity:1;}
        100% {opacity:0;}
    }
    @-webkit-keyframes fadeOut {
        0% {opacity:1;}
        100% {opacity:0;}
    }
    @-o-keyframes fadeOut {
        0% {opacity:1;}
        100% {opacity:0;}
    }
`;
export const animateScaleIn = css<{isChangedLeft?: boolean; modalTop?: string}>`
    @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
    @-moz-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
    @-webkit-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
    @-o-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
`;
