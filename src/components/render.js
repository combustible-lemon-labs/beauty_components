import { useCallback, useEffect, useState } from "https://unpkg.com/preact/hooks/dist/hooks.module.js?module"

/**
 * `<Render>` is a component which listens for an NUI `message` from a Client-script.
 *
 * This message should contain a `show` property which is either `true` or `false`.
 *
 * * `true` - Will display ("render") the component's children.
 * * `false` - Will hide the component's children, completely removing them from the webpage's DOM.
 */
const Render = ({ children }) => {
  console.log('trigger render')

  const [isRendering, setIsRendering] = useState(false)

  const handleRenderMessage = useCallback((e) => {
    const shouldRender = e.data.render

    if (shouldRender !== undefined) {
      setIsRendering(shouldRender)
    }
  }, [setIsRendering])

  useEffect(() => {
    window.addEventListener('message', handleRenderMessage)
    return () => window.removeEventListener('message', handleRenderMessage)
  }, [handleRenderMessage])

  return isRendering ? children : null
}

export default Render
