<template>
  <div class="list row">
    <div href="#" class="col-md-6 text-info">
      <h4>Lista de Peliculas</h4>
      <ul class="list-group">
        <li class="list-group-item" v-for="(pelicula, index) in peliculas" :key="index">
          <router-link :to="{
            name: 'pelicula-detalles',
            params: { pelicula: pelicula, id: pelicula._id }
            }">
            <div style="color: #015d66" @click="$router.push('pelicula-detalles')"> {{pelicula.nombre}}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="col-md-6">
     <router-view @refreshData="refreshList"></router-view>
    </div>
  </div>
</template>
 
<script>
import http from "../http-common";

 
export default {
  name: "peliculas-list",
  data() {
    return {
      peliculas: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrievePeliculas() {
      http
        .get("/peliculas")
        .then(response => {
          this.peliculas = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          /* eslint-disable no-console */
          console.log(e);
        });
    },
    //esto es para probar sin la api
    refreshList() {
      this.retrievePeliculas();
    }
    /* eslint-enable no-console */
  },
  mounted() {
    this.retrievePeliculas();
  }
};
</script>
 
<style>
.list {
  text-align: left;
  max-width: 1140px;
  margin: auto;
}
</style>