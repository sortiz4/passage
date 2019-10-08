module.exports = {
    use: [
        require('@neutrinojs/eslint')(),
        require('@neutrinojs/react')({
            // Document properties
            html: {
                title: 'Passage',
            },

            // Stylesheet processing
            style: {
                extract: false,
                loaders: [
                    {
                        loader: 'clean-css-loader',
                        options: {
                            level: {
                                1: {
                                    specialComments: 0,
                                },
                            },
                        },
                    },
                    'sass-loader',
                ],
                test: /\.(css|sass|scss)$/,
            },

            // Compilation targets
            targets: {
                browsers: [
                    'Chrome >= 70',
                ],
            },

            // Babel plugins
            babel: {
                plugins: [
                    [
                        '@babel/plugin-proposal-decorators',
                        {decoratorsBeforeExport: true},
                    ],
                    [
                        '@babel/plugin-proposal-class-properties',
                        {loose: true},
                    ],
                    '@babel/plugin-proposal-nullish-coalescing-operator',
                    '@babel/plugin-proposal-optional-chaining',
                    '@babel/plugin-proposal-numeric-separator',
                ],
            },
        }),
        neutrino => {
            // Add `node_modules` and `src` to the module resolver
            neutrino.config.resolve.modules
                .add('node_modules')
                .add('src');

            // Prepend styles and polyfills to the entry point
            neutrino.config.entry('index')
                .prepend('index.scss')
                .prepend('core-js');

            if(process.env.NODE_ENV === 'production') {
                // Configure the optimizer
                neutrino.config.optimization.minimizer('terser')
                    .use(require('terser-webpack-plugin'), [{
                        cache: true,
                        parallel: true,
                        terserOptions: {
                            output: {
                                comments: false,
                            },
                        },
                    }]);

                // Disable application splitting
                neutrino.config.optimization
                    .delete('runtimeChunk')
                    .delete('splitChunks');
            }
        },
    ],
};
