<script setup>
  import {ref} from 'vue';
  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue';
  import Modal from './components/Modal.vue';

  const isOpen = ref(false);
</script>

<template>
  <Header @toggleModal="isOpen = !isOpen" />

  <main>
    <router-view></router-view>
  </main>

  <Footer />
  <Modal :isOpen="isOpen"  @toggleModal="isOpen = !isOpen" />
</template>

<style scoped>

</style>
