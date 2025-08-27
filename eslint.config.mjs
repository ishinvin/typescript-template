import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: ['**/dist/**']
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true, // project: ['./tsconfig.json'],
                tsconfigRootDir: import.meta.dirname
            }
        },
        rules: {
            // === Formatting / Style ===
            'comma-dangle': ['error', 'never'], // no trailing commas
            'brace-style': ['error', '1tbs'], // one true brace style
            indent: ['error', 4, { SwitchCase: 1 }], // 4 spaces indentation
            'jsx-quotes': ['error', 'prefer-single'], // enforce single quotes in JSX (if you use JSX at all)
            'quote-props': ['error', 'as-needed'], // only quote props when required
            quotes: ['error', 'single', { avoidEscape: true }], // single quotes
            semi: ['error', 'always'], // enforce semicolons

            // === Best Practices ===
            curly: ['error', 'all'], // always use braces for clarity
            eqeqeq: ['error', 'always'], // require ===/!== over ==/!=
            'no-multi-spaces': 'error', // disallow multiple spaces
            'no-trailing-spaces': 'error', // disallow trailing whitespace
            'object-curly-spacing': ['error', 'always'], // enforce spacing inside { }
            'array-bracket-spacing': ['error', 'never'], // no spaces inside arrays
            'padded-blocks': ['error', 'never'], // no extra space inside blocks/braces
            'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }], // disallow multiple empty lines

            // === TypeScript specific improvements ===
            '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
            '@typescript-eslint/no-explicit-any': 'warn' // discourage "any", but not error
        }
    },
    {
        files: ['**/*.mjs', 'tsup.config.ts'],
        extends: [tseslint.configs.disableTypeChecked]
    }
);