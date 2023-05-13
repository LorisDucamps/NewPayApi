<template>
  <section class="ready">
    <Container>
      <div class="row">
        <div class="ready__lead">
          <h2>Ready to start?</h2>
        </div>
        <div class="ready__cta">
          <EmailInput />
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from "@/layouts/container/Container";
import EmailInput from "@/components/EmailInput";

export default {
  components: {
    Container,
    EmailInput,
  },
};
</script>