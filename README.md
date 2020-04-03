# emotion-sanitize

[![npm version](https://img.shields.io/npm/v/emotion-sanitize?style=flat-square)](https://www.npmjs.com/package/emotion-sanitize)
[![license](https://img.shields.io/npm/l/emotion-sanitize?style=flat-square)](LICENSE.md)

[Sanitize.css](https://github.com/csstools/sanitize.css/) ready to be used with [Emotion](https://emotion.sh/) CSS-in-JS API.

If you are wondering what the exact difference between [Normalize.css](https://github.com/necolas/normalize.css) and [Sanitize.css](https://github.com/csstools/sanitize.css/) is, you might find this [comparison](https://www.diffchecker.com/46LGdaQh) helpful.

For Normalize.css and Eric Meyer's Reset.css give these packages a try:
- [emotion-normalize](https://github.com/infinum/emotion-normalize)
- [emotion-reset](https://github.com/Sayegh7/emotion-reset)


## Installation

```sh
yarn add emotion-sanitize
```

or

```sh
npm install emotion-sanitize --save
```

## Usage

### As component

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { SanitizeCSS } from 'emotion-sanitize';

const App = () => (
  <React.Fragment>
    <SanitizeCSS sanitize typography forms />
  </React.Fragment>
);

ReactDOM.render(<App />, document.querySelector('#app'));
```

Component prop | Required | Type | Default value | Description
-------------- | -------- | ---- | ------------- | -----------
`forms` | no | boolean | `false` | Include `forms.css` global styles
`page` | no | boolean | `false` | Include `page.css` global styles
`sanitize` | no | boolean | `true` | Include `sanitize.css` global styles
`typography` | no | boolean | `false` | Include `typography.css` global styles

### Custom

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/core';
import { forms, page, sanitize, typography } from 'emotion-sanitize';

const App = () => (
  <React.Fragment>
    <Global 
        styles={css`
            ${sanitize}
            ${forms}
            ${page}
            ${typography}

            // your own global styles here
        `} 
    />
  </React.Fragment>
);

ReactDOM.render(<App />, document.querySelector('#app'));
```

## Version

Major and minor versions of `emotion-sanitize` correspond to the major and minor versions of `sanitize.css`.

Patch level reflects updates to `emotion-sanitize`.

## License

[MIT License](LICENSE.md)
