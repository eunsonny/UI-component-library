module.exports = {
    "roots": ["./src/test"],
    "testMatch": [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "testEnvironment": "jsdom",
    "moduleNameMapper": {
        "\\.(css|less|svg)$": "identity-obj-proxy"
    },
    "setupFilesAfterEnv": ["./src/test/setup.ts"],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "transformIgnorePatterns": ["./node_modules/"],
  }
