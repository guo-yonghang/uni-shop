import App from './App'
import * as pinia from 'pinia'

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(pinia.createPinia())
	return { app }
}
// #endif
