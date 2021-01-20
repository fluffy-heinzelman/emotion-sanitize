import { css } from '@emotion/react';

export const reduceMotion = css`
    @media (prefers-reduced-motion: reduce) {
        *,
      ::before,
      ::after {
            animation-delay: -1ms !important;
            animation-duration: 1ms !important;
            animation-iteration-count: 1 !important;
            background-attachment: initial !important;
            scroll-behavior: auto !important;
            transition-delay: 0s !important;
            transition-duration: 0s !important;
        }
    }
`;
