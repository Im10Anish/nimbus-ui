import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // or 'node', depending on your project needs
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  roots: ['<rootDir>/src'], // Assuming your source files are in a 'src' folder
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'], // Pattern for test files
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Use ts-jest for TS/TSX files
  },
  // Mock static assets like styles and images
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  collectCoverage: true, // Enable code coverage
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}', // Include all TS/TSX files for coverage
    '!src/**/*.d.ts', // Exclude type declaration files
    '!src/**/*.stories.tsx', // Exclude stories files
    '!src/**/index.ts', // Exclude index files, if needed
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};

export default config;
