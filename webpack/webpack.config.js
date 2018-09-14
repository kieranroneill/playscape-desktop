import CleanPlugin from 'clean-webpack-plugin';
import createElectronReloadWebpackPlugin from 'electron-reload-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
    join,
    resolve,
} from 'path';
import webpack from 'webpack';

const distPath = join(__dirname, '..', 'dist', 'renderer');
const srcPath = join(__dirname, '..', 'src', 'renderer');
const title = 'Playscape';
const uriLimit = 65000;

const ElectronReloadWebpackPlugin = createElectronReloadWebpackPlugin({
    path: join(__dirname, '..', 'dist', 'main', 'index.js'),
    logLevel: 0
});

export default {
    devtool: 'source-map',

    entry: {
        main: resolve(srcPath, 'index.ts'),
    },

    mode: (process.env.NODE_ENV || 'development'),

    module: {
        rules: [
            // Templating.
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },

            // Scripts.
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    configFile: join(__dirname, '..', 'tsconfig.renderer.json'),
                }
            },

            // Assets.
            {
                test: /\.gif/,
                loader: 'url-loader',
                options: {
                    limit: uriLimit,
                    mimeType: 'image/gif'
                }
            },
            {
                test: /\.jpg/,
                loader: 'url-loader',
                options: {
                    limit: uriLimit,
                    mimeType: 'image/jpeg'
                }
            },
            {
                test: /\.png$/,
                loader: 'url-loader',
                options: {
                    limit: uriLimit,
                    mimeType: 'image/png'
                }
            },
            {
                test: /\.svg$/,
                loader: 'url-loader',
                options: {
                    limit: uriLimit,
                    mimeType: 'image/svg+xml'
                }
            },
            {
                test: /\.ttf/,
                loader: 'url-loader',
                options: {
                    limit: uriLimit,
                    mimeType: 'application/octet-stream'
                }
            },
            {
                test: /\.woff$/,
                loader: 'url-loader',
                options: {
                    limit: uriLimit,
                    mimeType: 'application/font-woff'
                }
            },
            {
                test: /\.woff2$/,
                loader: 'url-loader',
                options: {
                    limit: uriLimit,
                    mimeType: 'font/woff2'
                }
            }
        ],
    },

    output: {
        path: distPath,
        filename: 'renderer.js',
    },

    plugins: [
        new CleanPlugin([distPath], { root: join(__dirname, '..') }),
        ElectronReloadWebpackPlugin('electron-renderer'),
        new HtmlWebpackPlugin({
            title,
            inject: 'body',
            isDevelopment: (process.env.NODE_ENV !== 'production'),
            template: resolve(srcPath, 'index.hbs'),
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'), // Default to development.
            },
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: () => [
                    autoprefixer({ browsers: ['last 3 versions'] })
                ],
            },
        }),
    ],

    resolve: {
        extensions: [
            '.js',
            '.ts',
            '.tsx'
        ],
    },
};
