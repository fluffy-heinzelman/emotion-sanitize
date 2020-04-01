#!/usr/bin/env node

const { resolve } = require('path');
const { Transform } = require('stream');
const fs = require('fs');
const beautify = require('cssbeautify');

const srcDir = resolve(__dirname, '../node_modules/sanitize.css/');
const destDir = resolve(__dirname, '../src/styles/');

const transform = (name) => new Transform({
    transform(chunk, encoding, callback) {
        let css = chunk
            .toString()
            .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, '')
            .replace(/^\s*\n/gm, '')
            .replace(/\s+$/gm, '');

        css = beautify(css)
            .replace(/^(?!\s*$)/gm, ' '.repeat(4));

        let ts = 'import { css } from \'@emotion/core\';\n\n';
        ts += `export const ${name} = css\`\n`;
        ts += `${css}\n`;
        ts += '\`;\n';

        this.push(ts);
        callback();
    }
});

const transformFile = (name, src, dest) => new Promise((resolve, reject) => {
    const rs = fs.createReadStream(src);
    const ws = fs.createWriteStream(dest, { flags: 'w' });
    ws.on('error', reject);
    rs.on('error', reject);
    rs.on('end', resolve);
    rs
        .pipe(transform(name))
        .pipe(ws);
});

const transforms = ['forms' , 'page', 'sanitize', 'typography'].map((file) => transformFile(
    file,
    resolve(srcDir, `${file}.css`),
    resolve(destDir, `${file}.ts`)
));

Promise
    .all(transforms)
    .catch(console.error);
