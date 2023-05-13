<template v-if="Component">
  <router-view v-slot="{ Component, route }">
    <Layout>
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
    </Layout>
  </router-view>
</template>

<script>
import Layout from "@/layouts/Layout";

export default {
  components: {
    Layout,
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
