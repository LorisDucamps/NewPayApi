<template>
  <section class="features">
    <Container>
      <div class="features__inner">
        <FeatureItems
          :content="feature"
          v-for="(feature, index) in features"
          :key="index"
        />
      </div>
    </Container>
  </section>
</template>
<script>
import Container from "@/layouts/container/Container";
import FeatureItems from "@/components/FeatureItems";

export default {
  props: ["content"],
  components: { Container, FeatureItems },
  data() {
    return {
      features: [
        {
          id: 0,
          title: "Personal Finances",
          description:
            "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ",
          idSprite: "#personal",
        },
        {
          id: 1,
          title: "Banking & Coverage",
          description:
            "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",
          idSprite: "#banking",
        },
        {
          id: 2,
          title: "Consumer Payments",
          description:
            "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",
          idSprite: "#consumer",
        },
      ],
    };
  },
};
</script>
