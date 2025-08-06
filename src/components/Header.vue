<script setup lang="ts">
import { ref } from 'vue';
import { store } from '@/store';
import { userMenuItems } from '@/data/menuData';
import { BellIcon, Bars3Icon } from '@/components/icons';
import { useClickOutside } from '@/composables/useClickOutside';

defineEmits(['menu-click', 'logout']);

const userMenuOpen = ref(false);
const userMenuRef = ref<HTMLElement>();

useClickOutside(userMenuRef, () => {
  userMenuOpen.value = false;
});

const handleItemClick = (onClick?: () => void) => {
  if (onClick) {
    onClick();
  }
  userMenuOpen.value = false;
};
</script>

<template>
  <header class="header">
    <button class="hamburger-btn" @click="$emit('menu-click')" aria-label="Abrir menu">
      <Bars3Icon />
    </button>
    <div class="header-actions">
      <button class="action-btn" aria-label="Notificações"><BellIcon /></button>
      <div class="user-profile" ref="userMenuRef" @click="userMenuOpen = !userMenuOpen">
        <div class="user-avatar">{{ store.userName.charAt(0) }}</div>
        <span class="user-name">{{ store.userName }}</span>
        <div :class="['user-menu', { open: userMenuOpen }]">
          <template v-for="(item, index) in userMenuItems(store.logout)">
            <div v-if="item.type === 'divider'" :key="`divider-${index}`" class="user-menu-divider" />
            <div v-else :key="item.name" class="user-menu-item" @click="handleItemClick(item.onClick)">
              <component v-if="item.icon" :is="item.icon" />
              <span>{{ item.name }}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </header>
</template>
