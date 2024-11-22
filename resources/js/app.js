import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import MainLayout from '@/Layouts/MainLayout.vue';

createInertiaApp({
  resolve: async name => {
    let moduleName, pageName;
    if (name.includes('::')) {
      [moduleName, pageName] = name.split('::');
    } else {
      moduleName = 'Root';
      pageName = name;
    }

    let page;
    if (moduleName === 'Root') {
      page = (await import(`./Pages/${pageName}.vue`)).default;
    } else {
      page = (await import(`../../Modules/${moduleName}/resources/Pages/${pageName}.vue`)).default;
    }

    page.layout = page.layout || MainLayout;
    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
});
