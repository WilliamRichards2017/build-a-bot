export default {
  created() {
    this.$store.dispatch('robots/getParts');
  },
  computed: {
    parts() {
      return this.$store.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
