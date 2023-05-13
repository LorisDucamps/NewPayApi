<template>
  <section class="hero">
    <Container>
      <div class="hero__inner">
        <div class="hero__lead">
          <h1>Start building with our APIs for absolutely free.</h1>
          <EmailInput />
          <p>
            Have any questions ?
            <BaseButton link type="button__link-text" to="/contact"
              >Contact Us
            </BaseButton>
          </p>
        </div>
        <picture class="hero__image">
          <!-- DESKTOP -->
          <source
            media="(min-width: 992px)"
            srcset="
              @/assets/images/phone/phone-desktop.png    1x,
              @/assets/images/phone/phone-desktop-2x.png 2x
            "
            type="image/png"
            alt="phone"
          />

          <!-- TABLET -->
          <source
            media="(min-width: 768px)"
            srcset="
              @/assets/images/phone/phone-tablet.png    1x,
              @/assets/images/phone/phone-tablet-2x.png 2x
            "
            type="image/png"
            alt="phone"
          />

          <source
            media="(min-width: 320px)"
            srcset="
              @/assets/images/phone/phone-mobile.png    1x,
              @/assets/images/phone/phone-mobile-2x.png 2x
            "
            type="image/png"
            alt="phone"
          />

          <img src="@/assets/images/phone/phone-desktop.png" alt="Phone" />
        </picture>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from "@/layouts/container/Container";
import EmailInput from "@/components/EmailInput";
import BaseButton from "@/components/BaseButton";

export default {
  components: { Container, EmailInput, BaseButton },
};
</script>
