import DefaultTheme from 'vitepress/theme'
import HomeWorkbench from './components/HomeWorkbench.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeWorkbench', HomeWorkbench)
  },
}
