<template>
  <div class="searchform">
    <h4>Buscar por Pelicula</h4>
    <div class="form-group">
      <input type="text" class="form-control" id="nombre" required v-model="nombre" name="nombre">
    </div>
 
    <div class="btn-group">
      <button v-on:click="buscarPeliculas" class="btn btn-info">Buscar</button>
    </div>
 
    <ul class="search-result">
      <li v-for="(pelicula, index) in peliculas" :key="index">
        <h6>{{pelicula.nombre}} ({{pelicula.genero}})</h6>
      </li>
    </ul>
  </div>
</template>
 
<script>
import http from "../http-common";
 
export default {
  name: "buscar-pelicula",
  data() {
    return {
      nombre: "",
      peliculas: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    buscarPeliculas() {
      http
        .get("/peliculas/" + this.nombre)
        .then(response => {
          this.peliculas = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  }
};
</script>
 
<style>
.searchform {
  max-width: 300px;
  margin: auto;
}
.search-result {
  margin-top: 20px;
  text-align: left;
}
</style>