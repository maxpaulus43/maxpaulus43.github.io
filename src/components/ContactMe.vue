<template>
  <div>
    <div class="fixed inset-0 flex items-center justify-center z-20">
      <div
        class="fixed inset-0 bg-black opacity-25 cursor-pointer"
        @click="$emit('close')"
      ></div>
      <div class="fixed text-center shadow-lg bg-white p-2">
        <h2 class="h-3">Contact Me</h2>
        <div class="w-full flex h-10 justify-around max-w-sm mx-auto mt-8">
          <a href="https://linkedin.com/in/max-paulus-1b456aa8">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/maxpaulus43">
            <i class="fab fa-github"></i>
          </a>
          <a href="mailto:maxpaulus43@gmail.com">
            <i class="fa fa-envelope"></i>
          </a>
        </div>
        <form action="https://formspree.io/maxpaulus43@gmail.com" method="POST">
          <div>
            <label for="name">Full Name:</label>
          </div>
          <div>
            <input
              class="border-2 w-full py-2 px-4 leading-tight focus:outline-none focus:border-green-300"
              type="text"
              name="name"
              required
            />
          </div>
          <div>
            <label for="email">Email Address:</label>
          </div>
          <div>
            <input
              class="border-2 w-full py-2 px-4 leading-tight focus:outline-none focus:border-green-300"
              type="email"
              name="email"
              required
            />
          </div>
          <div>
            <label for="inline-username">Message:</label>
          </div>
          <div>
            <textarea
              class="border-2 w-full p-1 focus:outline-none focus:border-green-300"
              name="message"
              id="message"
              cols="30"
              rows="5"
              required
            ></textarea>
          </div>
          <div class="flex flex-row mt-2">
            <div
              class="bg-red-500 text-white font-bold py-2 px-4 flex-1 cursor-pointer"
              @click="$emit('close')"
            >
              Cancel
            </div>
            <button
              class="shadow bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 flex-1"
              type="submit"
            >
              Send
              <i class="fa fa-paper-plane ml-2"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

