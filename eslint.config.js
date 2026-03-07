import js from "@eslint/js"
import pluginVue from "eslint-plugin-vue"
import configPrettier from "eslint-config-prettier"
import globals from "globals"
import preferArrow from "eslint-plugin-prefer-arrow"

export default [
    js.configs.recommended,
    ...pluginVue.configs["flat/recommended"],
    configPrettier,
    {
        plugins: {
            "prefer-arrow": preferArrow,
        },
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            "vue/multi-word-component-names": "off",
            "prefer-arrow-callback": "error",
            "arrow-body-style": ["error", "as-needed"],
            "padding-line-between-statements": [
                "error",
                { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
                { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
                { blankLine: "always", prev: "*", next: "return" },
                { blankLine: "always", prev: "block-like", next: "*" },
                { blankLine: "always", prev: "*", next: "block-like" },
                { blankLine: "always", prev: "expression", next: "expression" },
            ],
            "prefer-arrow/prefer-arrow-functions": [
                "error",
                {
                    disallowPrototype: true,
                    singleReturnOnly: false,
                    classPropertiesAllowed: false,
                },
            ],
        },
    },
]
