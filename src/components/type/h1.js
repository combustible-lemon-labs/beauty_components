import { html } from "https://unpkg.com/htm/preact/index.mjs?module"

const text = "font-bold text-4xl text-gray-800"

/**
 * Typographic heading component
 * @param {Element} children Text to display
 * @param {string} classes Optional style-classes to overwrite the defaults.
 */
const H1 = ({ children, classes }) => {
  return (
    html`
      <h1 class=${`${classes} ${text}`}>
        ${children}
      </h1>
    `
  )
}

export default H1
