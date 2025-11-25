export default {
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.m?js$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svgMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom'
};
