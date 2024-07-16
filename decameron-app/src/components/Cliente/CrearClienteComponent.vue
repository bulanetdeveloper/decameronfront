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
      <h3 style="text-align: center;">Registro de Clientes</h3>
      <br>
      <form @submit.prevent="createCliente" style="width:500px; margin: auto;">
      
        <div class="form-group">
            <label for="tipohabitacion">Tipo Documento:</label>
            <select class="custom-select" v-model="tipodocumentoId">
            <option :value="tipodocumento.id" v-for="tipodocumento in tipodocumentos" :key="tipodocumento.id">{{ tipodocumento.nombre }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="nombre">N° Documento:</label>
          <input type="text" class="form-control" id="numdoc" v-model="numdoc" />
        </div>
        <div class="form-group">
          <label for="nombre">Nombres:</label>
          <input type="text" class="form-control" id="numdoc" v-model="nombres" />
        </div>
        <div class="form-group">
          <label for="nombre">Apellidos:</label>
          <input type="text" class="form-control" id="numdoc" v-model="apellidos" />
        </div>
        <div class="form-group">
          <label for="nombre">Telefono:</label>
          <input type="text" class="form-control" id="numdoc" v-model="telefono" />
        </div>
        <div class="form-group">
        <label for="nombre">Email:</label>
          <input type="text" class="form-control" id="numdoc" v-model="email" />
        </div>
        <div class="form-group">
        <label for="hotel">Hotel:</label>
          <select class="custom-select" v-model="hotelId">
            <option :value="hotel.id" v-for="hotel in hoteles" :key="hotel.id">{{ hotel.nombre }}-{{ hotel.ciudad }}</option>
          </select>
        </div>
        <div class="form-group">
        <label for="tipohabitaciones">Tipo Habitacion/Acomodación:</label>
          <select class="custom-select" v-model="tipohabitacionId">
            <option :value="tipohabitacion.id" v-for="tipohabitacion in tipohabitaciones" :key="tipohabitacion.id">{{ tipohabitacion.nombre }}/{{ tipohabitacion.acomodacion }}</option>
          </select>
          <br>
          <a href="#/cliente" @click="fetchHabitaciones">Buscar Habitaciones</a>
        </div>
        <div class="form-group">
        <label for="habitaciones">Habitaciones Disponibles:</label>
        <select class="custom-select" v-model="habitacionId">
            <option :value="habitacion.id" v-for="habitacion in habitaciones" :key="habitacion.id">{{ habitacion.numhab }}</option>
          </select>
        </div>
      <br>
      <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
    <br>
    <br>
    <br>
    </div>
  </template>
  <script>
  import axios from 'axios';
  
  export default {
  data() {
    return {

      nombres:'',
      apellidos:'',
      telefono:'',
      email:'',
      numdoc:'',
      tipodocumentoId:'',
      hotelId:'',
      habitacionId:'',
      tipohabitacionId:'',
      clienteId:'',
      cliente:{},
      tipohabitaciones:[],
      hoteles:[],
      habitaciones:[],
      tipodocumentos:[]

    };
  },
  created() {
      this.fetchTipoHabitaciones();
      this.fetchHoteles();
      this.fetchTipoDocumentos();
  },
  methods: {
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
      fetchTipoDocumentos() {
        axios.get('http://localhost:3000/decameron/API/get_all_tipodocumento.php')
          .then(response => {
            this.tipodocumentos = response.data;
          });
      },
      fetchHabitaciones() {
        axios.get('http://localhost:3000/decameron/API/get_habitacionhoteltipo.php?TipoHabitacionId=' + this.tipohabitacionId+ '&HotelId=' + this.hotelId)
          .then(response => {
            this.habitaciones = response.data;
          });
      },
    createCliente() {
      axios.post('http://localhost:3000/decameron/API/create_cliente.php?Nombres=' + this.nombres + '&Apellidos='+ this.apellidos + '&NumDoc='+ this.numdoc +'&TipoDocumentoId='+ this.tipodocumentoId +'&Telefono='+ this.telefono +'&Email='+this.email,  {
        nombres: this.nombres,
        apellidos: this.apellidos,
        numdoc: this.numdoc,
        tipodocumentoid: this.tipodocumentoId	,
        telefono: this.telefono,
        email:this.email
      })
      .then(() => {
          axios.get('http://localhost:3000/decameron/API/get_clientenumdoc.php?TipoDocumentoId='+ this.tipodocumentoId +'&NumDoc='+this.numdoc,  {
        })
        .then(response => {
          this.cliente = response.data;
          this.clienteId = this.cliente.id

          axios.post('http://localhost:3000/decameron/API/create_habitacion_cliente.php?ClienteId='+ this.clienteId +'&HabitacionId=' + this.habitacionId,  {
          clienteid: this.clienteId,
          tipohabitacionid: this.tipohabitacionId
         }).then(
            axios.put('http://localhost:3000/decameron/API/update_habitacionestado.php?EstadoId=3&Id=' + this.habitacionId,  {
            id: this.habitacionId,
            estadoid:'3'
          }).then(

              alert('Cliente Registrado con éxito')

          ) 
         );
        });
      });

      
      
    }
  }
  };
  </script>

