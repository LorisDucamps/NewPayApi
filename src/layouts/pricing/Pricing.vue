<template>
  <section class="pricing">
    <Container>
      <h1 class="h1--small">Pricing</h1>
      <div class="pricing__plan">
        <PricingItems
          :content="pricing"
          v-for="(pricing, index) in pricings"
          :key="index"
        />
      </div>
    </Container>
  </section>
</template>
<script>
import Container from "@/layouts/container/Container";
import PricingItems from "@/components/PricingItems";

export default {
  components: { Container, PricingItems },
  data() {
    return {
      pricings: [
        {
          id: 0,
          name: "Free Plan",
          description:
            "Build and test using our core set of products with up to 100 API requests",
          price: "$0.00",
          content: {
            transactions: {
              name: "Transactions",
              enabled: true,
            },
            auth: {
              name: "Auth",
              enabled: true,
            },
            identity: {
              name: "Identity",
              enabled: true,
            },
            investments: {
              name: "Investments",
              enabled: false,
            },
            assets: {
              name: "Assets",
              enabled: false,
            },
            liabilities: {
              name: "Liabilities",
              enabled: false,
            },
            income: {
              name: "Income",
              enabled: false,
            },
          },
          button: "Request Access",
        },
        {
          id: 1,
          name: "Basic Plan",
          description:
            "Launch your project with unlimited requests and no contractual minimums",
          price: "$249.00",
          content: {
            transactions: {
              name: "Transactions",
              enabled: true,
            },
            auth: {
              name: "Auth",
              enabled: true,
            },
            identity: {
              name: "Identity",
              enabled: true,
            },
            investments: {
              name: "Investments",
              enabled: true,
            },
            assets: {
              name: "Assets",
              enabled: true,
            },
            liabilities: {
              name: "Liabilities",
              enabled: false,
            },
            income: {
              name: "Income",
              enabled: false,
            },
          },
          button: "Request Access",
        },
        {
          id: 2,
          name: "Premium Plan",
          description:
            "Get tailored solutions, volume pricing, and dedicated support for your team",
          price: "$499.00",
          content: {
            transactions: {
              name: "Transactions",
              enabled: true,
            },
            auth: {
              name: "Auth",
              enabled: true,
            },
            identity: {
              name: "Identity",
              enabled: true,
            },
            investments: {
              name: "Investments",
              enabled: true,
            },
            assets: {
              name: "Assets",
              enabled: true,
            },
            liabilities: {
              name: "Liabilities",
              enabled: true,
            },
            income: {
              name: "Income",
              enabled: true,
            },
          },
          button: "Request Access",
        },
      ],
    };
  },
};
</script>
