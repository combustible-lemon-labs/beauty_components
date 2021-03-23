import { html } from "https://unpkg.com/htm/preact/index.mjs?module"

const text = "font-medium text-lg text-gray-800"

/**
 * Typographic sub-title component
 * @param {Element} children Text to display
 * @param {string} classes Optional style-classes to overwrite the defaults.
 */
const H4 = ({ children, classes }) => {
  return (
    html`
      <h4 class=${`${classes} ${text}`}>
        ${children}
      </h4>
    `
  )
}

export default H4
