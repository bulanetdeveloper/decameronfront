<template>
  <div>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link"><router-link to="/home">Home</router-link><span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Geolocalizaciones
                    </a>
                    <div class="dropdown-menu">
                    <a class="dropdown-item"><router-link to="/regiones">Regiones</router-link></a>
                    <a class="dropdown-item"><router-link to="/ciudades">Ciudades</router-link></a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item"><router-link to="/tipodocumentos">Tipos de Documentos</router-link></a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><router-link to="/hoteles">Red de Hoteles</router-link></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Habitaciones
                    </a>
                    <div class="dropdown-menu">
                    <a class="dropdown-item"><router-link to="/tipohabitaciones">Tipos de Habitación</router-link></a>
                    <a class="dropdown-item"><router-link to="/estadohabitaciones">Estado de Habitación</router-link></a>
                    <a class="dropdown-item"><router-link to="/habitaciones">Registro de Habitaciones</router-link></a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Reservaciones
                    </a>
                    <div class="dropdown-menu">
                    <a class="dropdown-item"><router-link to="/cliente">Nuevo Cliente</router-link></a>
                    <a class="dropdown-item"><router-link to="/editarcliente">Edición Datos Cliente</router-link></a>
                    <a class="dropdown-item"><router-link to="/clientereserva">Clientes Registrados</router-link></a>
                    <a class="dropdown-item"><router-link to="/listareservas">Habitaciones Reservadas</router-link></a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Usuarios
                    </a>
                    <div class="dropdown-menu">
                    <a class="dropdown-item"><router-link to="/usuarios">Nueva Cuenta</router-link></a>
                    <a class="dropdown-item"><router-link to="/cambiarpass">Cambio de Password</router-link></a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><router-link to="/">Cerrar Sesión</router-link><span class="sr-only">(current)</span></a>
                </li>
            
                </ul>
            </div>
    </nav>
   </div>
    <br>
    <h3 style="text-align: center;">Eliminar Tipo Habitación</h3>
    <h4 style="text-align: center;">Desea Eliminar el Registro?</h4>
    <br>
    <form @submit.prevent="deleteTipoHabitacion" style="width:500px; margin: auto;">
      <div class="form-group">
          <p>ID: {{ tipohabitacion.id }}</p>
          <p>Nombre: {{ tipohabitacion.nombre }}</p>
          <p>Acomodación: {{ tipohabitacion.acomodacion }}</p>
          <br>
          <button type="submit" class="btn btn-primary">Eliminar</button>
          <br>
          <br>
          <router-link to="/tipohabitaciones">Regresar a la lista</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
data() {
  return {
    tipohabitacion: {}
  };
},
created() {
  this.fetchTipoHabitacion();
},
methods: {
  fetchTipoHabitacion() {
    axios.get(`http://localhost:3000/decameron/API/get_tipohabitacion.php?Id=${this.$route.params.id}`)
      .then(response => {
        this.tipohabitacion = response.data;
      });
  },
  deleteTipoHabitacion() {
      axios.delete(`http://localhost:3000/decameron/API/delete_tipohabitacion.php?Id=${this.$route.params.id}`)
        .then(() => {
          this.$router.push('/tipohabitaciones');
        });
    }

}
};
</script>
