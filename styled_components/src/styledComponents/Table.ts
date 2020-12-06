import styled, { css } from 'styled-components';
import { buildStyledComponent } from './BuildStyleComponents';
import * as mixins from "./utils/mixins";
import dimensions from "./utils/dimensions";
import { ColorsProps, StCellProps, ThemeElement } from './types';

export const StHeaderRow = styled.tr<ColorsProps & ThemeElement>`
 &&&& {
      ${({ theme, backgroundColor }) => backgroundColor && `background-color: ${theme.colors[backgroundColor]}!important`};
 }
`;

const borderStyleForTable = css<ThemeElement & ColorsProps>`
&:nth-child(1) { 
   &:after {
       content: '';
       width: 27px;
       height: .5px;
       position: absolute;
       bottom: -.5px;
       left: 4px;
       background-color: ${({ theme, brColor }) => theme.colors[`${brColor}`]};  
       @media screen and (max-width: 1536px) and (min-height: 724px) {
          bottom: -1px;
       }
       @media screen and (max-width: 1440px) {
          bottom:  -.5px;
       }
   }
   border: none;
}
`;

type TNoBorder = { noBorder?: boolean; hasMargin?: boolean};
export const StCellElement = styled.td < StCellProps & ColorsProps & ThemeElement & {hasEllipsis?: boolean; hasPointer?: boolean} & TNoBorder>`
 &&&& {
      ${mixins.sizeStyles};
      ${({ hasEllipsis }) => (hasEllipsis ? `${mixins.ellipsisStyles}` : null)};
      height: 48px!important;
      position: relative;
      ${({ noBorder }) => `padding: 2px ${noBorder ? '0' : '2px'}`};
      margin: 10px;
      border: none;
      ${({ theme, brColor, noBorder }) => (noBorder ? "border: none" : brColor && `border-bottom: 1px solid ${theme.colors[brColor]}`)};};
      ${({ noBorder }) => noBorder && borderStyleForTable};
      ${({ hasPointer }) => `cursor: ${hasPointer ? 'pointer' : 'default'}`};
      &:hover{
        ${({ hasPointer }) => `font-weight: ${hasPointer ? 'bold' : 'normal'}`};
      }
`;

export const StRow = styled.tr<{ negative?: boolean; hasHover?: boolean; hasHoverColor?: string }>`
 &&&& {
      border-radius: 3px;
       ${({ theme, negative }) => negative && `color: ${theme.colors.red}!important; 
       svg {
            path {
                fill: ${theme.colors.red};
            }
       }`};
      &:hover {
          ${StCellElement} {
              &:after {
                  display: none;
              }
              &:nth-child(1) {
                  &:before {
                      content: '';
                      width: 20px;
                      height: .5px;
                      position: absolute;
                      top: -.5px;
                      left: 0;
                      background-color: ${({ theme }) => theme.colors.border};
                      @media screen and (max-width: 1366px) {
                         top: 0px;
                      }
                      @media screen and (max-width: 1440px) {
                          top: 0px;
                      }
                      @media screen and (max-width: 1536px) {
                         top: -0.5px;
                      }
                      @media screen and (max-width: 1660px) {
                          top: -0.5px;
                      }
                      @media screen and (max-width: 1746px) { 
                          top: 0px!important;
                      }   
                  }
              }
          }
       ${({ hasHover }) => `box-shadow: ${hasHover ? 'none' : '0 0 6px rgba(0, 0, 0, 0.25)'};`};
       ${({ theme, hasHoverColor }) => hasHoverColor && `color: ${theme.colors[hasHoverColor]}`};
      }
    td > label {
        padding: 0 0 0 1px;
    }
`;
export const StTable = styled.table`
 &&&& {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
 }
`;

export const StHeaderCell = styled.td < StCellProps & ColorsProps & ThemeElement & TNoBorder>`
 &&&& {
      ${mixins.sizeStyles};
      font-style: normal;
      font-weight: bold;
      font-size: ${dimensions.fontSizeSM};
      line-height: 16px;
      ${({ noBorder }) => `padding: 6px ${noBorder ? '0' : '2px'}`};
      border: none;
      position: relative;
      ${({ theme, brColor, noBorder }) => (noBorder ? "border: none" : brColor && `border-bottom: 1px solid ${theme.colors[brColor]}`)}; };
      ${({ noBorder }) => noBorder && borderStyleForTable};
      label {
          padding: 0 0 0 1px;
          ${({ hasMargin }) => hasMargin && `
            margin-left: -5px;
            padding: 0;
          `};
      }
 }
`;

const modifiers = {
    actions: () => ({
        styles: css`
          width: 20px!important;
  `,
    }),
    company_profiles: () => ({
        styles: css`
          width: 130px!important;
          @media (max-width: 1600px) {
               width: 120px!important;
          }
          @media (max-width: 1440px) {
               width: 100px!important;
          }
  `,
    }),
    contact_info: () => ({
        styles: css`
          min-width: 130px!important;
          @media (max-width: 1366px) {
               width: 130px!important;
          }
  `,
    }),
    company_name: () => ({
        styles: css`
        min-width: 130px!important;
          @media (max-width: 1366px) {
               width: 130px!important;
          }
  `,
    }),
    selections: () => ({
        styles: css`
          width: 30px !important;
  `,
    }),
    matched_technologies: () => ({
        styles: css`
           width: 320px;
           @media (max-width: 1600px) {
              width: 280px!important;
           }
           @media (max-width: 1400px) {
               width: 250px!important;
           }
    `,
    }),
    look_alike_company: () => ({
        styles: css`
           width: 300px;
           @media (max-width: 1600px) {
               width: 250px!important;
           }
           @media (max-width: 1400px) {
               width: 220px!important;
           }
    `,
    }),
    original_company: () => ({
        styles: css`
           width: 300px;
           @media (max-width: 1600px) {
               width: 250px!important;
           }
           @media (max-width: 1400px) {
               width: 210px!important;
           }
    `,
    }),
    look_alike_company_contact: () => ({
        styles: css`
           width: 220;
           @media (max-width: 1600px) {
               width: 180px!important;
           }
           @media (max-width: 1400px) {
               width: 120px!important;
           }
    `,
    }),
    original_company_contact: () => ({
        styles: css`
           width: 220px;
           @media (max-width: 1600px) {
               width: 150px!important;
           }
           @media (max-width: 1400px) {
               width: 120px!important;
           }
    `,
    }),
    company: () => ({
        styles: css`
           width: 330px;
           @media (max-width: 1600px) {
               width: 280px!important;
           }
           @media (max-width: 1400px) {
               width: 250px!important;
           }
    `,
    }),
    company_intent: () => ({
        styles: css`
           width: 270px;
           @media (max-width: 1600px) {
               width: 230px!important;
           }
           @media (max-width: 1400px) {
               width: 180px!important;
           }
    `,
    }),
    intent_topics: () => ({
        styles: css`
           width: 300px;
           @media (max-width: 1600px) {
               width: 250px!important;
           }
           @media (max-width: 1400px) {
               width: 210px!important;
           }
    `,
    }),
    intent_score: () => ({
        styles: css`
           width: 200px;
           @media (max-width: 1600px) {
               width: 180px!important;
           }
           @media (max-width: 1400px) {
               width: 150px!important;
           }
    `,
    }),
};

export const StHeaderSearchCell = buildStyledComponent('StHeaderSearchCell', styled(StHeaderCell), {}, {
    modifiers,
});

export const StCell = buildStyledComponent('StCell', styled(StCellElement), {}, {
    modifiers,
});

export const StHeaderCellWrapper = styled.div`
    &.sort {
        display: flex;
        cursor: pointer;
        &:hover {
            ${({ theme }) => `color: ${theme.colors.primary};`};
            text-decoration: underline;
            path {
              ${({ theme }) => `fill: ${theme.colors.primary};`}; 
            } 
        }
    }
    &.sort_main {
        display: flex;
        cursor: pointer;
        ${({ theme }) => `color: ${theme.colors.primary};`};
        text-decoration: underline;
        path {
            ${({ theme }) => `fill: ${theme.colors.primary};`}; 
        }
        & > div:last-child {
            svg {
                align-self: center;
            }
        }
    }
`;

export const StIconWrapper = styled.div`
    margin-top: 3px;
    margin-left: 4px;
    display: flex;
`;
