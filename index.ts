import { consola } from "consola"
import { createConfig } from "eslint-config-relicx/lib/createConfig"
import { resolveProject } from "eslint-config-relicx/lib/helper"
import { createReactOverride } from "eslint-config-relicx/lib/overrides/react"
import { createTypeScriptOverride } from "eslint-config-relicx/lib/overrides/typescript"
import { getTsconfig } from "get-tsconfig"

const defaultProject = resolveProject()

// eslint-disable-next-line functional/no-conditional-statements
if (process.env.DEBUG?.includes("eslint")) {
    // eslint-disable-next-line functional/no-expression-statements
    consola.debug("Resolved project:", defaultProject)
}

const tsOverrideConfig = createTypeScriptOverride({
    ...defaultProject,
    extends: [
        "plugin:import/recommended",
        "plugin:functional/recommended",
        "plugin:functional/external-typescript-recommended",
        "typed-fp",
        "plugin:expect-type/recommended",
        "plugin:regexp/recommended",
        "plugin:rxjs/recommended",
        "plugin:case-police/recommended",
        "plugin:security/recommended",
    ],
    rules: {
        "@typescript-eslint/consistent-type-assertions": "warn",
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/no-useless-empty-export": "off",

        "total-functions/no-unsafe-readonly-mutable-assignment": "off",

        "etc/throw-error": "warn",
        "etc/prefer-less-than": "off",

        "func-style": ["warn", "expression"],

        "max-len": [
            "error",
            {
                code: 120,
            },
        ],
        "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 1 }],
        "no-bitwise": "off",
        "unicorn/template-indent": "warn",
    },
})

const reactOverrideConfig = createReactOverride({
    ...defaultProject,
    rules: {
        "react/display-name": "off",
        "react/function-component-definition": [
            "warn",
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
    },
})

export default createConfig({
    env: {
        browser: true,
        es2021: true,
    },
    incrementalAdoption: false,
    overrides: [tsOverrideConfig, reactOverrideConfig],
    plugins: ["functional", "total-functions", "expect-type", "regexp", "rxjs", "sort", "case-police", "security"],
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
