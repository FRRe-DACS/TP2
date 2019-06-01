<template>
    <div v-if="this.pelicula">
        <h4>Detalles</h4>
        <div>
        <label> </label> {{this.pelicula.imagen}}
        </div>
        <div>
        <label> Nombre: </label> {{this.pelicula.nombre}}
        </div>
        <div>
        <label> Genero: </label> {{this.pelicula.genero}}
        </div>
        <div>
        <label> Calificación: </label> {{this.pelicula.calificacion}}
        </div>
        <div>
        <label> Tipo: </label> {{this.pelicula.tipo}}
        </div>
        <div>
        <h4>SINOPSIS</h4>
        <label> </label> {{this.pelicula.sinopsis}}
        </div>

        <span class="btn btn-danger" v-on:click="eliminarPelicula()">Eliminar</span>
        <span class="btn btn-info" v-on:click="actualizarPelicula(pelicula._id)">Actualizar</span>
   </div>
  <div v-else>
    <br/>
    <p>Por favor seleccione una pelicula...</p>
  </div>
</template>

<script>
import http from "../http-common";
 
export default {
  name: "pelicula",
  props: ["pelicula"],
  methods: {
       eliminarPelicula() {
      http
        .delete("/peliculas/" + this.pelicula._id)
        .then(response => {
          // eslint-disable-next-line no-console
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push('/');
        })
        .catch(e => {
          /* eslint-disable no-console */
          console.log(e);
        });
    },
    actualizarPelicula(peliculaID) {
      this.$router.push({
        name: 'actualizar',
        params: { id: peliculaID}
      });
    }
  }
};
</script>



