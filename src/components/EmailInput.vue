<template>
  <VeeForm
    class="input"
    :validation-schema="schema"
    @submit="onSubmit"
    @invalid-submit="onInvalidSubmit"
    autocomplete="off"
    :class="[reg_error ? 'error' : '']"
  >
    <VeeField
      name="email"
      type="text"
      class="input__email"
      placeholder="Enter email address"
    />
    <BaseButton type="button__primary" :disabled="reg_in_submission"
      >Schedule a Demo
    </BaseButton>
    <p v-if="reg_show_alert" class="message message__success">
      {{ reg_alert_msg }}
    </p>
    <ErrorMessage class="message message__error" name="email" as="p" />
  </VeeForm>
</template>

<script>
import BaseButton from "@/components/BaseButton";

export default {
  components: { BaseButton },
  data() {
    return {
      schema: {
        email: "required|min:3|max:100|email",
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_msg: "",
      reg_error: false,
    };
  },
  methods: {
    onInvalidSubmit({ values, errors }) {
      console.log(values);
      console.log(errors);

      if (errors) {
        this.reg_error = true;
      }
    },
    onSubmit(event) {
      this.reg_show_alert = true;
      this.reg_in_submission = true;
      this.reg_error = false;
      this.reg_alert_msg = "Your email has been taken into account !";
      console.log(event);
    },
  },
};
</script>
