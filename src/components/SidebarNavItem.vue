<script setup lang="ts">
import { ref, computed } from 'vue';
import { store } from '@/store';
import type { MenuItemData } from '@/types';
import { ChevronRightIcon } from '@/components/icons';

const props = defineProps<{
  item: MenuItemData;
}>();

const isInitiallyOpen = computed(() => 
  props.item.submenu?.some(sub => sub.name === store.activeTab) ?? false
);

const isSubmenuOpen = ref(isInitiallyOpen.value);

const hasSubmenu = computed(() => props.item.submenu && props.item.submenu.length > 0);

const isParentActive = computed(() =>
  hasSubmenu.value && props.item.submenu?.some(sub => sub.name === store.activeTab)
);

const handleClick = () => {
  if (hasSubmenu.value) {
    isSubmenuOpen.value = !isSubmenuOpen.value;
  } else {
    store.openTab(props.item.name);
  }
};
</script>

<template>
  <li class="nav-item">
    <a href="#" :class="['nav-link', { active: isParentActive }]" @click.prevent="handleClick">
      <component :is="item.icon" />
      <span>{{ item.name }}</span>
      <ChevronRightIcon v-if="hasSubmenu" :class="['chevron-icon', { open: isSubmenuOpen }]" />
    </a>
    <ul v-if="hasSubmenu" :class="['submenu', { open: isSubmenuOpen }]">
      <li v-for="subItem in item.submenu" :key="subItem.name">
        <a 
          href="#" 
          :class="['nav-link', 'sub-link', { active: store.activeTab === subItem.name }]" 
          @click.prevent="store.openTab(subItem.name)"
        >
          {{ subItem.name }}
        </a>
      </li>
    </ul>
  </li>
</template>
