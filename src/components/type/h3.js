import { html } from "https://unpkg.com/htm/preact/index.mjs?module"

const text = "font-light text-2xl text-gray-800"

/**
 * Typographic title component
 * @param {Element} children Text to display
 * @param {string} classes Optional style-classes to overwrite the defaults.
 */
const H3 = ({ children, classes }) => {
  return (
    html`
      <h3 class=${`${classes} ${text}`}>
        ${children}
      </h3>
    `
  )
}

export default H3
