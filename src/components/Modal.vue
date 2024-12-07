<template>
  <div class="modal-overlay" :class="{open: isOpen}" @click.self="closeModal()">
    <div class="modal cart">
      <div class="cart__header">
        <h2 class="cart__title">Корзина</h2>
        <button class="cart__close" aria-label="Закрыть модальное окно" @click="closeModal()">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0035 13L25.3506 3.65245C25.6077 3.39513 25.7496 3.05184 25.75 2.68578C25.75 2.31952 25.6081 1.97582 25.3506 1.71891L24.5315 0.900011C24.274 0.642084 23.9307 0.500824 23.5642 0.500824C23.1984 0.500824 22.8551 0.642084 22.5976 0.900011L13.2504 10.247L3.90285 0.900011C3.64573 0.642084 3.30224 0.500824 2.93598 0.500824C2.57012 0.500824 2.22663 0.642084 1.96951 0.900011L1.15 1.71891C0.616667 2.25225 0.616667 3.11973 1.15 3.65245L10.4974 13L1.15 22.3472C0.892683 22.6049 0.751016 22.9482 0.751016 23.3142C0.751016 23.6803 0.892683 24.0236 1.15 24.2811L1.96931 25.1C2.22642 25.3577 2.57012 25.4992 2.93577 25.4992C3.30203 25.4992 3.64553 25.3577 3.90264 25.1L13.2502 15.7529L22.5974 25.1C22.8549 25.3577 23.1982 25.4992 23.564 25.4992H23.5644C23.9305 25.4992 24.2738 25.3577 24.5313 25.1L25.3504 24.2811C25.6075 24.0238 25.7494 23.6803 25.7494 23.3142C25.7494 22.9482 25.6075 22.6049 25.3504 22.3474L16.0035 13Z" fill="currentColor"/>
          </svg>            
        </button>
      </div>
      <ul class="cart__body cart-list">
        <li class="cart-list__item">
          <p class="cart-list__title">Ролл угорь стандарт</p>
          <div class="cart-list__controls">
            <p class="cart-list__price">250 ₽</p>
            <div class="cart-list__btns">
              <button class="cart-list__btn btn btn-outline minus">-</button>
              <span class="cart-list__count">1</span>
              <button class="cart-list__btn btn btn-outline plus">+</button>
            </div>
          </div>
        </li>
        <li class="cart-list__item">
          <p class="cart-list__title">Ролл угорь стандарт</p>
          <div class="cart-list__controls">
            <p class="cart-list__price">250 ₽</p>
            <div class="cart-list__btns">
              <button class="cart-list__btn btn btn-outline minus">-</button>
              <span class="cart-list__count">1</span>
              <button class="cart-list__btn btn btn-outline plus">+</button>
            </div>
          </div>
        </li>
        <li class="cart-list__item">
          <p class="cart-list__title">Ролл угорь стандарт</p>
          <div class="cart-list__controls">
            <p class="cart-list__price">250 ₽</p>
            <div class="cart-list__btns">
              <button class="cart-list__btn btn btn-outline minus">-</button>
              <span class="cart-list__count">1</span>
              <button class="cart-list__btn btn btn-outline plus">+</button>
            </div>
          </div>
        </li>
      </ul>
      <div class="cart__footer">
        <p class="cart__price">1250 ₽</p>
        <div class="cart__btns">
          <button class="cart__order btn btn-fill">Оформить заказ</button>
          <button class="cart__cancel btn btn-outline" @click="closeModal()">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const {isOpen} = defineProps({isOpen: Boolean});
  const emit = defineEmits(['toggleModal']);
  const closeModal = () => emit('toggleModal');
</script>

<style scoped>
  .modal-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 99;
    display: none;
    padding: 10px;
    overflow-y: auto;
  }
  .modal-overlay.open {
    display: flex;
  }
  .modal {
    margin: auto;
    max-width: 780px;
    width: 100%;
    padding: 40px 45px;
    background-color: var(--gray---gray-1);
    border-radius: 5px;
  }
  .cart__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }
  .cart__title {
    font-weight: 700;
    font-size: 36px;
    color: var(--gray---gray-10);
  }
  .cart__close {
    border: none;
    background-color: transparent;
    outline: none;
  }
  .cart__close:hover,
  .cart__close:focus-visible {
    opacity: .6;
    transform: rotate(-90deg);
  }
  .cart__body {
    margin-bottom: 50px;
  }
  .cart__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }
  .cart__price {
    padding: 15px 20px;
    border-radius: 5px;
    background-color: var(--gray---gray-9);
    font-weight: 700;
    font-size: 20px;
    color: var(--gray---gray-2);
  }
  .cart__btns {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .cart-list__item {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--gray---gray-5);
  }
  .cart-list__item:not(:last-child) {
    margin-bottom: 10px;
  }
  .cart-list__title {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.77778;
    color: var(--gray---gray-10);
  }
  .cart-list__controls {
    display: flex;
    align-items: center;
    gap: 46px;
  }
  .cart-list__price {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.6;
    color: var(--gray---gray-10);
  }
  .cart-list__btns {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .cart-list__btn {
    width: 36px;
    height: 32px;
    padding: 5px 16px;
    color: #40A9FF;
    border-color: #40A9FF;
  }
  .cart-list__count {
    width: 44px;
    display: flex;
    justify-content: center;
  }
</style>