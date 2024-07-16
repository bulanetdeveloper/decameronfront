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
    <h3 style="text-align: center;">Editar Habitación</h3>

    <form @submit.prevent="editHabitacion" style="width:500px; margin: auto;">
    <div class="form-group">
      <label for="nombre">N° Hab</label>
      <input type="text" class="form-control" id="nombre" v-model="numHab">
    </div>
    <div class="form-group">
        <label for="nombre">Piso:</label>
        <input type="text" class="form-control" id="acomodacion" v-model="piso" />
      </div>
      <div class="form-group">
        <label for="tipohabitacion">Tipo Habitacion/Acomodación:</label>
        <select class="custom-select" v-model="tipohabitacionId">
        <option :value="tipohabitacion.id" v-for="tipohabitacion in tipohabitaciones" :key="tipohabitacion.id">{{ tipohabitacion.nombre }}/{{ tipohabitacion.acomodacion }}</option>
      </select>
      </div>
      <div class="form-group">
          <label for="hotel">Hotel:</label>
          <select class="custom-select" v-model="hotelId">
          <option :value="hotel.id" v-for="hotel in hoteles" :key="hotel.id">{{ hotel.nombre }}-{{ hotel.ciudad }}</option>
        </select>
      </div>
      <div class="form-group">
          <label for="estado">Estado:</label>
          <select class="custom-select" v-model="estadoId">
          <option :value="estado.id" v-for="estado in estados" :key="estado.id">{{ estado.nombre }}</option>
        </select>
      </div>
    <br>
    <button type="submit" class="btn btn-primary">Guardar</button>
  </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
data() {
return {
  numHab: '',
  piso:'',
  tipohabitacionId:'',
  hotelId:'',
  estadoId:'',
  tipohabitaciones:[],
  hoteles:[],
  estados:[]
};
},
created() {
  this.fetchEstadoHabitaciones();
  this.fetchTipoHabitaciones();
  this.fetchHoteles();
  this.fetchHabitacion();
},
methods: {

  fetchEstadoHabitaciones() {
      axios.get('http://localhost:3000/decameron/API/get_all_estadohabitacion.php')
        .then(response => {
          this.estados = response.data;
        });
    },
  fetchHoteles() {
      axios.get('http://localhost:3000/decameron/API/get_all_hotel.php')
        .then(response => {
          this.hoteles = response.data;
        });
    },
fetchTipoHabitaciones() {
    axios.get('http://localhost:3000/decameron/API/get_all_tipohabitacion.php')
      .then(response => {
        this.tipohabitaciones = response.data;
      });
  },
fetchHabitacion() {
        axios.get(`http://localhost:3000/decameron/API/get_habitacion.php?Id=${this.$route.params.id}`)
          .then(response => {
            this.habitacion = response.data;
            this.numHab = this.habitacion.numhab;
            this.piso = this.habitacion.piso;
            this.tipohabitacionId = this.habitacion.tipohabitacionid;
            this.hotelId = this.habitacion.hotelid;
            this.estadoId = this.habitacion.estadoid;
          });
  },
editHabitacion() {
  axios.put('http://localhost:3000/decameron/API/update_habitacion.php?NumHab='+this.numHab + '&Piso=' + this.piso + '&TipoHabitacionId=' + this.tipohabitacionId + '&HotelId=' + this.hotelId + '&EstadoId=' + this.estadoId + '&Id=' + this.$route.params.id,  {
    id: this.$route.params.id,
    numhab: this.numHab,
    piso: this.piso,
    tipohabitacionid: this.tipohabitacionId,
    hotelid: this.hotelId,
    estadoid: this.estadoId

  })
  .then(() => {
    this.$router.push('/habitaciones');
  });
}
}
};
</script>