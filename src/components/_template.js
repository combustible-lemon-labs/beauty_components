import { html } from "https://unpkg.com/htm/preact/index.mjs?module"
import { useCallback, useEffect, useState } from "https://unpkg.com/preact/hooks/dist/hooks.module.js?module"

const _TemplateClasses = "bg-gray-50"

/**
 * This is a template for what one of you own components could look like.
 *
 * It's very minimal: it only changes the background of  the content you pass it.
 */
const _Template = ({ children }) => {
  useEffect(() => {
    // Obviously this won't show up with the default-setup
    console.log("I'm going to print one-time, when I'm first rendered.")
  }, [])

  return (
    html`
      <div class=${_TemplateClasses}>
        ${children}
      </div>
    `
  )
}

export default _Template
