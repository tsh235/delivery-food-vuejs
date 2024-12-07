<template>
  <footer class="footer">
    <div class="container footer__container">
      <router-link class="footer__logo logo" to="/">
        <img class="logo__img" src="../assets/img/logo.svg" alt="logo" width="32" height="32">
        <p class="logo__text">Delivery Food</p>
      </router-link>

      <ul class="footer__nav nav">
        <li class="nav__item">
          <router-link class="nav__link" to="#!">Ресторанам</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="#!">Курьерам</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="#!">Пресс-центр</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="#!">Контакты</router-link>
        </li>
      </ul>

      <ul class="footer__social social">
        <li class="social__item">
          <router-link class="social__link" to="#!" aria-label="ссылка на instagram">
            <img class="social__img" src="../assets/img/insta.svg" alt="instagram">
          </router-link>
        </li>
        <li class="social__item">
          <router-link class="social__link" to="#!" aria-label="ссылка на facebook">
            <img class="social__img" src="../assets/img/fb.svg" alt="facebook">
          </router-link>
        </li>
        <li class="social__item">
          <router-link class="social__link" to="#!" aria-label="ссылка на vk">
            <img class="social__img" src="../assets/img/vk.svg" alt="vk">
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
  .footer {
    padding: 60px 0;
    background-color: var(--gray---gray-1);
  }
  .footer__container {
    display: flex;
    align-items: center;
    gap: 36px;
    flex-wrap: wrap;
  }
  .footer__nav {
    flex-grow: 1;
  }
  .nav {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
  }
  .nav__link {
    color: var(--gray---gray-8);
    outline: none;
  }
  .social {
    display: flex;
    align-items: center;
    gap: 21px;
  }
  .social__link {
    outline: none;
  }
</style>