<template>
  <div class="footer-contenedor">
    <div class="contenedor">
      <div class="logo">
        <a href="/">Bohify</a> 

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
          <a class="footer-link" href="#">Investors</a>
          <a class="footer-link" href="#">Vendors</a>
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
}
.contenedor {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  box-sizing: border-box;
  padding: 2rem;
}

.logo {
  color: #fff;
  font-size: 2rem;
  margin: 0 auto;
  
}
.footer-link {
  color: #fff;
  text-decoration: none;
  display: flex;
  gap: 30px;
  margin: 10px;
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
</style>