<script setup lang="ts">
import { ref, watch } from 'vue';
import type { FormField, SingleFormField } from '@/types';

const props = defineProps<{
  fields: FormField[];
  initialData?: any;
}>();

const emit = defineEmits<{
  (e: 'submit', data: any): void;
  (e: 'cancel'): void;
}>();

const formData = ref<any>({});

const initializeForm = () => {
  const initialFormState: any = {};
  props.fields.forEach(field => {
    if (field.type === 'group') {
      field.fields.forEach(subField => {
        initialFormState[subField.name] = props.initialData?.[subField.label] ?? '';
      });
    } else {
      initialFormState[field.name] = props.initialData?.[(field as SingleFormField).label] ?? '';
    }
  });
  formData.value = initialFormState;
};

watch(() => props.initialData, initializeForm, { immediate: true });

const handleSubmit = () => {
  emit('submit', formData.value);
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="dynamic-form">
    <div class="form-fields">
      <template v-for="field in fields" :key="field.name">
        <div v-if="field.type === 'group'" class="form-group-inline">
          <div v-for="subField in field.fields" :key="subField.name" class="form-control">
            <label :for="subField.name">{{ subField.label }}</label>
            <input
              :type="subField.type"
              :id="subField.name"
              :name="subField.name"
              v-model="formData[subField.name]"
              :placeholder="subField.placeholder"
              :required="subField.required"
            />
          </div>
        </div>
        <div v-else class="form-control">
          <label :for="field.name">{{ (field as SingleFormField).label }}</label>
          <input
            :type="(field as SingleFormField).type"
            :id="field.name"
            :name="field.name"
            v-model="formData[field.name]"
            :placeholder="(field as SingleFormField).placeholder"
            :required="(field as SingleFormField).required"
          />
        </div>
      </template>
    </div>
    <div class="form-actions">
      <button type="button" class="btn" @click="$emit('cancel')">Cancelar</button>
      <button type="submit" class="btn btn-primary">Salvar</button>
    </div>
  </form>
</template>
