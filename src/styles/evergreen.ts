import { css } from '@emotion/react';

export const evergreen = css`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    ::before,
    ::after {
        text-decoration: inherit;
        vertical-align: inherit;
    }

    html {
        cursor: default;
        line-height: 1.5;
        overflow-wrap: anywhere;
        -moz-tab-size: 4;
        tab-size: 4;
        -webkit-tap-highlight-color: transparent;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;
    }

    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }

    dl dl,
    dl ol,
    dl ul,
    ol dl,
    ul dl {
        margin: 0;
    }

    hr {
        color: inherit;
        height: 0;
    }

    nav ol,
    nav ul {
        list-style: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E");
        padding: 0;
    }

    nav li::before {
        content: "\\200B";
    }

    pre {
        font-family: monospace, monospace;
        font-size: 1em;
        overflow: auto;
    }

    abbr[title] {
        text-decoration: underline;
        text-decoration: underline dotted;
    }

    b,
    strong {
        font-weight: bolder;
    }

    code,
    kbd,
    samp {
        font-family: monospace, monospace;
        font-size: 1em;
    }

    small {
        font-size: 80%;
    }

    audio,
    canvas,
    iframe,
    img,
    svg,
    video {
        vertical-align: middle;
    }

    audio:not([controls]) {
        display: none;
        height: 0;
    }

    iframe {
        border-style: none;
    }

    svg:not([fill]) {
        fill: currentColor;
    }

    table {
        border-collapse: collapse;
        border-color: inherit;
        text-indent: 0;
    }

    button,
    input,
    select {
        margin: 0;
    }

    button {
        text-transform: none;
    }

    button,
    [type="button" i],
    [type="reset" i],
    [type="submit" i] {
        -webkit-appearance: button;
    }

    fieldset {
        border: 1px solid #a0a0a0;
        padding: 0.35em 0.75em 0.625em;
    }

    progress {
        vertical-align: baseline;
    }

    select {
        text-transform: none;
    }

    textarea {
        margin: 0;
        resize: vertical;
    }

    [type="search" i] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        height: auto;
    }

    ::-webkit-input-placeholder {
        color: inherit;
        opacity: 0.54;
    }

    ::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }

    ::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    :-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    :-moz-ui-invalid {
        box-shadow: none;
    }

    dialog {
        background-color: white;
        border: solid;
        color: black;
        height: -moz-fit-content;
        height: -webkit-fit-content;
        height: fit-content;
        left: 0;
        margin: auto;
        padding: 1em;
        position: absolute;
        right: 0;
        width: -moz-fit-content;
        width: -webkit-fit-content;
        width: fit-content;
    }

    dialog:not([open]) {
        display: none;
    }

    summary {
        display: list-item;
    }

    [aria-busy="true" i] {
        cursor: progress;
    }

    [aria-controls] {
        cursor: pointer;
    }

    [aria-disabled="true" i],
    [disabled] {
        cursor: not-allowed;
    }

    [aria-hidden="false" i][hidden] {
        display: initial;
    }

    [aria-hidden="false" i][hidden]:not(:focus) {
        clip: rect(0, 0, 0, 0);
        position: absolute;
    }
`;
