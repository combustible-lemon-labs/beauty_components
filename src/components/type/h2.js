import { html } from "https://unpkg.com/htm/preact/index.mjs?module"

const text = "font-bold text-2xl text-gray-800"

/**
 * Typographic sub-heading component
 * @param {Element} children Text to display
 * @param {string} classes Optional style-classes to overwrite the defaults.
 */
const H2 = ({ children, classes }) => {
  return (
    html`
      <h2 class=${`${classes} ${text}`}>
        ${children}
      </h2>
    `
  )
}

export default H2
