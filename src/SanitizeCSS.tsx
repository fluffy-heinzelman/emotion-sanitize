/** @jsx jsx */
import { jsx, css, SerializedStyles, Global } from '@emotion/react';
import React, { useMemo } from 'react';

import {
    forms as formsCSS,
    page as pageCSS,
    sanitize as sanitizeCSS,
    typography as typographyCSS
} from './styles';

export interface SanitizeCSSProps {
    forms?: boolean;
    page?: boolean;
    sanitize?: boolean;
    typography?: boolean;
}

const createStyle = (props: Required<SanitizeCSSProps>): SerializedStyles => {
    const { forms, page, sanitize, typography } = props;
    return css`
        ${forms ? formsCSS : ''}
        ${page ? pageCSS : ''}
        ${sanitize ? sanitizeCSS : ''}
        ${typography ? typographyCSS : ''}
    `;
};

const SanitizeCSS = ({
    forms = false,
    page = false,
    sanitize = true,
    typography = false
}: SanitizeCSSProps): JSX.Element => {
    const style = useMemo(
        () => createStyle({ forms, page, sanitize, typography }),
        [forms, page, sanitize, typography]
    );

    return <Global styles={style} />;
};

export { SanitizeCSS };
