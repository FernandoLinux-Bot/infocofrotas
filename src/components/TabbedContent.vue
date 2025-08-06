<script setup lang="ts">
import { computed } from 'vue';
import { store } from '@/store';
import GenericManagementPage from '@/components/GenericManagementPage.vue';
import { HomeIcon, XMarkIcon } from '@/components/icons';

const PlaceholderContent = {
  props: ['pageTitle', 'message'],
  components: { HomeIcon },
  template: `
    <div class="content-placeholder">
        <div class="placeholder-icon"><HomeIcon /></div>
        <h1>{{ pageTitle }}</h1>
        <p>{{ message }}</p>
    </div>
  `
};

const activeComponent = computed(() => {
    if (store.activeTab === 'Página Principal') {
        return {
            component: PlaceholderContent,
            props: { pageTitle: "Bem-vindo ao Sistema de Frotas", message: "Selecione um item no menu para começar a gerenciar sua frota." }
        };
    }
    const config = store.getPageConfig(store.activeTab);
    if (config) {
        return {
            component: GenericManagementPage,
            props: { config: config, handleClose: () => store.closeTab(store.activeTab) }
        };
    }
    return {
        component: PlaceholderContent,
        props: { pageTitle: `Página "${store.activeTab}"`, message: "Esta página ainda está em construção." }
    };
});
</script>

<template>
  <main class="content">
    <div class="tabs-container">
      <div
        v-for="tab in store.openTabs"
        :key="tab"
        :class="['tab', { active: tab === store.activeTab }]"
        @click="store.setActiveTab(tab)"
      >
        <span>{{ tab }}</span>
        <button
          v-if="tab !== 'Página Principal'"
          class="tab-close-btn"
          @click.stop="store.closeTab(tab)"
        >
          <XMarkIcon />
        </button>
      </div>
    </div>
    <div class="content-area">
      <component :is="activeComponent.component" v-bind="activeComponent.props" />
    </div>
  </main>
</template>
