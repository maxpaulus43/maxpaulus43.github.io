<template>
  <div>
    <h2>Contact Me</h2>

 <!-- action="https://formspree.io/maxpaulus43@gmail.com"  -->
    <form name="contact-me" method="POST" data-netlify="true">
      <div class="md:flex md:justify-start md:items-center mb-3">
        <div class="md:w-1/6">
          <label
            class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >Full Name</label>
        </div>
        <div class="md:w-2/3">
          <input
            class="border-2 w-full py-2 px-4 leading-tight focus:outline-none focus:border-green-300"
            type="text"
            name="name"
            required
          />
        </div>
      </div>
      <div class="md:flex md:items-start mb-3">
        <div class="md:w-1/6">
          <label
            class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >Message</label>
        </div>
        <div class="md:w-2/3">
          <textarea
            class="border-2 w-full p-1 focus:outline-none focus:border-green-300"
            name="message"
            id="message"
            cols="30"
            rows="5"
            required
          ></textarea>
        </div>
      </div>
      <div class="md:flex md:justify-center">
        <div></div>
        <div class="md:w-2/3">
          <button
            class="shadow bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4"
            type="submit"
          >
            Send
            <i class="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

