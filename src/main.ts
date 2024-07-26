import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { chamander } from './bases/03-classes.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1> ${ chamander.name } </h1>
`
