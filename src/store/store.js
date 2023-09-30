import { defineStore } from 'pinia';
import { reactive} from 'vue'

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    tasks: reactive([]),
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    removeTask(taskIndex) {
      this.tasks.splice(taskIndex, 1);
    },
    toggleTaskStatus(taskIndex) {
      this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
    },
  },
});

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    users: [],
    currentUser: null,
  }),
  actions: {
    registerUser(user) {
      this.users.push(user);
    },
    loginUser({ email, password }) {
      const user = this.users.find(u => u.email === email && u.password === password);
      if (user) {
        this.currentUser = user;
        return true;
      }
      return false;
    },
    logoutUser() {
      this.currentUser = null;
    },
  },
});

