export default {
  created() {
    this.$store.dispatch('getParts');
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
