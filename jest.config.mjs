/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
    // preset: 'ts-jest',
    testEnvironment: 'jest-environment-node',
    // A map from regular expressions to paths to transformers
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            tsconfig: {
                module: 'commonjs'
            }
        }]
    }
};

export default config;
