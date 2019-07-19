<template>
  <div class="layout">
    <header class="header">
      <g-link class="title-link" to="/">{{ $static.metaData.siteName }}</g-link>

      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/blog">Blog</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
        <g-link class="nav__link" to="/now">Now</g-link>
      </nav>
    </header>
    <slot/>
    <footer class="footer"></footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  display: flex;
  justify-content: space-around;
}

.layout {
  display: flex;
  flex-direction: column;
  max-width: 760px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}


/* Medium screens */
@media all and (max-width: 800px) {

  .header {
    flex-direction: column;
    align-items: stretch;
  }

  .title-link {
    align-self: center;
  }

  .nav {
    /* When on medium sized screens, we center it by evenly distributing empty space around items */
    margin-top: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
}

/* Small screens */
@media all and (max-width: 500px) {
  .nav {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
    align-items: center;
  }
}

</style>
