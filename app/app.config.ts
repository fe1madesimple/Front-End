export default defineAppConfig({
  ui: {
    selectMenu: {
      slots: {
        base: [
          "border-2 border-stroke rounded-xl focus:outline-none focus:ring-0 focus:bg-accent-200 focus:border-primary transition-colors disabled:bg-gray-50 disabled:text-black-500",
        ],
        trailingIcon: "shrink-0 text-gray-400",
      },
      variants: {
        variant: {
          outline: "ring-0 ring-transparent",
        },
      },
    },
  },
});
