<html>
<h1>UNIVERSIDAD DE PALERMO</h1>
<h2>Arquitecturas WEB</h2>

<h2>Integrantes</h2>
<p>
  Murruni Pablo <a href='mailto:murruni@gmail.com?Subject=UP ArqWEB TP' target='_blank'>murruni@gmail.com</a><br />
  Romero Gustavo <a href='mailto:gustavo.andres.romero@gmail.com?Subject=UP%20ArqWEB%20TP' target='_blank'>gustavo.andres.romero@gmail.com</a> </p>

<p>
    <b>
        El trabajo consiste en un negocio inmobiliario, el cual va a listar todos los inmuebles a vender o a alquilar con sus respectivas características:
        </b>
</p>

<p>
  <h2>Inmobiliaria</h2>
  <h3>Scope</h3>
    <ul>
        <li>Retornar listado de inmuebles</li>
        <li>Crear publicación de un inmueble</li>
        <li>Eliminar publicación de un inmueble</li>
        <li>Actualizar publicación de un inmueble</li>
    </ul>
</p>



<p>
<h2>Como ejecutar la aplicación</h2>
<b>
    <ul>
        <li>node inmobiliaria-app/app.js</li>
        <li><a target='_blank' href="http://localhost:8081/">Link Aplicación</a></li>
        <li>requiere tener instalado mongodb con escucha en puerto por defecto</li>
    </ul>
    </b>
</p>


<h2>API</h2>
<h3>USERS</h3>
<ul>
    <li>GET /api/users (retorna la información de todos los usuarios)</li>
    <li>GET /api/users/X (retorna la información de un usuario específico)</li>
    <li>POST /api/users (creación de un nuevo usuario)</li>
    <li>POST /api/users/authenticate (autenticación de un usuario)</li>
    <li>PUT /api/users/X (actualización de la información de un usuario)</li>
    <li>GET /api/users/X/apartments (devuelve todos los departamentos del usuario X)</li>
    <li>GET /api/users/X/apartments/Y (devuelve el departamento Y del usuario X)
    <li>PUT /api/users/X/apartments/Y (actualiza el departamento Y del usuario X)</li>
    <li>GET /api/users/X/houses (devuelve todas las casas del usuario X)</li>
    <li>GET /api/users/X/houses/Y (devuelve la casa Y del usuario X)</li>
    <li>PUT /api/users/X/houses/Y (actualiza la casa Y del usuario X)</li>
    <li>PATCH /api/users/X (actualización del nombre de usuario o email)</li>
    <li>DELETE /api/users/X (elimina un usuario específico)</li>
</ul>

<h3>APARTMENTS</h3>
<ul>
    <li>GET /api/apartments (retorna todos los departamentos)</li>
    <li>GET /api/apartments/X (retorna un departamento específico)</li>
    <li>GET /api/apartments?location=X&sale=true  (retorna departamentos de un barrio y en venta o en alquiler si es false)<li>
    <li>POST /api/apartments (creación de un nuevo departamento)</li>
    <li>PUT /api/apartments/X (actualización información de departamento)</li>
    <li>DELETE /api/apartments/X (elimina un departamento)</li>
</ul>

<h3>HOUSES</h3>
<ul>
    <li>GET /api/houses (retorna todos las casas)</li>
    <li>GET /api/houses/Y (retorna una casa específico)</li>
    <li>GET /api/houses?location=X&sale=true  (retorna casas de un barrio y en venta o en alquiler si es false)<li>
    <li>POST /api/houses (creación de una nueva casa)</li>
    <li>PUT /api/houses/Y (actualización información de una casa)</li>
    <li>DELETE /api/houses/Y (elimina una casa)</li>
</ul>

<h3>LOCATIONS</h3>
<ul>
    <li>GET /api/locations (retorna todos los barrios)</li>
    <li>GET /api/locations/Z (retorna un barrio )</li>
    <li>POST /api/locations (creación de un nuevo barrio)</li>
    <li>PUT /api/locations/Z (actualización información de un barrio)</li>
    <li>DELETE /api/locations/Z (elimina un barrio)</li>
</ul>

</p>
</html>
