<script setup lang="ts">
import { watch, onMounted, onUnmounted, ref } from 'vue';
import { CloseIcon } from '@/components/icons';
import { useClickOutside } from '@/composables/useClickOutside';

const props = defineProps<{
  isOpen: boolean;
  title: string;
}>();

const emit = defineEmits(['close']);

const modalPanelRef = ref<HTMLElement>();

useClickOutside(modalPanelRef, () => {
  emit('close');
});

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('close');
  }
};

watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
});

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = 'unset';
});
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal-backdrop">
      <div class="modal-panel" ref="modalPanelRef">
        <div class="modal-header">
          <h3 class="modal-title">{{ title }}</h3>
          <button class="modal-close-btn" @click="$emit('close')" aria-label="Fechar modal">
            <CloseIcon />
          </button>
        </div>
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>
