module.exports = {
    extends: ['expo', 'prettier'],
    plugins: ['react-native'],
    rules: {
        // Styling Rules
        'react-native/no-inline-styles': 'error', // Enforce no inline styles
        'react-native/no-unused-styles': 'warn',

        // TypeScript Safety
        '@typescript-eslint/no-explicit-any': 'warn', // Discourage 'any'
        '@typescript-eslint/ban-ts-comment': 'warn',

        // Best Practices
        'no-console': ['warn', { allow: ['warn', 'error'] }], // No console.log in production
        'react-hooks/exhaustive-deps': 'warn',
    },
};
