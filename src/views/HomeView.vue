<template>
  <div class="home"></div>
  <Table />
</template>

<script>
import Table from "../components/Table.vue";
export default {
  name: "HomeView",
  components: {
    Table,
  },
  data() {
    return {
      var1: 1,
    };
  },
  computed: {
    change() {},
  },
};
</script>
