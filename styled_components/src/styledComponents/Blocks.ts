import styled, { css } from 'styled-components';
import * as mixins from "./utils/mixins";
import {
    StGridProps,
    StDivProps,
    StFlexProps,
    TContainerStyle,
    TCardContainer, ColorsProps, ThemeElement,
} from './types';

export const StFlex = styled.div < StFlexProps >`
 &&&& {
      ${mixins.flexStyles};
      ${mixins.sizeStyles};
      ${mixins.positionStyles};
      ${mixins.borderStyles};
      ${mixins.colorsStyles};
      ${mixins.fontStyles};
      ${props => props.cursor && `cursor: ${props.cursor};`};
      ${props => props.noSelect && `${mixins.noSelect}`};
      ${props => props.hasEllipsis && `${mixins.ellipsisStyles};`};
      ${props => props.overflowX && `overflow-x: ${props.overflowX}`};
 }
`;
export const StGrid = styled.div < StGridProps >`
 &&&& {
      display: grid;
      ${props => props.gap && `grid-gap: ${props.gap};`};
      ${props => props.columns && `grid-template-columns: ${props.columns};`}
      ${props => props.row && `grid-template-rows: ${props.row};`};
      ${props => props.align && `align-items: ${props.align};`};
      ${mixins.sizeStyles};
      ${mixins.positionStyles};
      ${mixins.borderStyles};
      ${mixins.colorsStyles};
      ${mixins.fontStyles};
    
      @media (max-width: 1800px) {
        ${props => props.columns1800 && `grid-template-columns: ${props.columns1800};`}
      }
      @media (max-width: 1750px) {
        ${props => props.columns1750 && `grid-template-columns: ${props.columns1750};`}
      }
      @media (max-width: 1700px) {
        ${props => props.columns1700 && `grid-template-columns: ${props.columns1700};`}
      }
      @media (max-width: 1650px) {
        ${props => props.columns1650 && `grid-template-columns: ${props.columns1650};`}
      }
      @media (max-width: 1600px) {
        ${props => props.columns1600 && `grid-template-columns: ${props.columns1600};`}
      }
      @media (max-width: 1536px) {
        ${props => props.columns1536 && `grid-template-columns: ${props.columns1536};`}
      }
      @media (max-width: 1440px) {
        ${props => props.columns1440 && `grid-template-columns: ${props.columns1440};`}
      }
      @media (max-width: 1366px) {
        ${props => props.columns1366 && `grid-template-columns: ${props.columns1366};`}
      }

      a {
        ${props => !props.linkWithTextDecor && `text-decoration: none;`};
      }
 }
 `;
export const StDiv = styled.div < StDivProps >`
 &&&& {
       ${mixins.sizeStyles};
       ${mixins.positionStyles};
       ${mixins.borderStyles};
       ${mixins.colorsStyles};
       ${mixins.fontStyles};
       ${props => props.hasEllipsis && `${mixins.ellipsisStyles};`};
       ${props => props.userSelect && `user-select: ${props.userSelect};`};
       ${props => props.overflowY && `top: ${props.overflowY};`};   
       ${props => props.alignSelf && `align-self: ${props.alignSelf};`}; 
       ${props => props.zIndex && `z-index: ${props.zIndex};`};
       ${props => props.cursor && `cursor: ${props.cursor};`};
       ${props => props.noSelect && `${mixins.noSelect}`};
       ${props => props.outline && `outline: ${props.outline}`};
       ${props => props.flexFull && `flex: 1`};
       ${props => props.display && `display: ${props.display}`};
 }
 `;

export const containerStyle = css<TContainerStyle & ColorsProps & ThemeElement>`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${({ width }) => width && `width: ${width}`};
    ${({ height }) => height && `height: ${height}`};
    ${({ theme, brColor, noBorder }) => brColor && !noBorder && `border: 1px solid ${theme.colors[brColor]}`};
    border-radius: 3px;
`;

export const CardContainer = styled.div<TCardContainer & TContainerStyle & ColorsProps>`
    &&&& {
        ${containerStyle};
    };
    ${({ margin }) => margin && `margin: ${margin}`};
    ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop}`};
    box-sizing: border-box;
`;

export const StHeaderContainer = styled.div`
    margin: 60px 0 25px;
    @media (max-height: 720px) {
        margin: 10px 0;
    }
`;

export const StProfileContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media (max-height: 720px) {
        flex-direction: row;
        align-items: center;
    }
`;
