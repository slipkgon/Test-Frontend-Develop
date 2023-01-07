import { RouterConfig } from "@nuxt/schema";
export default <RouterConfig>{
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        left: 0,
        top: 0,
      };
    }
  },
};
