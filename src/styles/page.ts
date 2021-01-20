import { css } from '@emotion/react';

export const page = css`
    html {
        padding: 1em;
    }

    @media (min-width: 34em) {
        html {
            padding: 1em calc(50% - 16em);
        }
    }
`;
