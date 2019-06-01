<template>
  <div id="app" class="container-fluid" >
    <div class="site-info p-3 mb-2 bg-info text-white">
      <h1>Cines de la costa CENTENARIO</h1>
      <h3>PELICULAS EN CARTELERA</h3>
    </div>
    <nav>
      <router-link class="btn btn-outline-info" to="/">Peliculas</router-link>
      <router-link class="btn btn-outline-info" to="/agregar">Agregar</router-link>
      <router-link class="btn btn-outline-info" to="/buscar">Buscar</router-link>
    </nav>
    <br/>
    <router-view/>
  </div>
</template>
 
<script>
export default {
  name: "app"
};
</script>
 
<style>
.site-info {
  color: orange;
  margin-bottom: 20px;
}
 
.btn-primary {
  margin-right: 5px;
}
 
.container-fluid {
  text-align: center;
}
</style>