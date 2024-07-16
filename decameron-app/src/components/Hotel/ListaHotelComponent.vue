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
                    <a class="dropdown-item" href="#">Habitaciones Reservadas</a>
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
      <h3 style="text-align: center;">Hoteles</h3>
      <br>
      <br>
      <p style="margin-left: 120px;"><a><router-link to="/hoteles/nuevohotel">Crear Nuevo Registro</router-link></a></p>
      <table style="width:1300px; margin: auto;" class="table">
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Telefono</th>
            <th>Región</th>
            <th>Ciudad</th>
            <th>N° Habs</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="hotel in hoteles" :key="hotel.Id">
            <td>{{ hotel.id }}</td>
            <td>{{ hotel.nombre }}</td>
            <td>{{ hotel.direccion }}</td>
            <td>{{ hotel.telefono }}</td>
            <td>{{ hotel.region }}</td>
            <td>{{ hotel.ciudad }}</td>
            <td>{{ hotel.canthab }}</td>
            <td><a :href="'/#/hoteles/editarhotel/' + hotel.id">Editar</a></td>
            <td><a :href="'/#/hoteles/eliminarhotel/' + hotel.id">Eliminar</a></td>
            <td><a :href="'/#/hoteles/detallehotel/' + hotel.id">Detalle</a></td>
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
        hoteles: []
      };
    },
    created() {
      this.fetchHoteles();
    },
    methods: {
      fetchHoteles() {
        axios.get('http://localhost:3000/decameron/API/get_all_hotel.php')
          .then(response => {
            this.hoteles = response.data;
          });
      },
    }
  };
</script>



