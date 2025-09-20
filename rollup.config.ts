import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';
// @ts-ignore
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { defineConfig } from 'rollup';
import alias from '@rollup/plugin-alias';
import path from 'path';

export default defineConfig([
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.cjs.js',
                sourcemap: true,
                format: 'cjs'
            },
            {
                file: 'dist/index.esm.js',
                sourcemap: true,
                format: 'esm'
            }
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            alias({
                entries: [
                    {
                        find: '@minimalist-ui',
                        replacement: path.resolve(__dirname, 'src')
                    }
                ]
            }),
            typescript({ tsconfig: './tsconfig.json', declaration: false, declarationMap: false }),
            postcss({
                extract: 'index.css',
                minimize: true,
                sourceMap: true
            })
        ]
    },
    {
        input: 'dist/types/index.d.ts',
        output: [
            {
                file: 'dist/index.d.ts',
                format: 'es'
            }
        ],
        plugins: [
            dts({
                compilerOptions: {
                    skipLibCheck: true,
                    baseUrl: './src',
                    paths: {
                        '@minimalist-ui/*': ['./*']
                    }
                }
            })
        ],
        external: [/\.css$/]
    },
    {
        input: 'src/props/index.ts',
        output: [
            {
                file: 'dist/props.cjs.js',
                sourcemap: true,
                format: 'cjs'
            },
            {
                file: 'dist/props.esm.js',
                sourcemap: true,
                format: 'esm'
            }
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            alias({
                entries: [
                    {
                        find: '@minimalist-ui',
                        replacement: path.resolve(__dirname, 'src')
                    }
                ]
            }),
            typescript({ tsconfig: './tsconfig.json', declaration: false, declarationMap: false })
        ]
    },
    {
        input: 'dist/types/props/index.d.ts',
        output: {
            dir: 'dist/types',
            entryFileNames: 'props.d.ts',
            format: 'esm'
        },
        plugins: [dts()]
    }
]);
