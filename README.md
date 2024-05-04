//Rutas y tipo

//login
https://apiimuebles.onrender.com/api/login  type="post"

//usuarios

https://apiimuebles.onrender.com/api/usuarios/create    type="post"
https://apiimuebles.onrender.com/api/usuarios/          type="get"

//Clientes
https://apiimuebles.onrender.com/api/clientes/          type="get"
https://apiimuebles.onrender.com/api/clientes/create    type="post"
https://apiimuebles.onrender.com/api/clientes/:id       type="put"

//Imuebles
https://apiimuebles.onrender.com/api/inmuebles/create   type="post"
https://apiimuebles.onrender.com/api/inmuebles/        type="get"
https://apiimuebles.onrender.com/api/inmuebles/:ired   type="get" consultar por referencia
https://apiimuebles.onrender.com/api/inmuebles/visita/create/:ref  type="post"

//Oficinas
https://apiimuebles.onrender.com/api/oficinas/create  type="post"
https://apiimuebles.onrender.com/api/oficinas/        type="get"
https://apiimuebles.onrender.com/api/oficinas/:id        type="put"
https://apiimuebles.onrender.com/api/oficinas/delete/:id type="delete"