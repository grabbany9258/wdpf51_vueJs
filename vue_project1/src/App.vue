<!-- <script setup>
import AddTask from './components/addnew.vue'
</script> -->

<template>
  <!-- <AddTask /> -->
  <!-- addTask start -->

  <h1>Add a new task</h1>

  <!-- for Counting -->
  <h3>You have {{ allTasks }} {{ allTasks > 1 ? 'tasks' : 'task' }} at the moment</h3>


  <div>
    <input type="text" v-model="newTask" placeholder="Add a new task">
    <!-- for button -->
    <button @click="addTask" :disabled="newTask.length < 1">
      Add task
    </button>
  </div>
  <hr>

  <!-- addTask end -->


  <!-- previwing newTask -->

  <div v-if="newTask.length > 0">
    <h3>New task preview</h3>
    <p>{{ newTask }}</p>
  </div>

  <h1>{{ title }}</h1>
  <ul>
    <li v-for="(task, index) in latest" :key="task.id">
      {{ task.id }}. {{ task.name }} .{{ task.finished }}
      <div v-if="task.finished">
        <button>Delete task</button>
      </div>
      <div v-else-if="task.edit">
        <button>Edit task</button>
      </div>
      <div v-else>
        <p>No button</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      title: 'My To Do App',
      newTask: '',
      tasks: [
        { id: 1, name: 'Learn Vue JS', finished: false, edit: true },
        { id: 2, name: 'Build a Vue application', finished: true, edit: false },
        { id: 3, name: 'Write an article about Vue JS', }
      ]
    }
  },

  // method

  methods: {
    addTask() {
      if (this.newTask.length < 1) return

      this.tasks.push({
        id: this.tasks.length + 1,
        name: this.newTask,
        finished: false,
        edit: true,
      });

      this.newTask = ''
    }
  },

  // computed

  computed: {
    allTasks() {
      return this.tasks.length
    },
    latest() {
      return [...this.tasks].reverse()
    }
  }


}
</script>