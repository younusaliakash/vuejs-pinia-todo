<script setup>
import { onBeforeMount } from "vue";
import { useAuthStore } from "./store/store";
const store = useAuthStore();

onBeforeMount(() => {
  const user = JSON.parse(localStorage.getItem("user")) || [];
  store.users = user;
  const current = JSON.parse(localStorage.getItem("currentUser")) || "";
  if (current) {
    const userC = { email: current.email, password: current.password };
    store.loginUser(userC);
  }
});
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>
