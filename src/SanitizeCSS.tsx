/** @jsx jsx */
import { jsx, css, SerializedStyles, Global } from '@emotion/react';
import React, { useMemo } from 'react';

import {
    assets as assetsCSS,
    evergreen as evergreenCSS,
    forms as formsCSS,
    formsEvergreen as formsEvergreenCSS,
    page as pageCSS,
    reduceMotion as reduceMotionCSS,
    sanitize as sanitizeCSS,
    typography as typographyCSS
} from './styles';

export interface SanitizeCSSProps {
    assets?: boolean;
    evergreen?: boolean;
    forms?: boolean;
    formsEvergreen?: boolean;
    page?: boolean;
    reduceMotion?: boolean;
    sanitize?: boolean;
    typography?: boolean;
}

const createStyle = (props: Required<SanitizeCSSProps>): SerializedStyles => {
    const { assets, evergreen, forms, formsEvergreen, page, reduceMotion, sanitize, typography } = props;
    return css`
        ${assets ? assetsCSS : ''}
        ${evergreen ? evergreenCSS : ''}
        ${forms ? formsCSS : ''}
        ${formsEvergreen ? formsEvergreenCSS : ''}
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
    formsEvergreen = false,
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
            formsEvergreen,
            page,
            reduceMotion,
            sanitize,
            typography
        }),
        [
            assets,
            evergreen,
            forms,
            formsEvergreen,
            page,
            reduceMotion,
            sanitize,
            typography
        ]
    );

    return <Global styles={style} />;
};

export { SanitizeCSS };
