import styled from 'styled-components';
import * as mixins from "./utils/mixins";
import { StPProps, StLinkProps, StSpanProps, ColorsProps, ThemeElement } from "./types";
import { colors } from "./utils/colors";
import dimensions from "./utils/dimensions";

export const StP = styled.p < StPProps >`
 &&&& {
    ${mixins.sizeStyles};
    ${mixins.ellipsisStyles};
    ${mixins.colorsStyles};
    ${mixins.fontStyles};
    ${mixins.noSelect}
    ${props => props.max2LinesStyle && `${mixins.max2LinesStyle};`};
    ${props => props.display && `display: ${props.display};`};
    ${props => props.whiteSpace && `white-space: ${props.whiteSpace};`};
    ${props => props.hwFontWeight && `
    &:hover {
      font-weight: ${props.hwFontWeight};
    }`};
  }
`;
export const StLink = styled.a < StLinkProps & {disabled?: boolean; semiBoldOnHover?: boolean}>`
    ${({ txtDecorNone }) => txtDecorNone && 'text-decoration: none'};
 &&&& {
    ${mixins.sizeStyles};
    ${mixins.ellipsisStyles};
    ${mixins.colorsStyles};
    ${mixins.fontStyles};
    ${mixins.hoverStyles};
    ${mixins.clickableStyles};
    ${({ textDecor }) => textDecor && `text-decoration: ${textDecor}`};
    ${({ disabled }) => disabled && `cursor: not-allowed !important; opacity: 0.8;`};
    &:hover {
      ${({ semiBoldOnHover }) => semiBoldOnHover && `font-weight: 600; text-decoration: underline`};
    }
 };
`;
export const StSpan = styled.span < StSpanProps >`
 &&&& {
    ${mixins.sizeStyles};
    ${mixins.ellipsisStyles};
    ${mixins.colorsStyles};
    ${mixins.fontStyles};
    ${({ capitalize }) => capitalize && 'text-transform: capitalize'};
  }
`;

export const StBlackLink = styled(StLink)`
  color: ${colors.black};
  font-size: ${dimensions.fontSizeSM};
  text-decoration: none!important;
  &:hover {
      text-decoration: underline!important;
      color: ${colors.primary};
  }
`;
export const StName = styled.span<{hasRecords?: boolean} & ColorsProps & ThemeElement>`
 &&&& {
    ${mixins.noSelect};
    font-size: ${dimensions.fontSizeSM};
    ${({ hasRecords }) => hasRecords && `   
        &:hover {
            cursor: pointer;
            font-weight: bold;            
        }        
    `};
    &:hover {
      ${({ theme, color }) => color && `color: ${theme[color]}`}
    }
  }
`;
