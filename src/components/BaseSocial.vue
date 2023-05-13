<template>
  <div class="socials">
    <ul>
      <li>
        <BaseButton class="button__social">
          <svg class="icon">
            <use
              v-bind="{
                'xlink:href':
                  require('../assets/images/socials/sprite-socials.svg') +
                  '#facebook',
              }"
            ></use>
          </svg>
        </BaseButton>
      </li>
      <li>
        <BaseButton class="button__social">
          <svg class="icon">
            <use
              v-bind="{
                'xlink:href':
                  require('../assets/images/socials/sprite-socials.svg') +
                  '#twitter',
              }"
            ></use>
          </svg>
        </BaseButton>
      </li>
      <li>
        <BaseButton class="button__social">
          <svg class="icon">
            <use
              v-bind="{
                'xlink:href':
                  require('../assets/images/socials/sprite-socials.svg') +
                  '#linkedin',
              }"
            ></use>
          </svg>
        </BaseButton>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";

export default {
  components: { BaseButton },
};
</script>
