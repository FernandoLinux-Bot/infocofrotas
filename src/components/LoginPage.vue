<script setup lang="ts">
import { ref } from 'vue';
import { PlayIcon } from '@/components/icons';

const emit = defineEmits(['login-success']);

const cpf = ref('');
const password = ref('');
const error = ref('');

const handleSubmit = () => {
  error.value = '';
  if (cpf.value === '08050464539' && password.value === 'admin123') {
    emit('login-success');
  } else {
    error.value = 'CPF ou senha inválidos.';
  }
};
</script>

<template>
  <div class="login-container">
    <div class="login-panel">
      <div class="login-header">
        <PlayIcon />
        <h1>Sistema de Frotas</h1>
        <p>MUNICÍPIO DE IBICARAÍ</p>
      </div>
      <form @submit.prevent="handleSubmit" class="login-form">
        <p v-if="error" class="login-error">{{ error }}</p>
        <div class="form-control">
          <label for="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            v-model="cpf"
            placeholder="Digite seu CPF"
            required
          />
        </div>
        <div class="form-control">
          <label for="password">Senha</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Digite sua senha"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary btn-full">Entrar</button>
      </form>
    </div>
  </div>
</template>
