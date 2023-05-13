<template>
  <header class="header">
    <Container>
      <div class="header__inner">
        <Logo :imageSource="require('@/assets/images/logo/logo-dark.svg')" />
        <Navigation type="button__link-header" v-show="!mobile" />

        <img
          :src="svgIcon"
          @click="toggleMobileNav"
          class="header__icon"
          v-show="mobile"
          alt="icon burger"
        />

        <Sidebar @close="toggleMobileNav" v-show="mobileNav" />

        <div v-show="!mobile" class="actions">
          <BaseButton type="button__primary">Schedule a Demo</BaseButton>
        </div>
      </div>
    </Container>
  </header>
</template>

<script>
import Container from "@/layouts/container/Container";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import BaseButton from "@/components/BaseButton";

export default {
  components: { Container, Logo, Navigation, Sidebar, BaseButton },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: "",
      svgIcon: require("@/assets/images/menu/menu.svg"),
    };
  },

  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 767.98) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>
