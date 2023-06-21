import confusingBrowserGlobals from "confusing-browser-globals"
import { createConfig } from "eslint-config-galex/dist/createConfig"
import { createReactOverride } from "eslint-config-galex/dist/overrides/react"
import { createTypeScriptOverride } from "eslint-config-galex/dist/overrides/typescript"
import { getTsconfig } from "get-tsconfig"

import { resolveProject } from "./helper"

const defaultProject = resolveProject()

const tsOverrideConfig = createTypeScriptOverride({
    ...defaultProject,
    extends: [
        "plugin:regexp/recommended",
        "plugin:import/recommended",
        "plugin:sonarjs/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:functional/stylistic",
        "typed-fp",
        "plugin:rxjs/recommended",
        "plugin:security/recommended",
        "plugin:case-police/recommended",
    ],
    rules: {
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "warn",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "warn",
        "@typescript-eslint/no-unnecessary-qualifier": "warn",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
        "@typescript-eslint/no-invalid-void-type": "warn",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/member-ordering": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/dot-notation": "warn",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/consistent-type-assertions": "warn",
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                // Allow to name unused vars with _
                argsIgnorePattern: "^_",
            },
        ],
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/restrict-template-expressions": "warn",
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "@typescript-eslint/prefer-optional-chain": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/prefer-literal-enum-member": "off",
        "@typescript-eslint/prefer-enum-initializers": "off",
        "@typescript-eslint/no-useless-empty-export": "off",

        "etc/throw-error": "warn",
        "etc/prefer-less-than": "off",
        "etc/no-enum": "error",
        "etc/no-const-enum": "error",
        "etc/no-assign-mutated-array": "error",

        "func-style": ["warn", "expression"],
        "functional/type-declaration-immutability": "off",
        "functional/prefer-tacit": "warn",
        "functional/prefer-immutable-types": "off",
        "functional/no-try-statements": "off",
        "functional/no-throw-statements": "off",
        "functional/no-this-expressions": "off",
        "functional/no-return-void": "off",
        "functional/no-mixed-types": "off",
        "functional/no-loop-statements": "off",
        "functional/no-expression-statements": "off",
        "functional/no-conditional-statements": "off",
        "functional/no-classes": "off",
        "functional/no-let": "off",
        "functional/immutable-data": "off",
        "functional/functional-parameters": "off",
        "total-functions/no-unsafe-readonly-mutable-assignment": "off",

        "import/order": "off",
        "import/no-unused-modules": "off",
        "import/no-self-import": "error",
        "import/no-namespace": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-deprecated": "off",
        "import/no-default-export": "off",
        "import/no-cycle": "error",
        "import/namespace": "off",
        "import/named": "off",
        "import/extensions": "off",
        "import/export": "off",
        "import/dynamic-import-chunkname": "off",
        "import/default": "off",
        "import/consistent-type-specifier-style": "off",

        "max-len": [
            "error",
            {
                code: 120,
            },
        ],
        quotes: ["error", "double"],
        indent: "off",
        camelcase: "warn",
        "dot-notation": "off",
        strict: "error",
        "spaced-comment": "off",
        "require-unicode-regexp": "warn",
        "quote-props": ["error", "as-needed"],
        "promise/prefer-await-to-then": "off",
        "prefer-object-spread": "off",
        "no-use-before-define": "error",
        "no-unused-vars": "warn",
        "no-unsafe-optional-chaining": "error",
        "no-restricted-globals": ["error", ...confusingBrowserGlobals],
        "no-redeclare": "warn",
        "no-param-reassign": "off",
        "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 1 }],
        "no-lonely-if": "error",
        "no-else-return": "error",
        "no-bitwise": "off",
        "no-await-in-loop": "off",
        "array-callback-return": "off",

        "simple-import-sort/exports": "warn",
        "simple-import-sort/imports": "warn",

        "sonarjs/no-use-of-empty-return-value": "error",
        "sonarjs/no-ignored-return": "error",
        "sonarjs/no-identical-functions": "warn",
        "sonarjs/no-identical-expressions": ["warn"],
        "sonarjs/no-identical-conditions": "error",
        "sonarjs/no-gratuitous-expressions": "error",
        "sonarjs/no-element-overwrite": "error",
        "sonarjs/no-duplicated-branches": "error",
        "sonarjs/no-duplicate-string": "warn",
        "sonarjs/no-collection-size-mischeck": "error",
        "sonarjs/no-all-duplicated-branches": "error",
        "sonarjs/cognitive-complexity": ["warn", 32],

        "unicorn/template-indent": "warn",
        "unicorn/prefer-top-level-await": "off",
        "unicorn/prefer-math-trunc": "off",
        "unicorn/prefer-dom-node-dataset": "off",
        "unicorn/numeric-separators-style": "off",
        "unicorn/no-useless-undefined": "warn",
        "unicorn/no-keyword-prefix": "off",
        "unicorn/no-array-method-this-argument": "off",
        "unicorn/no-abusive-eslint-disable": "warn",
        "unicorn/consistent-function-scoping": "warn",
        "unicorn/catch-error-name": "off",

        "security/detect-object-injection": "off",
        "sort/destructuring-properties": "warn",

        "no-restricted-syntax": [
            "error",
            {
                selector: "ClassBody > MethodDefinition[kind='constructor'][accessibility!='private']",
                message: "Prefer private constructor",
            },
        ],
    },
})

const reactOverrideConfig = createReactOverride({
    ...defaultProject,
    rules: {
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/control-has-associated-label": "off",
        "jsx-a11y/interactive-supports-focus": "off",
        "jsx-a11y/no-autofocus": "warn",
        "jsx-a11y/no-noninteractive-element-interactions": "warn",
        "jsx-a11y/no-static-element-interactions": "off",
        "react/display-name": "off",
        "react/function-component-definition": [
            "warn",
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "react/jsx-handler-names": "warn",
        "react/jsx-indent": "warn",
        "react/jsx-indent-props": "off",
        "react/jsx-key": "error",
        "react/jsx-no-useless-fragment": "warn",
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-pascal-case": "off",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-sort-props": "off",
        "react/jsx-wrap-multilines": "off",
        "react/no-array-index-key": "warn",
        "react/no-invalid-html-attribute": "off",
        "react/no-namespace": "off",
        "react/no-unused-prop-types": "off",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "warn",
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
})

export default createConfig({
    env: {
        browser: true,
        es2021: true,
    },
    incrementalAdoption: false,
    overrides: [tsOverrideConfig, reactOverrideConfig],
    plugins: ["react-refresh", "regexp", "simple-import-sort", "functional", "total-functions", "rxjs", "sort"],
    settings: {
        parserOptions: { ecmaVersion: "latest", sourceType: "module" },
        react: { version: "detect" },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: getTsconfig()?.path ?? "tsconfig.json",
            },
        },
    },
})
