import { createGlobalStyle } from 'styled-components';
import scroll from './utils/scroll';
import fontFamily from './utils/fonts';

export default createGlobalStyle` 
&&&& {
        ${scroll}
        ${fontFamily}
    }
html{
    min-height: 100%;
    height: 100%;
    box-sizing: border-box;
    font-size: 14px;

    body {
      min-height:100%;
      padding:0;
      margin:0;
      position:relative;
      ${fontFamily};
      font-size: 14px;
      width: 100%;
      height: 100%;
      background-color: white;
      overflow: hidden;
      .content {
        overflow-y: auto!important;
      }
    }
}

#__next {
    height: 100%;
}


button, input, optgroup, select, textarea {
  ${fontFamily};
}
p {
    margin: 0;
}
div{
    box-sizing: border-box;
}
.innerImages {
    fill-opacity: 0.6;
    .hov {
        fill-opacity: 1;
    }
}
.innerImages:hover {
    fill-opacity: 1;
}
`;
