<script setup lang="ts">
import { ref } from 'vue';
import type { PageConfig } from '@/types';
import { InfoIcon, SearchIcon, PlusIcon, CloseIcon, TrashIcon, PencilIcon } from '@/components/icons';
import Modal from '@/components/Modal.vue';
import Form from '@/components/Form.vue';

defineProps<{
  config: PageConfig;
  handleClose: () => void;
}>();

const isModalOpen = ref(false);
const editingItem = ref<any>(null);

const handleAction = (action: string, row: any) => {
  alert(`Ação: ${action}\nItem: ${JSON.stringify(row, null, 2)}`);
};

const handleOpenNewModal = () => {
  editingItem.value = null;
  isModalOpen.value = true;
};

const handleOpenEditModal = (item: any) => {
  editingItem.value = item;
  isModalOpen.value = true;
};

const handleCloseModal = () => {
  isModalOpen.value = false;
  editingItem.value = null;
};

const handleFormSubmit = (data: any) => {
  if (editingItem.value) {
    alert(`Salvando alterações para: ${JSON.stringify(editingItem.value, null, 2)}\nNovos dados: ${JSON.stringify(data, null, 2)}`);
  } else {
    alert(`Criando novo item com dados: ${JSON.stringify(data, null, 2)}`);
  }
  handleCloseModal();
};
</script>

<template>
  <div class="page-container">
    <Modal :is-open="isModalOpen" :title="editingItem ? `Editar ${config.title}` : `Novo ${config.title}`" @close="handleCloseModal">
      <Form
        v-if="config.formFields"
        :fields="config.formFields"
        :initial-data="editingItem"
        @submit="handleFormSubmit"
        @cancel="handleCloseModal"
      />
    </Modal>

    <div class="page-header-container">
      <div class="page-title-section">
        <span class="page-icon"><component :is="config.icon" /></span>
        <div>
          <h2 class="page-title">{{ config.title }}</h2>
          <p class="page-description">{{ config.description }}</p>
          <div class="breadcrumb-trail">
            <template v-for="(crumb, i) in config.breadcrumb" :key="i">
              <span>{{ crumb }}</span>
              <span v-if="i < config.breadcrumb.length - 1"> > </span>
            </template>
          </div>
        </div>
      </div>
      <div class="page-identifier">
        <span>Identificador: {{ config.identifier }}</span>
        <button class="info-btn" aria-label="Informações"><InfoIcon /></button>
      </div>
    </div>

    <div class="search-actions-bar">
      <div class="search-input-group">
        <SearchIcon />
        <input type="text" placeholder="Pesquisar..." />
      </div>
      <div class="action-buttons-group">
        <button class="btn btn-primary" @click="handleOpenNewModal"><PlusIcon /> Novo</button>
        <button class="btn" @click="handleClose"><CloseIcon /> Fechar</button>
      </div>
    </div>

    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>Ações</th>
            <th v-for="col in config.columns" :key="col">{{ col }}</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="config.data.length > 0">
            <tr v-for="(row, rowIndex) in config.data" :key="rowIndex">
              <td>
                <div class="action-button-group">
                  <button class="btn-icon" aria-label="Excluir" @click="handleAction('Excluir', row)"><TrashIcon /></button>
                  <button class="btn-icon" aria-label="Editar" @click="handleOpenEditModal(row)"><PencilIcon /></button>
                </div>
              </td>
              <td v-for="col in config.columns" :key="`${col}-${rowIndex}`">{{ row[col] || '' }}</td>
            </tr>
          </template>
          <tr v-else>
            <td :colspan="config.columns.length + 1" class="no-records">Não foram encontrados registros na pesquisa.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
