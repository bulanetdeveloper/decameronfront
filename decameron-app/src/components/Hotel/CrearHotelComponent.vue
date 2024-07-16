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
      <h3 style="text-align: center;">Crear Hotel</h3>
      <br>
      <form @submit.prevent="createHotel" style="width:500px; margin: auto;">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input type="text" class="form-control" id="nombre" v-model="nombre">
        </div>
        <div class="form-group">
          <label for="direccion">Dirección:</label>
          <input type="text" class="form-control" id="direccion" v-model="direccion" />
        </div>
        <div class="form-group">
        <label for="telefono">Telefono:</label>
          <input type="text" class="form-control" id="telefono" v-model="telefono" />
        </div>
        <div class="form-group">
          <label for="region">Ciudad:</label>
          <select class="custom-select" v-model="ciudadId">
          <option :value="ciudad.id" v-for="ciudad in ciudades" :key="ciudad.id">{{ ciudad.nombre }}</option>
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
        nombre: '',
        direccion: '',
        telefono: '',
        ciudadId: '',
        regionId:'',
        ciudad:{},
        ciudades: []
      };
    },  
     created() {
        this.fetchCiudades();
      },
    methods: {
      createHotel() {

        axios.get(`http://localhost:3000/decameron/API/get_ciudad.php?Id=${this.ciudadId}`)
        .then(response => {
          this.ciudad = response.data;
          this.regionId = this.ciudad.regionid;
          console.log('http://localhost:3000/decameron/API/create_hotel.php?Nombre='+ this.nombre +'&Direccion='+ this.direccion +'&Telefono='+ this.telefono +'&CiudadId='+ this.ciudadId +'&RegionId='+ this.regionId +'&CantHab=0')

   
            axios.post('http://localhost:3000/decameron/API/create_hotel.php?Nombre='+ this.nombre +'&Direccion='+ this.direccion +'&Telefono='+ this.telefono +'&CiudadId='+ this.ciudadId +'&RegionId='+ this.regionId +'&CantHab=0', {
            nombre: this.nombre,
            direcion:this.direccion,
            telefono:this.telefono,
            ciudadId:this.ciudadId,
            regionId: this.regionId,
            cantHab:'0'
          })
          .then(() => {
            this.$router.push('/hoteles');
          });

        });

        
      },
      fetchCiudades() {
          axios.get('http://localhost:3000/decameron/API/get_all_ciudad.php')
            .then(response => {
              this.ciudades = response.data;
            });
        },
    }
  };
  </script>