<template>
  <div class="footer-contenedor">
    <div class="container">
      <div class="logo">
        <a class="decoration" href="/">Bohify</a>
      </div>
      <div class="footer-sites">
        <nav class="link-list">
          <h3>Company</h3>
          <a class="footer-link" href="#">About</a>
          <a class="footer-link" href="#">Jobs</a>
          <a class="footer-link" href="#">For the Record</a>
        </nav>
        <nav class="link-list">
          <h3>Communities</h3>
          <a class="footer-link" href="#">For Artist</a>
          <a class="footer-link" href="#">Developers</a>
          <a class="footer-link" href="#">Advertising</a>
        </nav>
        <nav class="link-list">
          <h3>Useful Links</h3>
          <a class="footer-link" href="#">Support</a>
          <a class="footer-link" href="#">Web Player</a>
          <a class="footer-link" href="#">Free Mobile App</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
    name: "footer"
}
</script>

<style lang="scss">
.footer-contenedor {
  background-color: black;
  padding: 2rem;

  .logo {
    color: #fff;
    font-size: 2rem;
    margin: 15px auto;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  .footer-link {
    color: #fff;
    display: flex;
    gap: 30px;
    margin: 10px;
    text-decoration: none;
  }
  .footer-link:hover {
    color: yellowgreen;
  }
  h3 {
    color: gray;
  }
  .footer-sites {
    display: flex;
    gap: 200px;
  }
}

@media (max-width: 800px) {
  .footer-contenedor {
    display: flex;
    .container {
      font-size: 1rem;
    }
    .footer-sites {
      gap: 10px;
    }
    .logo {
      display: none;
    }
  }
}
</style>