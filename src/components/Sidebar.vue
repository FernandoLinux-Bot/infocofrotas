<script setup lang="ts">
import { store } from '@/store';
import { frotasMenuItems } from '@/data/menuData';
import SidebarNavItem from './SidebarNavItem.vue';
import { PlayIcon } from '@/components/icons';
</script>

<template>
  <aside :class="['sidebar', { open: store.isSidebarOpen }]">
    <div class="sidebar-header">
      <div class="logo-text">
        <h1>MUNICÍPIO DE IBICARAÍ</h1>
        <span>Ano de Trabalho - 2025</span>
      </div>
      <button class="play-btn" aria-label="Play"><PlayIcon /></button>
    </div>
    <nav class="sidebar-nav">
      <ul>
        <SidebarNavItem
          v-for="item in frotasMenuItems"
          :key="item.name"
          :item="item"
        />
      </ul>
    </nav>
  </aside>
</template>
