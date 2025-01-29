import { mount } from 'svelte';
// import './app.css';
import App from './App.svelte';

// ----------------------------
// ## 主程序嵌入
const _app = document.createElement('div');
document.body.append(_app);
const app = mount(App, {
  target: _app,
  props: { _app }
});

export default app;
