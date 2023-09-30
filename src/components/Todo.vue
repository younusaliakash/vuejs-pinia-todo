<script setup>
import { ref } from "vue";
import { useTodoStore } from "../store/store";
import Navigation from "./Navigation.vue";

const newTask = ref("");
const store = useTodoStore();

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
  <Navigation />
  <div
    class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans pt-[80px]"
  >
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-4">
        <h1 class="text-grey-darkest">Todo List</h1>
        <div class="flex mt-4">
          <input
            v-model="newTask"
            @keyup.enter="addTask"
            class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            placeholder="Add Todo"
          />
          <button
            @click="addTask"
            class="flex-no-shrink p-2 border-2 border-teal-400 rounded text-teal-400 hover:text-white hover:bg-teal-400 hover:border-teal-400"
          >
            Add
          </button>
        </div>
      </div>
      <div>
        <div
          v-for="(task, index) in tasks"
          :key="index"
          class="flex mb-4 items-center"
        >
          <p
            class="w-full"
            :class="task?.done ? 'line-through text-green-600' : 'text-black'"
          >
            {{ task?.name }}
          </p>
          <button
            v-if="!task.done"
            @click="toggleTaskStatus(index)"
            class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500 hover:border-green-500"
          >
            Done
          </button>
          <button
            v-if="task.done"
            @click="toggleTaskStatus(index)"
            class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-300 border-gray-300 hover:bg-gray-300 hover:border-gray-300"
          >
            Unaccomplished
          </button>
          <button
            @click="removeTask(index)"
            class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500 hover:border-red-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
