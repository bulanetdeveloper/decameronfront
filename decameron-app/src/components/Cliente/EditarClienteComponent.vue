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
    <h3 style="text-align: center;">Editar Datos Clientes</h3>
    <br>
    <form @submit.prevent="editCliente" style="width:500px; margin: auto;">
    
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
      <a href="#/editarcliente" @click="fetchCliente">Buscar</a>
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
    this.fetchTipoDocumentos();
},
methods: {
    fetchTipoDocumentos() {
      axios.get('http://localhost:3000/decameron/API/get_all_tipodocumento.php')
        .then(response => {
          this.tipodocumentos = response.data;
        });
    },
  fetchCliente()
  {
    axios.get('http://localhost:3000/decameron/API/get_clientenumdoc.php?TipoDocumentoId='+ this.tipodocumentoId +'&NumDoc=' + this.numdoc)
        .then(response => {
          this.cliente = response.data;
          this.clienteId = this.cliente.id;
          this.nombres = this.cliente.nombres;
          this.apellidos = this.cliente.apellidos;
          this.telefono = this.cliente.telefono;
          this.email = this.cliente.email;

        });
  },
  editCliente() {
    axios.put('http://localhost:3000/decameron/API/update_cliente.php?Nombres=' + this.nombres + '&Apellidos='+ this.apellidos + '&NumDoc='+ this.numdoc +'&TipoDocumentoId='+ this.tipodocumentoId +'&Telefono='+ this.telefono +'&Email='+this.email + '&Id=' + this.clienteId , {
      id: this.clienteId,
      nombres: this.nombres,
      apellidos: this.apellidos,
      numdoc: this.numdoc,
      tipodocumentoid: this.tipodocumentoId	,
      telefono: this.telefono,
      email:this.email
    })
    .then(()=>{
      alert('Registro Editado con éxito')
    });

  }
}
};
</script>
