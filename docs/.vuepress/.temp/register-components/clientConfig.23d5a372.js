import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("nav-card-item", defineAsyncComponent(() => import("C:/Git/Skydom-Wiki/docs/.vuepress/components/nav-card-item.vue"))),
      app.component("nav-card", defineAsyncComponent(() => import("C:/Git/Skydom-Wiki/docs/.vuepress/components/nav-card.vue")))
  },
}
