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
      <h3 style="text-align: center;">Cambio de Password</h3>

      <form @submit.prevent="updatePass" style="width:500px; margin: auto;">
        <div class="form-group">
          <label for="login">Login:</label>
          <input type="text" class="form-control" id="nombre" v-model="login">
        </div>
        <div class="form-group">
          <label for="pass">Password Actual:</label>
          <input type="password" class="form-control" id="pass" v-model="pass">
        </div>

        <div class="form-group">
          <label for="passnew">Nuevo Password:</label>
          <input type="password" class="form-control" id="passnew" v-model="passnew">
        </div>
        <br>

        <div class="form-group">
          <label for="passconf">Confirmar Password:</label>
          <input type="password" class="form-control" id="passconfirm" v-model="passconf">
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
      login: '',
      pass:'',
      passnew:'',
      passconf:'',
      usuarioId:''
    };
  },
  methods: {
    updatePass() {


      if (this.login == "")
          {
            alert("El login no puede estar vacío");
          }
          else if (this.pass=="")
          {
            alert("El password no puede estar vacío");
          }
          else{
            
            axios.get(`http://localhost:3000/decameron/API/get_login.php?Login=${this.login}&Pass=${this.pass}`)
            .then((response)=> {
              
              this.posts = response.data;
              this.usuarioId = this.posts.id;

              if (this.posts==false){
                alert('Usuario y Password Inválidos')
              }else{

                if (this.passnew == this.passconf)
                {
                   console.log(this.usuarioId);
                    axios.put('http://localhost:3000/decameron/API/update_pass.php?Id='+ this.usuarioId +'&Pass='+ this.passnew, {
                    id: this.usuarioId,
                    pass: this.passnew
                    })
                    .then(() => {
                      alert('Contraseña Actualizada correctamente');
                      this.$router.push('/home');
                    })

                }
                else
                {
                    alert('Password no coincide con la confirmación')

                }
    
              }});        
  
          }   
    }
  }
};
</script>