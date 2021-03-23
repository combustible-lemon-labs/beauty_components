import { html, render } from "https://unpkg.com/htm/preact/index.mjs?module"
import { useCallback, useState } from "https://unpkg.com/preact/hooks/dist/hooks.module.js?module"

import Render from "./lib/render.js"

// Type
import H1 from "./components/type/h1.js"
import H2 from "./components/type/h2.js"
import H3 from "./components/type/h3.js"
import H4 from "./components/type/h4.js"
import Text from "./components/type/text.js"
import Hint from "./components/type/hint.js"
import Tiny from "./components/type/tiny.js"

// Button
import Button from "./components/button.js"

// Router
import Router from "./components/router.js"

const App = () => {
  const [routerPage, setRouterPage] = useState('lorem')

  const toggleRoute = useCallback(() => {
    setRouterPage(routerPage === 'lorem' ? 'ipsum' : 'lorem')
  }, [routerPage, setRouterPage])

  return (
    html`
      <${Render} isRendering=${false}>
        <div class="bg-gray-50 p-9 space-y-6 w-full h-full">
          <div class="space-y-2">
            <${H1} classes="pb-2">Typography<//>
            <hr />
            <div class="space-y-2">
              <${H1}>Heading<//>
              <${H2}>Sub-Heading<//>
              <${H3}>Title<//>
              <${H4}>Sub-Title<//>
              <${Text}>Paragraph<//>
              <${Hint}>Hint<//>
              <${Tiny}>Tiny<//>
            </div>
          </div>
          <div class="space-y-2">
            <${H1} classes="pb-2">Button<//>
            <hr />
            <div class="space-y-2">
              <${Button}>Button<//>
              <br />
              <${Button} variant="outline">Outlined Button<//>
              <br />
              <${Button} variant="text">Text Button<//>
              <${Button} block>Block Button<//>
            </div>
          </div>
          <div class="space-y-2">
            <${H1} classes="pb-2">Router<//>
            <hr />
            <${Button} onClick=${toggleRoute}>Switch to ${routerPage === 'lorem' ? 'Ipsum' : 'Lorem'}<//>
            <${Router}
              active=${routerPage}
              routes=${new Map(Object.entries({
                lorem: html`<div>lorem</div>`,
                ipsum: html`<div>ipsum</div>`,
              }))}
            />
          </div>
        </div>
      <//>
    `
  )
}

render(html`<${App} />`, document.getElementById("render"))
