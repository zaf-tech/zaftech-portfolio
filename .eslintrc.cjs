// .eslintrc.cjs

/** @type {import('eslint').Linter.Config} */
module.exports = {
    // Specify the ESLint configuration settings here, e.g., environments, rules etc.
    env: {
        browser: true,
        es2021: true,
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        // Add your ESLint rules here
    },
};