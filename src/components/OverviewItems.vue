<template>
  <div class="overview__items">
    <div class="overview__items__inner">
      <div class="overview__items__pictures">
        <!-- IMAGE ONE -->
        <picture class="overview__items__image">
          <!-- DESKTOP -->
          <source
            media="(min-width: 992px)"
            :srcset="`${content.images.imgDesktop} 1x, ${content.images.imgDesktop2x} 2x`"
            type="image/png"
            :alt="content.images.imgDesktop"
          />

          <!-- TABLET -->
          <source
            media="(min-width: 768px)"
            :srcset="`${content.images.imgTablet} 1x, ${content.images.imgTablet2x} 2x`"
            type="image/png"
            :alt="content.images.imgTablet"
          />

          <source
            media="(min-width: 320px)"
            :srcset="`${content.images.imgMobile} 1x, ${content.images.imgMobile2x} 2x`"
            type="image/png"
            :alt="content.images.imgMobile"
          />

          <img
            :src="content.images.imgDesktop"
            :alt="content.images.imgDesktop"
          />
        </picture>

        <!-- IMAGE TWO -->
        <picture
          v-if="content.doubleImages"
          class="overview__items__image overview__items__image__last"
        >
          <!-- DESKTOP -->
          <source
            media="(min-width: 992px)"
            :srcset="`${content.imagesTwo.imgDesktop} 1x, ${content.imagesTwo.imgDesktop2x} 2x`"
            type="image/png"
            :alt="content.imagesTwo.imgDesktop"
          />

          <!-- TABLET -->
          <source
            media="(min-width: 768px)"
            :srcset="`${content.imagesTwo.imgTablet} 1x, ${content.imagesTwo.imgTablet2x} 2x`"
            type="image/png"
            :alt="content.imagesTwo.imgTablet"
          />

          <source
            media="(min-width: 320px)"
            :srcset="`${content.imagesTwo.imgMobile} 1x, ${content.imagesTwo.imgMobile2x} 2x`"
            type="image/png"
            :alt="content.imagesTwo.imgMobile"
          />

          <img
            :src="content.imagesTwo.imgDesktop"
            :alt="content.imagesTwo.imgDesktop"
          />
        </picture>
      </div>

      <div class="overview__items__lead">
        <h2>{{ content.title }}</h2>
        <p>{{ content.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"],
};
</script>
