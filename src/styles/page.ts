import { css } from '@emotion/core';

export const page = css`
    html {
        padding: 1em;
    }

    @media (min-width: 34em) {
        html {
            padding: 1em calc(50% - 16em);
        }
    }

    iframe,
    img,
    input,
    select,
    textarea {
        height: auto;
        max-width: 100%;
    }
`;
