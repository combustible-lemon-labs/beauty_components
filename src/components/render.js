import { useCallback, useEffect, useState } from "https://unpkg.com/preact/hooks/dist/hooks.module.js?module"

/**
 * `<Render>` is a component which listens for an NUI `message` from a Client-script.
 *
 * This message should contain a `show` property which is either `true` or `false`.
 *
 * * `true` - Will display ("render") the component's children.
 * * `false` - Will hide the component's children, completely removing them from the webpage's DOM.
 */
const Render = ({ children, render }) => {
  const [isRendering, setIsRendering] = useState(render)

  const handleRenderMessage = useCallback((e) => {
    if (e.data.render !== undefined) {
      setIsRendering(e.data.render)
    }
  }, [setIsRendering])

  useEffect(() => {
    window.addEventListener('message', handleRenderMessage)
    return () => window.removeEventListener('message', handleRenderMessage)
  }, [handleRenderMessage])

  return isRendering ? children : null
}

export default Render
