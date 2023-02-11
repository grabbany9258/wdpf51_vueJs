<template>
  <div class="container">
    <pre>
        {{ JSON.stringify(formValues, null, 2) }}
    </pre>
    <!-- Name: {{ name }} <br />
    Email: {{ email }} -->

    <form v-on:submit.prevent="dataSubmit" action="">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          v-model.trim.lazy="formValues.name"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          v-model.trim.lazy="formValues.email"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Age</label>
        <input
          type="number"
          class="form-control"
          v-model.trim.lazy.number="formValues.age"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">District</label>
        <select class="form-control" id="" v-model="formValues.district">
          <option value="Dhaka">Dhaka</option>
          <option value="Barishal">Barishal</option>
          <option value="Khulna">Khulna</option>
          <option value="Sylhet">Sylhet</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Gender</label>
        <input type="radio" v-model="formValues.gender" value="Male" />Male
        <input
          type="radio"
          name="gender"
          v-model="formValues.gender"
          value="Female"
        />Female
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Education</label>
        <select
          class="form-control"
          name="education"
          v-model="formValues.education"
          multiple
        >
          <option value="SSC">SSC</option>
          <option value="HSC">HSC</option>
          <option value="BBA">BBA</option>
          <option value="MBA">MBA</option>
        </select>
      </div>

      <div class="mb-3">
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            value="python"
            v-model="formValues.courses"
          />
          <label for="exampleInputPassword1" class="form-label">Python</label>
        </div>

        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            value="php"
            v-model.trim="formValues.courses"
          />
          <label for="exampleInputPassword1" class="form-label">Php</label>
        </div>

        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            value="Java"
            v-model="formValues.courses"
          />
          <label for="exampleInputPassword1" class="form-label">Java</label>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        name: "",
        email: "",
        district: "",
        gender: "",
        education: [],
        courses: [],
        age: "",
      },
    };
  },
  methods: {
    dataSubmit(event) {
      //   event.preventDefault();
      console.log(this.formValues);
      alert(JSON.stringify(this.formValues, null, 2));
    },
  },
};
</script>

<style>
</style>