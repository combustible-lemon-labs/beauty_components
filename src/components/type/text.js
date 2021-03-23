import { html } from "https://unpkg.com/htm/preact/index.mjs?module"

const text = "text-base text-gray-800"

/**
 * Typographic sub-title component
 * @param {Element} children Text to display
 * @param {string} classes Optional style-classes to overwrite the defaults.
 */
const Text = ({ children, classes }) => {
  return (
    html`
      <p class=${`${classes} ${text}`}>
        ${children}
      </p>
    `
  )
}

export default Text
