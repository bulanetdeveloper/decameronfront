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
      <h3 style="text-align: center;">Habitaciones Reservadas</h3>
      <br>
      <table style="width:600px; margin: auto;" class="table">
        <thead class="thead-dark">
          <tr>
            <th>Hab N°</th>
            <th>Piso</th>
            <th>Estado Hab</th>
            <th>Hotel</th>
            <th>Cliente</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="habitacion in habitaciones" :key="habitacion.Id">
            <td>{{ habitacion.numhab }}</td>
            <td>{{ habitacion.piso }}</td>
            <td>{{ habitacion.nombre }}</td>
            <td>{{ habitacion.hotel }}</td>
            <td>{{ habitacion.nombres }}  {{ habitacion.apellidos }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      habitaciones: []
    };
  },
  created() {
    this.fetchHabitaciones();
  },
  methods: {
    fetchHabitaciones() {
      axios.get('http://localhost:3000/decameron/API/get_all_habitacion_cliente.php')
        .then(response => {
          this.habitaciones = response.data;
        });
    },
  }
};
</script>

