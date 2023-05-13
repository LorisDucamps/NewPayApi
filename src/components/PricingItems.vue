<template>
  <div class="pricing__item">
    <h3>{{ content.name }}</h3>
    <p>{{ content.description }}</p>
    <h1 class="h1--small">{{ content.price }}</h1>
    <ul>
      <li :class="[content.content.transactions.enabled ? 'active' : '']">
        {{ content.content.transactions.name }}
      </li>
      <li :class="[content.content.auth.enabled ? 'active' : '']">
        {{ content.content.auth.name }}
      </li>
      <li :class="[content.content.identity.enabled ? 'active' : '']">
        {{ content.content.identity.name }}
      </li>
      <li :class="[content.content.investments.enabled ? 'active' : '']">
        {{ content.content.investments.name }}
      </li>
      <li :class="[content.content.assets.enabled ? 'active' : '']">
        {{ content.content.assets.name }}
      </li>
      <li :class="[content.content.liabilities.enabled ? 'active' : '']">
        {{ content.content.liabilities.name }}
      </li>
      <li :class="[content.content.income.enabled ? 'active' : '']">
        {{ content.content.income.name }}
      </li>
    </ul>
    <BaseButton type="button__secondary-dark">{{ content.button }}</BaseButton>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";

export default {
  props: ["content"],
  components: { BaseButton },
};
</script>
