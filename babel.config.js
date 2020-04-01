module.exports = (api) => {
    api.cache(true);

    const isCJS = process.env.BABEL_ENV === 'cjs';

    return {
        presets: [
            ['@babel/preset-env', { modules: isCJS ? 'commonjs' : false }],
            '@babel/preset-react',
            '@babel/preset-typescript'
        ],
        plugins: [
            ['emotion', { sourceMap: true }]
        ],
        retainLines: false,
        comments: false,
        ignore: [
            /@babel[\\|/]runtime/
        ]
    };
};
