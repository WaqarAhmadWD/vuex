<template>
  <div class="table">
    <table>
      <th>ID</th>
      <th>Name</th>
      <th>Profession</th>
      <tr v-for="person in $store.state.details" :key="person.id">
        <td>{{ person.id }}</td>
        <td>{{ person.name }}</td>
        <td>
          {{ person.pro }}
        </td>
        <div class="btn">
          <button @click="$store.dispatch('setDelete', person.id)">
            Delete
          </button>
        </div>
      </tr>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style>
.table table {
  width: 100%;
}
.table th {
  text-align: left;
  font-size: 1.5rem;
}
.table table * {
  padding: 1rem;
}
.table table tr {
  background: #e5e5e5;
  padding: 1rem;
  font-size: 1.2rem;
}
.table .btn {
  /* width: 8rem !important; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
