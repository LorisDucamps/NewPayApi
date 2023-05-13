<template>
  <section class="partners">
    <Container>
      <div class="partners__inner">
        <div class="partners__lead">
          <h2>Who we work with</h2>
          <p>
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <div class="actions">
            <BaseButton
              link
              type="button__secondary-light button__link-button"
              to="/about"
              >About Us
            </BaseButton>
          </div>
        </div>
        <PartnersList />
      </div>
    </Container>
  </section>
</template>
<script>
import Container from "@/layouts/container/Container";
import PartnersList from "@/components/PartnersList";
import BaseButton from "@/components/BaseButton";

export default {
  components: { Container, PartnersList, BaseButton },
};
</script>
