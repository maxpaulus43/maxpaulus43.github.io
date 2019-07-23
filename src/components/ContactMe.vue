<template>
  <div>
    <h2>Contact Me</h2>
    <form
      action="https://formspree.io/maxpaulus43@gmail.com"
      method="POST"
      class="contact-me-form flex column"
    >
      <!-- Include a name-attribute in all form elements (i.e. <input>, <select>, and <textarea>) to receive the submission data. -->
      <div class="form-row flex column">
        <label for="name">Your Name:</label>
        <input type="text" name="name" placeholder="Sweet Name!" required />
      </div>

      <div class="form-row flex column">
        <label for="message">Your Message:</label>
        <textarea
          name="message"
          id="contact-me-message"
          cols="30"
          rows="5"
          placeholder="I'll get back to you as soon as I can!"
          required
        />
      </div>
      <button class="send-button">Contact Max</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-me-form {
  max-width: 400px;
  margin: 0 auto;
}
.form-row {
  margin-bottom: 10px;

  input, textarea {
    border: 1px solid gray;
    border-radius: 5px;
  }
}
.send-button {
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: lightgray;

    &:hover {
        box-shadow: 0 0 4px lightgray;
    }
}
</style>
