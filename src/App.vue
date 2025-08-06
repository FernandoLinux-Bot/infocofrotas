<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { store } from '@/store';
import LoginPage from '@/components/LoginPage.vue';
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
import TabbedContent from '@/components/TabbedContent.vue';

const handleResize = () => {
  if (window.innerWidth <= 1024) {
    store.isSidebarOpen = false;
  } else {
    store.isSidebarOpen = true;
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div v-if="!store.isAuthenticated">
    <LoginPage @login-success="store.login" />
  </div>
  <div v-else class="app-container">
    <Sidebar />
    <div :class="['main-wrapper', { full: !store.isSidebarOpen }]">
      <Header @menu-click="store.toggleSidebar" @logout="store.logout" />
      <TabbedContent />
    </div>
  </div>
</template>
