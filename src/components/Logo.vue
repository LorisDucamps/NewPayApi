<template>
  <div class="logo">
    <router-link to="/">
      <img :src="imageSource" alt="logo PayApi" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    imageSource: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
