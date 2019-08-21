<template>
  <div class="flex flex-col items-center mt-3">
    <g-image
      alt="profile image"
      class="profile-image rounded-full shadow-lg md:shadow-2xl"
      src="~/assets/max_profile.png"
      width="500"
    />
    <div class="w-full h-12 flex justify-around max-w-sm mx-auto mt-8">
      <a href="https://linkedin.com/in/max-paulus-1b456aa8"><i class="fab fa-linkedin"></i></a>
      <a href="https://github.com/maxpaulus43"><i class="fab fa-github"></i></a>
      <a href="mailto:maxpaulus43@gmail.com"><i class="fa fa-envelope"></i></a>
    </div>
    <div>
      <h2>Introduction</h2>
      <p>
        Hello and welcome to my website! My name is Max. I'll be showing off a lot of stuff here, but I'm mostly a software developer.
        This website is a place to discover a little bit more about me. If you want to see some of my work, click
        <g-link to="/portfolio" class="link">here</g-link>. I'm attempting to start a blog which you can find
        <g-link to="/blog" class="link">here</g-link>. I'll constantly be updating this website so please come back to see the new features.
        Hopefully you enjoy what I've done here.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
