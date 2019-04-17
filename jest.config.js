module.exports = {
    clearMocks: true,
    moduleDirectories: [
        'node_modules',
        'src'
    ],
    moduleFileExtensions: [
        'js',
        'vue'
    ],
    moduleNameMapper: {
        'components/(.*)$': '<rootDir>/src/components/$1'
    },
    transform: {
        '.*\\.(vue)$': 'vue-jest',
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    collectCoverageFrom: [
        'src/*/**/*.{js,vue}'
    ]
};
