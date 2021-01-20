/** @jsx jsx */
import { jsx, css, SerializedStyles, Global } from '@emotion/react';
import React, { useMemo } from 'react';

import {
    assets as assetsCSS,
    evergreen as evergreenCSS,
    forms as formsCSS,
    page as pageCSS,
    reduceMotion as reduceMotionCSS,
    sanitize as sanitizeCSS,
    typography as typographyCSS
} from './styles';

export interface SanitizeCSSProps {
    assets?: boolean;
    evergreen?: boolean;
    forms?: boolean;
    page?: boolean;
    reduceMotion?: boolean;
    sanitize?: boolean;
    typography?: boolean;
}

const createStyle = (props: Required<SanitizeCSSProps>): SerializedStyles => {
    const { assets, evergreen, forms, page, reduceMotion, sanitize, typography } = props;
    return css`
        ${assets ? assetsCSS : ''}
        ${evergreen ? evergreenCSS : ''}
        ${forms ? formsCSS : ''}
        ${page ? pageCSS : ''}
        ${reduceMotion ? reduceMotionCSS : ''}
        ${sanitize ? sanitizeCSS : ''}
        ${typography ? typographyCSS : ''}
    `;
};

const SanitizeCSS = ({
    assets = false,
    evergreen = false,
    forms = false,
    page = false,
    reduceMotion = false,
    sanitize = true,
    typography = false
}: SanitizeCSSProps): JSX.Element => {
    const style = useMemo(
        () => createStyle({
            assets,
            evergreen,
            forms,
            page,
            reduceMotion,
            sanitize,
            typography
        }),
        [forms, page, sanitize, typography]
    );

    return <Global styles={style} />;
};

export { SanitizeCSS };
