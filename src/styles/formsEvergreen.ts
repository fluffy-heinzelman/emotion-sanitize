import { css } from '@emotion/react';

export const formsEvergreen = css`
    button,
    input,
    select,
    textarea {
        background-color: transparent;
        border: 1px solid WindowFrame;
        color: inherit;
        font: inherit;
        letter-spacing: inherit;
        padding: 0.25em 0.375em;
    }

    select {
        -moz-appearance: none;
        -webkit-appearance: none;
        background: no-repeat right center / 1em;
        border-radius: 0;
        padding-right: 1em;
    }

    select:not([multiple]):not([size]) {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E");
    }

    [type="color" i],
    [type="range" i] {
        border-width: 0;
        padding: 0;
    }
`;