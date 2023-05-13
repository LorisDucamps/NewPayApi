<template>
  <nav>
    <ul>
      <li>
        <BaseButton link :class="type" to="/pricing">Pricing</BaseButton>
      </li>
      <li>
        <BaseButton link :class="type" to="/about">About</BaseButton>
      </li>
      <li>
        <BaseButton link :class="type" to="/contact">Contact</BaseButton>
      </li>
    </ul>
  </nav>
</template>

<script>
import BaseButton from "@/components/BaseButton";

export default {
  components: { BaseButton },
  props: {
    type: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
