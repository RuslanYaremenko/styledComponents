import { css } from 'styled-components';
import { colors } from './colors';

export default css`
  &&&& {
    ::-webkit-scrollbar {
      width: 3px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${colors.primary};
        border-radius: 50px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }
  }      
`;
