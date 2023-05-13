<template>
  <footer class="footer">
    <Container>
      <div class="footer__inner">
        <Logo :imageSource="require('@/assets/images/logo/logo-light.svg')" />
        <Navigation type="button__link-footer" />
        <BaseSocial />
      </div>
    </Container>
  </footer>
</template>

<script>
import Container from "@/layouts/container/Container";
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation.vue'
import BaseSocial from '@/components/BaseSocial.vue';

export default {
  components: {
    Container,
    Logo,
    Navigation,
    BaseSocial
  }
}
</script>