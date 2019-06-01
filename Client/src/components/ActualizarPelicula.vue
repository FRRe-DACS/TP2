<template>
  <div class="submitform" @submit="actualizar">
    <div v-if="!submitted">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input type="text" class="form-control" id="nombre" required v-model="pelicula.nombre" name="nombre">
        </div>
    
        <div class="form-group">
          <label for="genero">Genero</label>
          <input type="text" class="form-control" id="genero" required v-model="pelicula.genero" name="genero">
        </div>

        <div class="form-group">
          <label for="calificacion">Calificacion</label>
          <input type="number" class="form-control" id="calificacion" required v-model="pelicula.calificacion" name="calificacion">
        </div>

        <div class="form-group">
          <label for="tipo">Tipo</label>
          <input type="text" class="form-control" id="tipo" required v-model="pelicula.tipo" name="tipo">
        </div>

        <div class="form-group">
          <label for="sinopsis">Sinopsis</label>
          <input type="text" class="form-control" id="sinopsis" required v-model="pelicula.sinopsis" name="sinopsis">
        </div>
    
    
        <button v-on:click="actualizar" type="submit" class="btn btn-info">Aceptar</button>
    </div>
    
    <div v-else>
      <h4>Operacion exitosa</h4>
    </div>
  </div>
</template>

<script>
import http from "../http-common";
 
export default {
  name: "actualizar-pelicula",
  data() {
    return {
      pelicula:{}
    };
  },
  methods: {
    /* eslint-disable no-console */
    actualizar() {
      var data = {
        nombre: this.pelicula.nombre,
        genero: this.pelicula.genero,
        calificacion: this.pelicula.calificacion,
        tipo: this.pelicula.tipo,
        sinopsis: this.pelicula.sinopsis
      };
 
      http
        .put("/peliculas/" + this.$route.params.id, data)
        .then(response => {
          this.pelicula.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
 
      this.submitted = true;
      this.$router.push({
        name: 'peliculas'});
    },
    actualizarPelicula() {
      this.submitted = false;
      this.pelicula = {};
    },
    retrievePeliculas() {
      http
        .get("/peliculas/actualizar/" + this.$route.params.id)
        .then(response => {
          this.peliculas = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          /* eslint-disable no-console */
          console.log(e);
        });
    },
    mounted() {
    this.retrievePeliculas();
    }
    /* eslint-enable no-console */
  }
};
</script>
 
<style>
.submitform {
  max-width: 300px;
  margin: auto;
}
</style>
