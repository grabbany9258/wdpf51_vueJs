<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-12">
        <h2>Search Product</h2>
        <form v-on:submit.prevent="search()">
          <input type="text" v-model="searchItem" />
          <button type="submit">Search</button>
        </form>
        With {{ searchItem }} Total {{ serachResult.length }} results found .

        <hr />

        <!-- <h5>Photo of me:</h5>
        <div class="fakeimg">Fake Image</div>
        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        <h3 class="mt-4">Some Links</h3>
        <p>Lorem ipsum dolor sit ame.</p>
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <hr class="d-sm-none" /> -->
      </div>
      <div class="col-sm-8">
        <ol>
          <li v-for="item in serachResult" :key="item.id">
            <h2>{{ item.product_name }}</h2>
            <h5>Title description, Dec 7, 2020</h5>

            <p>
              {{ item.product_details }}
            </p>
            <!-- {{ posts }} -->
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
    <script>
import axios from "axios";
export default {
  data() {
    return {
      searchItem: "",
      serachResult: [],
    };
  },
  methods: {
    search() {
      axios
        .post("http://127.0.0.1:8000/api/search/", { item: this.searchItem })
        .then((response) => {
          // console.log(response.data);
          this.serachResult = response.data;
          console.log(response.data);
        });
    },
  },
};
</script>
  
    <style>
</style>