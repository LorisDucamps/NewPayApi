<template>
  <button class="button" v-if="!link" :class="type">
    <slot></slot>
  </button>
  <router-link class="button" v-else :to="to" :class="type">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>
