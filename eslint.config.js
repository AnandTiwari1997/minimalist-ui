import jsPlugin from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import noOnlyTestPlugin from 'eslint-plugin-no-only-tests';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHookPlugin from 'eslint-plugin-react-hooks';
import securityPlugin from 'eslint-plugin-security';
import storybookPlugin from 'eslint-plugin-storybook';
import typescriptPlugin from 'eslint-plugin-typescript';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintParser from 'typescript-eslint';

const noRestrictedImportsPatterns = ['./*', '../*'];
export default defineConfig([
    globalIgnores(['dist/', 'storybook-static/', 'tsconfig.json']),
    jsPlugin.configs.recommended,
    securityPlugin.configs.recommended,
    ...storybookPlugin.configs['flat/recommended'],
    perfectionistPlugin.configs['recommended-alphabetical'],
    {
        languageOptions: {
            globals: {
                ga: true
            },
            parser: eslintParser.parser,
            parserOptions: {
                babelOptions: {
                    parserOpts: {
                        plugins: ['typescript']
                    }
                },
                ecmaFeatures: {
                    blockBindings: true,
                    jsx: true,
                    modules: true,
                    tsx: true
                },
                requireConfigFile: false,
                sourceType: 'module'
            }
        },
        plugins: {
            import: importPlugin,
            'no-only-tests': noOnlyTestPlugin,
            prettier: prettierPlugin,
            react: reactPlugin,
            'react-hooks': reactHookPlugin,
            security: securityPlugin,
            typescript: typescriptPlugin
        },
        rules: {
            'array-callback-return': ['error'],
            'brace-style': 'error',
            'comma-style': ['error', 'last'],
            curly: ['error', 'all'],
            'dot-notation': ['error', { allowKeywords: true }],
            'eol-last': 'error',
            eqeqeq: ['error', 'always'],
            'import/namespace': 'error',
            'import/no-duplicates': 'error',
            'import/no-extraneous-dependencies': [
                'error',
                {
                    devDependencies: ['polyfill.js', '*.config.*']
                }
            ],
            'import/no-self-import': 'error',
            'import/no-unresolved': [
                'error',
                {
                    ignore: ['@minimalist-ui']
                }
            ],
            // 'import/order': [
            //     'error',
            //     {
            //         alphabetize: {
            //             order: 'asc'
            //         },
            //         groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index'],
            //         'newlines-between': 'always'
            //     }
            // ],
            'jsx-quotes': ['error', 'prefer-double'],
            'keyword-spacing': ['error', { after: true, before: true }],
            'max-params': ['error', { max: 5 }],
            'max-statements-per-line': ['error', { max: 1 }],
            'no-cond-assign': 'error',
            'no-console': ['error', { allow: ['warn', 'error'] }],
            'no-debugger': 'error',
            'no-dupe-args': 'error',
            'no-dupe-keys': 'error',
            'no-duplicate-case': 'error',
            'no-empty-function': 'off',
            'no-eq-null': 'off',
            'no-ex-assign': 'error',
            'no-fallthrough': 'error',
            'no-func-assign': 'error',
            'no-loop-func': 'error',
            'no-mixed-spaces-and-tabs': 'error',
            'no-multi-str': 'error',
            'no-nested-ternary': 'error',
            'no-only-tests/no-only-tests': 'error',
            'no-param-reassign': ['error', { ignorePropertyModificationsForRegex: ['.*[dD]raft.*'], props: true }],
            'no-restricted-imports': [
                'error',
                {
                    patterns: noRestrictedImportsPatterns
                }
            ],
            'no-sparse-arrays': 'error',
            'no-tabs': 'error',
            'no-this-before-super': 'error',
            'no-throw-literal': 'error',
            'no-undef': 'error',
            'no-unexpected-multiline': 'error',
            'no-unreachable': 'error',
            'no-unsafe-finally': 'error',
            'no-unsafe-negation': 'error',
            'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
            'no-unused-vars': ['error', { args: 'after-used', vars: 'local' }],
            'no-useless-concat': 'error',
            'no-warning-comments': ['error', { terms: ['todo'] }],
            'one-var': ['error', 'never'],
            'one-var-declaration-per-line': ['error', 'always'],
            'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
            'prettier/prettier': 'error',
            'react-hooks/exhaustive-deps': 'error',
            'react-hooks/rules-of-hooks': 'error',
            'react/no-access-state-in-setstate': 2,
            'react/no-arrow-function-lifecycle': 'error',
            'react/no-danger': 'error',
            'react/no-deprecated': 'error',
            'react/no-direct-mutation-state': 'error',
            'react/no-string-refs': 'error',
            'react/no-this-in-sfc': 'error',
            'react/no-unknown-property': ['error', { ignore: ['css'] }],
            'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
            'react/no-unused-class-component-methods': 'error',
            'react/no-unused-prop-types': 'error',
            'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
            'react/prop-types': [2, { ignore: ['dispatch', 'translate'] }],
            'react/require-render-return': 'error',
            'react/sort-default-props': ['error', { ignoreCase: true }],
            'react/sort-prop-types': ['error', { ignoreCase: true }],
            'require-await': 'error',
            'security/detect-eval-with-expression': 'error',
            'security/detect-non-literal-fs-filename': 'error',
            'security/detect-non-literal-regexp': 'warn',
            'security/detect-object-injection': 'warn',
            'security/detect-possible-timing-attacks': 'warn',
            'sort-keys': ['error', 'asc', { caseSensitive: true, minKeys: 2, natural: false }],
            'space-before-blocks': 'error',
            'space-infix-ops': ['error', { int32Hint: false }],
            'use-isnan': 'error',
            'valid-typeof': ['error', { requireStringLiterals: true }]
        },
        settings: {
            'import/resolver': {
                typescript: {}
            },
            react: { version: 'detect' }
        }
    }
]);
