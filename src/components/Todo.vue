<script setup>
import { ref } from "vue";
import { useTodoStore } from "../store/store";

const newTask = ref("");
const store = useTodoStore();

console.log(store.tasks);

const addTask = () => {
  if (newTask.value.trim() !== "") {
    store.addTask({ name: newTask.value, done: false });
    newTask.value = "";
  }
};

const removeTask = (index) => {
  store.removeTask(index);
};

const toggleTaskStatus = (index) => {
  store.toggleTaskStatus(index);
};

const tasks = store.tasks;
</script>

<template>
  <div>
    <input v-model="newTask" @keyup.enter="addTask" />
    <button @click="addTask">Add Task</button>
    <ul>
      <li
        v-for="(task, index) in tasks"
        :key="index"
        :class="task?.done ? 'done' : 'undone'"
        @click="toggleTaskStatus(index)"
      >
        {{ task.name }}
        <button @click="removeTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>
