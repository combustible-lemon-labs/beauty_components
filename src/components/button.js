import { html } from "https://unpkg.com/htm/preact/index.mjs?module"
import { useMemo } from "https://unpkg.com/preact/hooks/dist/hooks.module.js?module"

// Prop-related
const buttonCommon = "hover:bg-purple-700 active:bg-purple-800 focus:outline-none rounded-md"
const buttonTextCommon = "text-purple-600 hover:text-gray-100 active:text-gray-100"

const buttonBgSol = "bg-purple-600"
const buttonTextSol = " text-gray-100"

const buttonBgOut = "border-2 border-purple-600 border-opacity-100 hover:border-opacity-0 active:border-opacity-0"
const buttonTextOut = buttonTextCommon

const buttonBgTxt = ""
const buttonTextTxt = buttonTextCommon

const buttonBlock = "w-full"

// Constant
const buttonAnim = "transition ease-in-out duration-300"
const buttonSpacing = "px-4 py-2"
const button = `${buttonAnim} ${buttonSpacing}`

/**
 * Typographic heading component
 * @param {boolean} block Toggle full-width
 * @param {Element} children
 * @param {string} classes Optional style-classes to overwrite the defaults.
 * @param {string} variant `"solid" | "outline" | "text"`
 *
 * **`classes` should be used to overwrite default colors.**
 */
const Button = ({ block = false, children, classes = '', variant = 'solid', onClick }) => {
  const variantClass = useMemo(() => {
    switch (variant) {
      case 'solid': return `${buttonCommon} ${buttonBgSol} ${buttonTextSol}`
      case 'outline': return `${buttonCommon} ${buttonBgOut} ${buttonTextOut}`
      case 'text': return `${buttonCommon} ${buttonBgTxt} ${buttonTextTxt}`
      default: return ''
    }
  }, [variant])

  return (
    html`
      <button class=${`${classes} ${variantClass} ${block ? buttonBlock : ''} ${button}`} onClick=${onClick}>
        ${children}
      </button>
    `
  )
}

export default Button
