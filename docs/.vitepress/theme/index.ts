import DefaultTheme from "vitepress/theme";
import { toggleDark } from './components/Dark';
import { useData } from 'vitepress'

import "./style/index.css";

import { h } from "vue";
import AnimateTitle from "./components/AnimateTitle.vue";
import backtotop from "./components/backtotop.vue";
import MouseFollower from "./components/MouseFollower.vue";
import HomeUnderline from "./components/HomeUnderline.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component("HomeUnderline", HomeUnderline);
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "home-hero-info": () => h(AnimateTitle),
      "doc-footer-before": () => h(backtotop),
      "layout-top": () => h(MouseFollower),
    });
  },
  setup() {
    const { isDark } = useData()
    // 实现切换主题过渡动画
    toggleDark(isDark)
  }
};
