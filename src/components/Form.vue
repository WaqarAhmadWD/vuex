<template>
  <form action="" @submit="submitHandler" id="form">
    <h1>Add/Edit</h1>
    <div>
      <input
        type="text"
        placeholder="Enter your id"
        name="id"
        :value="details.id"
        @change="setId"
      />
    </div>
    <div class="error" v-if="error.id">
      {{ error.id }}
    </div>
    <div>
      <input
        type="name"
        placeholder="Enter your name"
        name="name"
        :value="details.name"
        @change="setName"
      />
    </div>
    <div class="error" v-if="error.name">
      {{ error.name }}
    </div>
    <div>
      <input
        type="profession"
        placeholder="Enter your profession"
        name="pro"
        :value="details.pro"
        @change="setPro"
      />
    </div>
    <div class="error" v-if="error.pro">
      {{ error.pro }}
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
  {{ $store.state.id }}
</template>

<script>
export default {
  data() {
    return {
      details: {
        id: "",
        name: "",
        pro: "",
      },
      error: {
        id: "",
        name: "",
        pro: "",
      },
    };
  },
  methods: {
    setId(e) {
      this.details.id = e.target.value;
    },
    setName(e) {
      this.details.name = e.target.value;
    },
    setPro(e) {
      this.details.pro = e.target.value;
    },
    async submitHandler(e) {
      e.preventDefault();
      if (this.details.id < 1) {
        this.error.id = "Id must be atleast 1 character long";
      } else if (this.details.name < 3) {
        this.error.name = "Name must be atleast 3 character long";
      } else if (this.details.pro < 3) {
        this.error.pro = "Name must be atleast 3 character long";
      } else {
        this.$store.dispatch("setDetails", this.details);
        console.log(this.details);
        this.details = {
          id: "",
          name: "",
          pro: "",
        };
        this.error = {
          id: "",
          name: "",
          pro: "",
        };
      }
    },
  },
};
</script>

<style scoped>
#form {
  display: flex;
  width: 30rem;
  height: 30rem;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem 2rem;
  box-shadow: 0 0 20px black;
  border-radius: 25px;
}
#form div {
  width: 100%;
  display: flex;
  justify-content: center;
}
#form input,
#form button {
  width: 80%;
  border: none;
  background: #e5e5e5;
  padding: 1rem;
  font-size: 1.2rem;
}
#form h1 {
  color: gray;
  font-size: 3rem;
}
.error {
  color: red;
  width: 80% !important;
  justify-content: flex-start !important;
}
</style>
