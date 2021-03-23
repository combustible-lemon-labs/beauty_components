# FiveM Beauty Components

This library is **very** much a work in progress. This component-library is made to compliment [`fivem_beauty_boilerplate`](https://github.com/Ascent-Gaming/fivem_beauty_boilerplate).

## Usage

This is an example use and highlights the re-usability aspect of the library.

```JavaScript
import { html, render } from "https://unpkg.com/htm/preact/index.mjs?module"

import Button from "https://cfx-nui-beauty_components/src/html/components/button.js"

const App = () => html`<${Button}>Click me!<//>`

render(html`<${App} />`, document.getElementById("render"))
```
