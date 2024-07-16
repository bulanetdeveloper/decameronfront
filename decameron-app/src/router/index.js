import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage.vue'

import ListaRegionComponent from '@/components/Region/ListaRegionComponent.vue'
import ListaCiudadComponent from '@/components/Ciudad/ListaCiudadComponent.vue'
import CrearRegionComponent from '@/components/Region/CrearRegionComponent.vue'
import EditarRegionComponent from '@/components/Region/EditarRegionComponent.vue'
import DetalleRegionComponent from '@/components/Region/DetalleRegionComponent.vue'
import CrearCiudadComponent from '@/components/Ciudad/CrearCiudadComponent.vue'
import EditarCiudadComponent from '@/components/Ciudad/EditarCiudadComponent.vue'
import DetalleCiudadComponent from '@/components/Ciudad/DetalleCiudadComponent.vue'
import ListaTipoDocumentoComponent from '@/components/TipoDocumento/ListaTipoDocumentoComponent.vue'
import CrearTipoDocumentoComponent from '@/components/TipoDocumento/CrearTipoDocumentoComponent.vue'
import EditarTipoDocumentoComponent from '@/components/TipoDocumento/EditarTipoDocumentoComponent.vue'
import DetalleTipoDocumentoComponent from '@/components/TipoDocumento/DetalleTipoDocumentoComponent.vue'
import ListaHotelComponent from '@/components/Hotel/ListaHotelComponent.vue'
import CrearHotelComponent from '@/components/Hotel/CrearHotelComponent.vue'
import EditarHotelComponent from '@/components/Hotel/EditarHotelComponent.vue'
import DetalleHotelComponent from '@/components/Hotel/DetalleHotelComponent.vue'
import ListaHabitacionComponent from '@/components/Habitacion/ListaHabitacionComponent.vue'
import CrearHabitacionComponent from '@/components/Habitacion/CrearHabitacionComponent.vue'
import EditarHabitacionComponent from '@/components/Habitacion/EditarHabitacionComponent.vue'
import DetalleHabitacionComponent from '@/components/Habitacion/DetalleHabitacionComponent.vue'
import ListaTipoHabitacionComponent from '@/components/TipoHabitacion/ListaTipoHabitacionComponent.vue'
import CrearTipoHabitacionComponent from '@/components/TipoHabitacion/CrearTipoHabitacionComponent.vue'
import EditarTipoHabitacionComponent from '@/components/TipoHabitacion/EditarTipoHabitacionComponent.vue'
import DetalleTipoHabitacionComponent from '@/components/TipoHabitacion/DetalleTipoHabitacionComponent.vue'
import ListaEstadoHabitacionComponent from '@/components/EstadoHabitacion/ListaEstadoHabitacionComponent.vue'
import CrearEstadoHabitacionComponent from '@/components/EstadoHabitacion/CrearEstadoHabitacionComponent.vue'
import EditarEstadoHabitacionComponent from '@/components/EstadoHabitacion/EditarEstadoHabitacionComponent.vue'
import DetalleEstadoHabitacionComponent from '@/components/EstadoHabitacion/DetalleEstadoHabitacionComponent.vue'
import CrearClienteComponent from '@/components/Cliente/CrearClienteComponent.vue'
import ListaHabitacionClienteComponent from '@/components/HabitacionCliente/ListaHabitacionClienteComponent.vue'
import EditarClienteComponent from '@/components/Cliente/EditarClienteComponent.vue'
import DetalleHabitacionClienteComponent from '@/components/HabitacionCliente/DetalleHabitacionClienteComponent.vue'
import CrearUsuarioComponent from '@/components/Usuario/CrearUsuarioComponent.vue'
import CambiarPasswordCompnent from '@/components/Usuario/CambiarPasswordCompnent.vue'
import EliminarCiudadComponent from '@/components/Ciudad/EliminarCiudadComponent.vue'
import EliminarRegionComponent from '@/components/Region/EliminarRegionComponent.vue'
import EliminarTipoDocumentoComponent from '@/components/TipoDocumento/EliminarTipoDocumentoComponent.vue'
import EliminarHotelComponent from '@/components/Hotel/EliminarHotelComponent.vue'
import EliminarEstadoHabitacionComponent from '@/components/EstadoHabitacion/EliminarEstadoHabitacionComponent.vue'
import EliminarTipoHabitacionComponent from '@/components/TipoHabitacion/EliminarTipoHabitacionComponent.vue'
import EliminarHabitacionComponent from '@/components/Habitacion/EliminarHabitacionComponent.vue'
import CrearHabitacionClienteComponent from '@/components/HabitacionCliente/CrearHabitacionClienteComponent.vue'
import LoginComponent from '@/components/LoginComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginComponent
  },
  {
    path: '/login',
    name: 'login',
    component: LoginComponent,
    
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },

  {
    path: '/regiones',
    name: 'regiones',
    component: ListaRegionComponent
  },
  {
    path: '/regiones/nuevaregion',
    name: 'nuevaregion',
    component: CrearRegionComponent
  },
  {
    path: '/regiones/editarregion/:id',
    name: 'editarregion',
    component: EditarRegionComponent
  },
  {
    path: '/regiones/detalleregion/:id',
    name: 'detalleregion',
    component: DetalleRegionComponent
  },
  {
    path: '/regiones/eliminarregion/:id',
    name: 'eliminarregion',
    component:EliminarRegionComponent
  },
  {
    path: '/ciudades',
    name: 'ciudades',
    component: ListaCiudadComponent
  },
  {
    path: '/ciudades/nuevaciudad',
    name: 'nuevaregion',
    component: CrearCiudadComponent
  },
  {
    path: '/ciudades/editarciudad/:id',
    name: 'editarciudad',
    component: EditarCiudadComponent
  },
  {
    path: '/ciudades/detalleciudad/:id',
    name: 'detalleciudad',
    component: DetalleCiudadComponent
  },
  {
    path: '/ciudades/eliminarciudad/:id',
    name: 'eliminarciudad',
    component: EliminarCiudadComponent
  },
  {
    path: '/tipodocumentos',
    name: 'tipodocumentos',
    component: ListaTipoDocumentoComponent
  },
  {
    path: '/tipodocumentos/nuevotipodocumento',
    name: 'nuevotipodocumentos',
    component: CrearTipoDocumentoComponent
  },
  {
    path: '/tipodocumentos/editartipodocumento/:id',
    name: 'editartipodocumento',
    component: EditarTipoDocumentoComponent
  },
  {
    path: '/tipodocumentos/detalletipodocumento/:id',
    name: 'detalletipodocumento',
    component: DetalleTipoDocumentoComponent
  },
  {
    path: '/tipodocumentos/eliminartipodocumento/:id',
    name: 'eliminartipodocumento',
    component: EliminarTipoDocumentoComponent
  },
  {
    path: '/hoteles',
    name: 'hoteles',
    component: ListaHotelComponent
  },
  {
    path: '/hoteles/nuevohotel',
    name: 'nuevohotel',
    component: CrearHotelComponent
  },
  {
    path: '/hoteles/editarhotel/:id',
    name: 'editarhotel',
    component: EditarHotelComponent
  },
  {
    path: '/hoteles/detallehotel/:id',
    name: 'detallehotel',
    component: DetalleHotelComponent
  },
  {
    path: '/hoteles/eliminarhotel/:id',
    name: 'eliminarhotel',
    component: EliminarHotelComponent
  },
  {
    path: '/habitaciones',
    name: 'habitaciones',
    component: ListaHabitacionComponent
  },
  {
    path: '/habitaciones/nuevahabitacion',
    name: 'nuevahabitacion',
    component: CrearHabitacionComponent
  },
  {
    path: '/habitaciones/editarhabitacion/:id',
    name: 'editarhabitacion',
    component: EditarHabitacionComponent
  },
  {
    path: '/habitaciones/detallehabitacion/:id',
    name: 'detallehabitacion',
    component: DetalleHabitacionComponent
  },
  {
    path: '/habitaciones/eliminarhabitacion/:id',
    name: 'eliminarhabitacion',
    component: EliminarHabitacionComponent
  },
  {
    path: '/tipohabitaciones',
    name: 'tipohabitaciones',
    component: ListaTipoHabitacionComponent
  },
  {
    path: '/tipohabitaciones/nuevotipohabitacion',
    name: 'nuevotipohabitacion',
    component: CrearTipoHabitacionComponent
  },
  {
    path: '/tipohabitaciones/editartipohabitacion/:id',
    name: 'editartipohabitacion',
    component: EditarTipoHabitacionComponent
  },
  {
    path: '/tipohabitaciones/detalletipohabitacion/:id',
    name: 'detalletipohabitacion',
    component: DetalleTipoHabitacionComponent
  },
  {
    path: '/tipohabitaciones/eliminartipohabitacion/:id',
    name: 'eliminartipohabitacion',
    component: EliminarTipoHabitacionComponent
  },
  {
    path: '/estadohabitaciones',
    name: 'estadohabitaciones',
    component: ListaEstadoHabitacionComponent
  },
  {
    path: '/estadohabitaciones/nuevoestadohabitacion',
    name: 'nuevoestadohabitacion',
    component: CrearEstadoHabitacionComponent
  },
  {
    path: '/estadohabitaciones/editarestadohabitacion/:id',
    name: 'editarestadohabitacion',
    component: EditarEstadoHabitacionComponent
  },
  {
    path: '/estadohabitaciones/detalleestadohabitacion/:id',
    name: 'detalleestadohabitacion',
    component: DetalleEstadoHabitacionComponent
  },
  {
    path: '/estadohabitaciones/eliminarestadohabitacion/:id',
    name: 'eliminarestadohabitacion',
    component: EliminarEstadoHabitacionComponent
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: CrearClienteComponent
  },
  {
    path: '/editarcliente',
    name: 'editarcliente',
    component: EditarClienteComponent
  },
  {
    path: '/clientereserva',
    name: 'clientereserva',
    component: CrearHabitacionClienteComponent
  },
  {
    path: '/reservas',
    name: 'reservas',
    component: EditarClienteComponent
  },
  {
    path: '/listareservas',
    name: 'listareservas',
    component: ListaHabitacionClienteComponent
  },
  {
    path: '/listareservas/reserva/:id',
    name: 'reserva',
    component: DetalleHabitacionClienteComponent
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: CrearUsuarioComponent
  },
  {
    path: '/cambiarpass',
    name: 'cambiarpass',
    component: CambiarPasswordCompnent
  }
]

const router = new VueRouter({
  routes
})

export default router
