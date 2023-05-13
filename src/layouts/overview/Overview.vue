<template>
  <section class="overview">
    <Container>
      <OverviewItems
        :content="overview"
        v-for="(overview, index) in overview"
        :key="index"
      />
    </Container>
  </section>
</template>

<script>
import Container from "@/layouts/container/Container";
import OverviewItems from "@/components/OverviewItems";

export default {
  components: {
    Container,
    OverviewItems,
  },
  data() {
    return {
      overview: [
        {
          id: 0,
          title: "Easy to implement",
          description:
            "Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.",
          doubleImages: false,
          images: {
            imgDesktop: require("@/assets/images/overview/code-desktop.png"),
            imgDesktop2x: require("@/assets/images/overview/code-desktop-2x.png"),
            imgTablet: require("@/assets/images/overview/code-tablet.png"),
            imgTablet2x: require("@/assets/images/overview/code-tablet-2x.png"),
            imgMobile: require("@/assets/images/overview/code-mobile.png"),
            imgMobile2x: require("@/assets/images/overview/code-mobile-2x.png"),
          },
        },
        {
          id: 1,
          title: "Simple UI & UX",
          description:
            "Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.",
          doubleImages: true,
          images: {
            imgDesktop: require("@/assets/images/overview/phone-desktop-left.png"),
            imgDesktop2x: require("@/assets/images/overview/phone-desktop-left-2x.png"),
            imgTablet: require("@/assets/images/overview/phone-tablet-left.png"),
            imgTablet2x: require("@/assets/images/overview/phone-tablet-left-2x.png"),
            imgMobile: require("@/assets/images/overview/phone-mobile-left.png"),
            imgMobile2x: require("@/assets/images/overview/phone-mobile-left-2x.png"),
          },
          imagesTwo: {
            imgDesktop: require("@/assets/images/overview/phone-desktop-right.png"),
            imgDesktop2x: require("@/assets/images/overview/phone-desktop-right-2x.png"),
            imgTablet: require("@/assets/images/overview/phone-tablet-right.png"),
            imgTablet2x: require("@/assets/images/overview/phone-tablet-right-2x.png"),
            imgMobile: require("@/assets/images/overview/phone-mobile-right.png"),
            imgMobile2x: require("@/assets/images/overview/phone-mobile-right-2x.png"),
          },
        },
      ],
    };
  },
};
</script>
