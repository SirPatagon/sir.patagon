/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    'root': true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
    },
    'rules': {
        'semi': [
            'error',
            'always',
        ],
        'eol-last': [
            'warn',
            'always',
        ],
        'quotes': [
            'warn',
            'single',
        ],
        'comma-dangle': [
            'warn',
            'always-multiline',
        ],
        'no-trailing-spaces': [
            'warn',
            {
                'skipBlankLines': false,
                'ignoreComments': false,
            },
        ],
        'object-curly-spacing': [
            'warn',
            'always',
        ],
        'arrow-parens': [
            'warn',
            'as-needed',
        ],
        'indent': [
            'warn',
            4,
        ],
        'curly': [
            'warn',
            'multi-or-nest',
        ],
    },
};
