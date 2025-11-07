import DefaultTheme from "vitepress/theme";

import "./style/index.css";

import { h } from "vue";
import Layout from "./components/Layout.vue";
import HomeUnderline from "./components/HomeUnderline.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component("HomeUnderline", HomeUnderline);
  },
  Layout: Layout,
};
