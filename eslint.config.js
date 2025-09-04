import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

export default defineConfig([
  globalIgnores(["dist"]),

  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": simpleImportSort,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        browser: true,
        node: true,
        es2020: true,
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // base js recommended
      ...js.configs.recommended.rules,

      // react
      ...reactPlugin.configs.recommended.rules,

      // react-hooks
      ...reactHooks.configs.recommended.rules,

      // react-refresh
      ...reactRefresh.configs.vite.rules,

      // overrides
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": ["warn", { varsIgnorePattern: "^[A-Z_]" }],
      "react/prop-types": "warn",
      "react/jsx-uses-react": "off",
      "react/jsx-key": ["warn", { checkFragmentShorthand: true }],
      "react/jsx-no-target-blank": "warn",
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            ["^react", "^react-dom"],
            ["^@?\\w"],
            ["^@/"],
            ["^\\u0000"],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ["^.+\\.css$", "^.+\\.scss$", "^.+\\.sass$"],
          ],
        },
      ],
      "simple-import-sort/exports": "warn",
      "react/no-array-index-key": "warn",
      "react-hooks/exhaustive-deps": "warn",
    },
  },

  eslintConfigPrettier,
]);
