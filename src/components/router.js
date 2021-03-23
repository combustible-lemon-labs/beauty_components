import { useEffect, useState } from "https://unpkg.com/preact/hooks/dist/hooks.module.js?module"

/**
 *
 */
const Router = ({ active = '', routes = new Map() }) => {
  const [currentRoute, setCurrentRoute] = useState(null)

  useEffect(() => {
    if (routes.has(active)) {
      setCurrentRoute(routes.get(active))
    }
  }, [active, routes, setCurrentRoute])

  return currentRoute
}

export default Router
