<script setup>
  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue';
  import Modal from './components/Modal.vue';
  import { store } from './store/index.js';
</script>

<template>
  <Header @toggleModal="store.toggleModal(true)" />

  <main>
    <router-view></router-view>
  </main>

  <Footer />
  <Modal :isOpen="store.isOpen"  @toggleModal="store.toggleModal(false)" />
</template>

<style scoped>

</style>
