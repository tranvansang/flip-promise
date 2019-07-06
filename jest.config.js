module.exports = {
  name: 'flip-promise',
  moduleFileExtensions: ['ts', 'js'],
  verbose: true,
  collectCoverageFrom: ['<rootDir>/index.ts'],
  transform: { '^.+\\.(ts)$': 'babel-jest', },
  testMatch: [ '<rootDir>/index.test.ts' ],
  testEnvironment: 'node'
}
