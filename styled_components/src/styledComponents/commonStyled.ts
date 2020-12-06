import styled from "styled-components";
import { ColorsProps, ColorType, ThemeElement, SizesProps } from "./types";
import { noSelect, sizeStyles, ellipsisStyles } from "./utils/mixins";
import dimensions from "./utils/dimensions";
import { StFlex } from "./Blocks";
import { colors } from "./utils/colors";
import { TCardText, TWidthMarginBt } from "./types";

export const Title = styled.p<ColorsProps & ThemeElement>`
    &&&& {
        ${noSelect};
    };
    font-size: ${dimensions.fontSize2XLS};
    margin: 0;
    ${({ theme, color }) => color && `color: ${theme.colors[color]}`};
`;

export const CardTextContainer = styled.div<TWidthMarginBt>`
    &&&& {
        ${noSelect};
    };
    ${({ width }) => width && `width: ${width}`};
    text-align: center;
    ${({ marginBt }) => `margin-bottom: ${marginBt ? "60px" : '20px'}`};
`;

export const CardText = styled.span<TCardText & ThemeElement>`
     font-size: ${dimensions.fontSize};
     ${({ theme, color }) => color && `color: ${theme.colors[color]}`};
     ${({ link }) => link && 'text-decoration: underline; cursor: pointer;'};  
`;

type TInputFieldProps = {
    width?: string;
    hasLookAlikeMedia?: boolean;
    hasTechMedia?: boolean;
    maxHeight?: string;
    phColor?: ColorType;
    brBottom?: boolean;
    isOpen?: boolean;
    isLookAlike?: boolean;
    padding?: string;
    inputBorderColor?: string;
};

export const StDropdownWrapper = styled.div<TInputFieldProps & ThemeElement & ColorsProps>`
    display: flex;
    align-items: center;
    min-height: 17px;
    max-height: 93px;
    ${({ width }) => width && `width: ${width}`};
    flex-wrap: wrap;
    ${({ theme, backgroundColor }) => backgroundColor && `background-color: ${theme.colors[backgroundColor]}`};
    border-radius: 3px;
    position: static;
    .loader {
        height: 32px;
        padding: 0 4px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 2px;
    }
    &:focus {
        outline: none;
    } 
`;

type TIsLookAlike = { isLookAlike?: boolean };

export const StDropdownWrapperSelect = styled.div<TInputFieldProps & ThemeElement & ColorsProps & TIsLookAlike>`
    display: flex;
    width: fit-content;
    align-items: center;
    min-height: 40px;
    max-height: 105px;
    outline: none;
    overflow: hidden auto;
    ${({ isLookAlike }) => `padding: ${isLookAlike ? '5px 15px 0px' : '5px 15px 0px'}`};
    ${({ width }) => width && `width: ${width}`};
    flex-wrap: wrap;
    ${({ theme, backgroundColor }) => backgroundColor && `background-color: ${theme.colors[backgroundColor]}`};
    border-radius: 3px;
    cursor: text;
    max-width:100%;
    ${({ theme, brColor }) => brColor && `border: 1px solid ${theme.colors[brColor]}`};
    ${({ isOpen }) => (isOpen && 'border-bottom-right-radius: 0; border-bottom-left-radius: 0; border-bottom: 1px solid transparent;')};
`;

export const StInputField = styled.input<ColorsProps & ThemeElement & TInputFieldProps>`
    &&&& {
        ${sizeStyles};
    };
    height: 27px;
    background: none;
    border: none;
    outline: none;
    box-sizing: border-box;
    padding-bottom: 6px;
    ${({ theme, color }) => color && `color: ${theme.colors[color]}`};
    font-size: ${dimensions.fontSizeSM};
    &::placeholder {
        ${({ theme, phColor }) => phColor && `color: ${theme.colors[phColor]}`};
    }
`;

export const StDropDownMenu = styled.div<TInputFieldProps & ColorsProps & { padding?: string }>`
    ${({ width }) => width && `width: ${width}`};
    ${({ theme, brColor }) => brColor && `border: 1px solid ${theme.colors[brColor]}`};
    ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}`};
    border-top: none;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    position: relative;
    overflow: auto;
    ${({ padding }) => `padding: ${padding || '0 15px'}`};
    z-index: 2;
    margin-top: -1px;
    ${({ theme, backgroundColor }) => backgroundColor && `background-color: ${theme.colors[backgroundColor]}`};
    ${({ hasLookAlikeMedia }) => hasLookAlikeMedia && `
    @media (max-height: 820px) {
        max-height: 200px;
     }
      @media (max-height: 675px) {
        max-height: 150px;
     }
    `};
`;

export const StOptionsContainer = styled.div<ColorsProps>`
    ${({ theme, backgroundColor }) => backgroundColor && `background-color: ${theme.colors[backgroundColor]}`};
    position: relative;
    overflow: auto;
    ::-webkit-scrollbar-thumb {
        height: 3px;
    }  
`;

export const StDropDownMenuOptions = styled.div<TInputFieldProps & ColorsProps>`
    ${({ width }) => width && `width: ${width}`};
    ${({ theme, brColor, isLookAlike }) => (isLookAlike ? `border-top: none;` : `border-top: 1px solid ${theme.colors[`${brColor}`]}`)};
    ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}`};
    position: relative;
    ${({ padding }) => `padding: ${padding || '5px 0'}`};
    z-index: 2;
    min-height: 35px;
    ${({ theme, backgroundColor }) => backgroundColor && `background-color: ${theme.colors[backgroundColor]}`};
    & > div {
        will-change: initial!important;
    }
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 17px;
        height: 1px;
        ${({ theme, inputBorderColor }) => inputBorderColor && `background-color: ${theme.colors[inputBorderColor]}`};
        width: 93%;
        ${({ isLookAlike }) => isLookAlike && `display: ${isLookAlike ? 'block' : 'none'}`};
    }
`;

export const StSearch = styled.div<ColorsProps>`   
    top: 45%;
    right: 5px;
    ${({ backgroundColor }) => backgroundColor && `background-color: ${colors[backgroundColor]}`};
    background-position: center;
    background-repeat: no-repeat;   
    position: absolute;
    transition: all 0.2s linear;  
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    & > svg {
        width: 10px;
        height: 10px;
    }
`;

type TPositionClear = {
    right?: string;
    top?: string;
};

export const StClear = styled.div<ColorsProps & TPositionClear>`
    ${({ top }) => `top: ${top || '45%'}`};
    ${({ right }) => `right: ${right || '5px'}`};
    ${({ backgroundColor }) => backgroundColor && `background-color: ${colors[backgroundColor]}`};  
    background-position: center;   
    background-size: 10px 10px;   
    background-repeat: no-repeat;   
    position: absolute;
    cursor: pointer;
    transition: all 0.2s linear;  
    transform: translate(-50%, -50%);
    width: 15px;
    height: 15px;
     & > svg {
        width: 10px;
        height: 10px;
    }
`;
export const StDimmer = styled.div`
    background-color: ${colors.backgroundWithOpacity};
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .loader {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, 0%);
    }
`;

export const StDisabledIcon = styled.div<{ paddingLeft?: string; disabled?: boolean }>`
      width: 15px;
      height: 15px;
      margin-right: 3px;
      ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft}`};
      .innerImages {
        fill-opacity: 1!important;
      }
      .is-profile-fill { 
        ${({ theme }) => `fill: ${theme.colors.greyDisabled}`};
        path {
            ${({ theme }) => `fill: ${theme.colors.greyDisabled}`};
        }
      };
`;

export const DraggableInput = styled.input`
    display: none;
`;

export type THasBorder = {
    isFocus?: boolean;
    hasActive?: boolean;
    widthInput?: string;
    hasBorderColor?: boolean;
    isOpenPrediction?: boolean;
    isInputRender?: boolean;
};

export const StInputItem = styled.input<THasBorder & ColorsProps>`
    ${({ widthInput }) => widthInput && `width: ${widthInput}`};
    max-width: 100%;
    box-sizing: content-box;
    border: none;
    margin: 0 3px;
    font-size: ${dimensions.fontSizeSM};
    outline: 0;
    padding: 5px !important;
    ${({ isInputRender }) => `display: ${isInputRender ? 'inline-block' : 'none'}`};
    ${({ theme, color }) => color && `color: ${theme.colors[color]}`};
    &::placeholder {
        font-size: ${dimensions.fontSizeSM};
        ${({ theme, phColor }) => phColor && `color: ${theme.colors[phColor]}`};
        ${ellipsisStyles};
    }
    }
`;

export const StTextAreaContainer = styled(StFlex)<ThemeElement & ColorsProps & THasBorder & SizesProps & {borderColorHw?: string}>`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 100%;
    padding-left: 5px;
    overflow: hidden auto;
    ${({ theme, backgroundColor }) => backgroundColor && `background-color: ${theme.colors[backgroundColor]}`};
    ${({ theme, hasBorderColor, brColor }) => brColor && `border: 1px solid ${hasBorderColor ? theme.colors[brColor] : 'transparent'}`};
    ${({ theme, isFocus, hasBorderColor, hasActive }) => !hasBorderColor && (isFocus || hasActive) && `border: ${isFocus || hasActive ? 1 : 0}px ${hasActive ? 'dashed' : 'solid'} ${theme.colors.primary}`};
    ${({ isOpenPrediction }) => `border-radius: ${isOpenPrediction ? '3px 3px 0 0' : '3px'}`};
    display: -webkit-box;
    align-items: flex-start;
    ${({ alignItems }) => `align-items: ${alignItems || 'center'}`};
    ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
    ${({ minHeight }) => minHeight && `min-height: ${minHeight}`};
    ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}`};
    position: relative;
    &:hover {
        ${({ theme, borderColorHw }) => borderColorHw && `border: 1px solid${theme.colors[borderColorHw]}!important`};
    }
    &::-webkit-scrollbar {
        width: 3px;
    }
`;

export const StCopyImg = styled.img<{ isViewsPopup?: boolean }>`
    cursor: pointer;
    ${({ isViewsPopup }) => `margin-left: ${isViewsPopup ? `0` : `5px`}`};
`;

export const StBackArrowContainer = styled.div<ThemeElement>`
    ${({ theme }) => `border-bottom: .5px solid ${theme.colors.border}`}; 
`;

export const StExportDropdownWrapper = styled.div`
    .dropdown > div {
        left: 0;
        top: 36px;
        width: 77px;
        .popup-item {
            width: 75px;
        }
    }  
`;

export const StRadioButtonsWrapper = styled.div`
    &.optionWithInput {
        & > label:nth-child(2) {
            margin-bottom: 50px;
        }
    }
    &.optionWithDropdown {
        & > label:first-child {
            margin-bottom: 50px;
        }
    }
`;

export const PopupLink = styled.span`
     ${({ theme }) => `color: ${theme.colors.primary}`};
     font-weight: 600;
     text-decoration: underline;
     cursor: pointer; 
`;

export const LayoutWrapper = styled.div`
    overflow: hidden auto;
    height: calc(100% - 50px);
    &::-webkit-scrollbar {
        width: 4px;
    }
`;

export const StBackButton = styled.div`
    position: fixed;
    width: 170px;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 275px;
    @media (max-width: 1600px) {
        left: 192px;
    }
    @media (max-width: 1536px) {
        left: 175px;
    }
    @media (max-width: 1440px) {
        left: 149px;
    }
    @media (max-width: 1366px) {
        left: 130px;
    }
    top: 50%;
    margin-top: -135px;
    cursor: pointer;
`;
