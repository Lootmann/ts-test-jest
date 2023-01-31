/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

  /* Jest がファイルを検索するために使用するディレクトリパス*/
  roots: ["<rootDir>/src", "<rootDir>/tests"],

  /* テストファイル名にマッチする正規表現文字列の配列 */
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],

  /* 正規表現でマッチしたファイルに対してts-jestを使うように指示 */
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
