<template>
  <ul class="partners__image">
    <li>
      <svg width="129" height="17">
        <use
          v-bind="{
            'xlink:href':
              require('@/assets/images/company/sprite-company.svg') + '#tesla',
          }"
        ></use>
      </svg>
    </li>
    <li>
      <svg width="145" height="31">
        <use
          v-bind="{
            'xlink:href':
              require('@/assets/images/company/sprite-company.svg') +
              '#microsoft',
          }"
        ></use>
      </svg>
    </li>
    <li>
      <svg width="140" height="27">
        <use
          v-bind="{
            'xlink:href':
              require('@/assets/images/company/sprite-company.svg') + '#hp',
          }"
        ></use>
      </svg>
    </li>
    <li>
      <svg width="131" height="17">
        <use
          v-bind="{
            'xlink:href':
              require('@/assets/images/company/sprite-company.svg') + '#oracle',
          }"
        ></use>
      </svg>
    </li>
    <li>
      <svg width="96" height="33">
        <use
          v-bind="{
            'xlink:href':
              require('@/assets/images/company/sprite-company.svg') + '#google',
          }"
        ></use>
      </svg>
    </li>
    <li>
      <svg width="137" height="26">
        <use
          v-bind="{
            'xlink:href':
              require('@/assets/images/company/sprite-company.svg') + '#nvidia',
          }"
        ></use>
      </svg>
    </li>
  </ul>
</template>
