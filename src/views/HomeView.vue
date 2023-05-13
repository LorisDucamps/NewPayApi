<template>
  <Hero />
  <Partners />
  <Overview />
  <Features />
</template>

<script>
import Hero from "@/layouts/hero/Hero";
import Partners from "@/layouts/partners/Partners";
import Overview from "@/layouts/overview/Overview";
import Features from "@/layouts/features/Features";

export default {
  components: { Hero, Partners, Overview, Features },
};
</script>
