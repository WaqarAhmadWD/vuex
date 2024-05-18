<template>
  <div class="main">
    <div class="form">
      <Form />
    </div>
    <div class="table">
      <Table />
    </div>
  </div>
</template>

<script>
import Form from "../components/Form.vue";
import Table from "../components/Table.vue";
export default {
  components: {
    Form,
    Table,
  },
};
</script>

<style scoped>
.main {
  display: flex;
}
.form {
  width: 50%;
  border-right: 2px solid black;
}
.table {
  width: 50%;
  margin: 1rem;
}
</style>
