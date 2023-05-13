<template>
  <TheHeader />
  <slot></slot>
  <SignUp />
  <TheFooter />
</template>

<script>
import TheHeader from "@/layouts/header/TheHeader";
import SignUp from "@/layouts/signup/SignUp";
import TheFooter from "@/layouts/footer/TheFooter";

export default {
  components: { TheHeader, SignUp, TheFooter },
};
</script>
