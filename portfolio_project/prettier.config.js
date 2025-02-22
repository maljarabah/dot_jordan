/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    trailingComma: "es5",
    tabWidth: 4,
    semi: false,
    singleQuote: false,
    printWidth: 999,
    bracketSameLine: true,
    jsxBracketSameLine: true,
    proseWrap: "preserve",
    plugins: ["prettier-plugin-tailwindcss"],
}

export default config
