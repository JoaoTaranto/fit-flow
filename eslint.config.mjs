import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["node_modules", "dist", ".next"],
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      "prettier": pluginPrettier,
    },
    rules: {
      ...prettier.rules,
      "prettier/prettier": ["error", {
        trailingComma: "all",
        tabWidth: 2,
        printWidth: 80,
        endOfLine: "lf",
      }],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/no-anonymous-default-export": "off"
    },
  }
];

export default eslintConfig;
