<template>
  <transition name="sidebar">
    <section class="sidebar">
      <img
        @click="$emit('close')"
        :src="svgIcon"
        class="sidebar__icon"
        alt="icon burger"
      />
      <Navigation class="sidebar__navigation" type="button__link-footer" />
      <div class="actions">
        <BaseButton type="button__primary">Schedule a Demo</BaseButton>
      </div>
    </section>
  </transition>
</template>

<script>
import Navigation from "./Navigation.vue";
import BaseButton from "@/components/BaseButton";

export default {
  emits: ["close"],
  components: {
    Navigation,
    BaseButton,
  },
  data() {
    return {
      svgIcon: require("../assets/images/menu/close.svg"),
    };
  },
};
</script>
