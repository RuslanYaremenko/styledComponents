import styled from 'styled-components';
import { buildStyledComponent } from './BuildStyleComponents';
import * as mixins from "./utils/mixins";
import { colors } from "./utils/colors";
import { ColorsProps, ThemeElement, FontProps, StFlexProps, ModalSizesProps } from './types';
import dimensions from "./utils/dimensions";
import { StDiv } from "./Blocks";
import { StSpan } from "./Text";

type THasHeader = { hasHeader?: boolean};
export const StHeaderModal = styled.div<ColorsProps & ThemeElement & FontProps & THasHeader>`
 &&&& {
    width: 100%;
    ${({ hasHeader }) => hasHeader && 'padding: 20px 35px 10px'};
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
    border-radius: 3px;
    ${props => props.backgroundColor && `background-color: ${props.backgroundColor || colors.primary}!important;`};
    ${props => props.color && `color: ${props.color || colors.primary}!important;`};
    ${mixins.flexStyles};
    svg {
        width: 15px;
        height: 13px;
    }
 }
`;
type TIsOpenWithScale = { open: boolean; withScale?: boolean };

type TModalContentWrap = { modalTop?: string; isChangedTop?: boolean; width?: string; isChangedLeft?: boolean };

export const StModalContentWrap = styled.div<ColorsProps & TIsOpenWithScale & TModalContentWrap & ModalSizesProps>`
 &&&& {
    ${mixins.hasGreyBorder};
    ${mixins.modalSizeSm};
    ${mixins.modalSizeXs};
    ${mixins.modalSizeMd};
    ${mixins.modalSizeMdl};
    ${mixins.modalSizeLg};
    ${mixins.animateScaleIn};
    ${mixins.animateScaleOut};
    ${props => props.backgroundColor && `background: ${props.backgroundColor};`};
    border-radius: 3px;
    position: absolute;
    ${({ modalTop }) => `top: ${modalTop || '20%'}`};
    ${({ isChangedTop }) => isChangedTop && `top: 14%`};
    ${props => props.xs && `left: calc(100%-${mixins.modalWidth.xs}/2);`};  
    ${props => props.ex && `left: calc(100%-${mixins.modalWidth.ex}/2);`};  
    ${props => props.sm && `left: calc(100%-${mixins.modalWidth.sm}/2);`};  
    ${props => props.md && `left: calc(100%-${mixins.modalWidth.md}/2);`};  
    ${props => props.mdl && `left: calc(100%-${mixins.modalWidth.mdl}/2);`};  
    ${props => props.lg && `left: calc(100%-${mixins.modalWidth.lg}/2);`};  
    ${({ isChangedLeft }) => isChangedLeft && `left: 53.45%`};
    @media (max-width: 1600px) {
       ${({ lg, mdl, md }) => `top: ${(lg || mdl || md) ? '10%' : '18%'}`};
       ${({ isChangedLeft }) => isChangedLeft && `left: 53.4%; top: 16%;`};
    }
    @media (max-width: 1536px) {
       ${({ isChangedLeft }) => isChangedLeft && `top: 17%;`};
    }
    @media (max-width: 1440px) {
       ${({ isChangedLeft }) => isChangedLeft && `left: 53.75%; top: 16%;`};
       ${({ isChangedTop }) => isChangedTop && `left: 53.75%`};
    }
    @media (max-width: 1366px) {
       top: 14%; 
       ${({ isChangedTop }) => isChangedTop && `top: 10%`};
       ${({ isChangedLeft }) => isChangedLeft && `left: 53.95%; top: 19.5%!important;`};
    }

    form {
      border-radius: 3px;
    }
 }
 ${({ open }) => `animation: ${open ? 'fadeIn' : 'fadeOut'} ease .3s;`};
`;
export const StModalFooter = styled.div`
 &&&& {
    width: 100%;
    border-collapse: collapse;
    padding: 19px 35px 35px;
    ${mixins.flexStyles};
 }
`;

export const StModalWrap = styled.div<TIsOpenWithScale & StFlexProps >`
 &&&& {
    ${mixins.flexStyles};
    ${mixins.animateOpacityIn};
    ${mixins.animateOpacityOut};
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: ${colors.backgroundWithOpacity};
}  
    ${({ open }) => `animation: ${open ? 'opacity-in' : 'opacity-out'} .1s ease-in-out forwards;`};
`;
type TStModalBody = { stModalBodyPadding?: boolean };
export const StModalBody = styled.div<TStModalBody>`
 &&&& {
    ${({ stModalBodyPadding }) => stModalBodyPadding && 'padding: 0 35px'};
 }
`;

export const StModal = buildStyledComponent('StModal', styled(StModalWrap), {}, {});

export const StContentWrap = buildStyledComponent('StContent', styled(StModalContentWrap), {}, {});

export const StBody = buildStyledComponent('StContent', styled(StModalBody), {}, {});

export const StHeader = buildStyledComponent('StHeader', styled(StHeaderModal), {}, {});

export const StFooter = buildStyledComponent('StFooter', styled(StModalFooter), {}, {});

export const StModalHeader = styled.p<{withoutMargin?: boolean}>`
    text-align: center;
    width: 100%;
    color: ${colors.primary};
    font-size: ${dimensions.fontSizeLG};
    font-weight: 600;
    line-height: 24px;
    user-select: none;
    ${({ withoutMargin }) => !withoutMargin && 'margin-bottom: 22px;'};
    box-sizing: border-box;
    padding: 0 35px;
    word-break: break-word;
`;
type TTextProps = { textAlign?: string };
export const StModalConfirmText = styled.p<TTextProps>`
    ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
    width: 100%;
    word-break: break-word;
`;

export const StModalUnvisibleInput = styled.input`
    width: 0;
    height: 0;
    border: none;
    position: absolute;
    padding: 0;
`;

export const StButtonWrapper = styled.div`
    position: absolute;
    top: 20px;
    right: 11px;
    button {
        height: 12px!important;
    }
    svg {
        width: 12px!important;
        height: 12px!important;
    }
`;

export const StInfo = styled(StDiv)`
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    line-height: 16px;
    padding-bottom: 10px;
`;

export const StInfoNumbers = styled(StSpan)`
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    ${({ theme }) => `color: ${theme.colors.primary}`};
`;
