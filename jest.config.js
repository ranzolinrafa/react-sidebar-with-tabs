const config = {
    verbose: true,
    collectCoverageFrom: ['./src/**/*.{js,jsx}'],
    collectCoverage: true,
    errorOnDeprecated: true,
    testMatch: ['**/test.[jt]s?(x)'],
    globals: {
        __DEV__: true
    },
    transform: {
        '^.+\\.jsx$': 'babel-jest'
    }
};
export default config;
