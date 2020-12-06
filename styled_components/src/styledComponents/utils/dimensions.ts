import { BASE_FONT_SIZE_PX } from './constants';

const dimensions = {
    fontSize3XS: `${Math.floor(BASE_FONT_SIZE_PX * 0.7)}px`, //9px
    fontSize2XS: `${Math.floor(BASE_FONT_SIZE_PX * 0.7) + 1}px`, //10px
    fontSizeXS: `${Math.floor(BASE_FONT_SIZE_PX * 0.8)}px`, //11px
    fontSizeSM: `${Math.floor(BASE_FONT_SIZE_PX * 0.9)}px`, //12px
    fontSize: `${BASE_FONT_SIZE_PX}px`, //14px
    fontSizeMD: `${Math.floor(BASE_FONT_SIZE_PX * 1.2)}px`, //16px
    fontSizeLG: `${Math.floor(BASE_FONT_SIZE_PX * 1.3)}px`, //18px
    fontSizeXL: `${Math.ceil(BASE_FONT_SIZE_PX * 1.4)}px`, //20px
    fontSize2XL: `${Math.ceil(BASE_FONT_SIZE_PX * 1.5)}px`, //21px
    fontSize2XLS: `${Math.ceil(BASE_FONT_SIZE_PX * 1.5) + 1}px`, //22px
    fontSize3XL: `${Math.ceil(BASE_FONT_SIZE_PX * 1.7)}px`, //24px
    fontSize4XL: `${Math.ceil(BASE_FONT_SIZE_PX * 2.5) - 1}px`, //34px
    screenXS: 'max-width: 1366px',
    screenSM: 'max-width: 1440px',
    screenMD: 'max-width: 1536px',
    screenLG: 'max-width: 1600px',
    screenXL: 'max-width: 1920px',
    borderRadius: '3px',
};

export default dimensions;
