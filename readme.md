# Gestión de Turnos Médicos - Práctico 3

Aplicación Node.js + Express + Sequelize + SQLite para la gestión de turnos médicos en una clínica. Permite operar tanto desde una API REST (versión online) como desde una interfaz web amigable (versión local con EJS).
Se incluyen JOI para a vaidacion de los datos y JWT para la proteccion de rutas.

---

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/DarioColetto/prog3_tp3.git
   cd prog3_tp3
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   - Copia el archivo `.env` de ejemplo y edítalo si es necesario:
     ```
     SECRETE_WORD=palabrasecreta
     EXPIRES_IN=1h
     TEMPLATE=ejs
     HOST=http://localhost
     PORT=3000
     ```

4. **Inicia la aplicación:**
   ```bash
   npm run dev
   ```
   El servidor estará disponible en `http://localhost:3000`.

---

## Uso de la aplicación

### Interfaz Web (EJS)

- Accede a `http://localhost:3000/` para:
  - Visualizar turnos disponibles o reservados.
  - Registrar nuevos turnos para pacientes.
  - Cancelar turnos.
  - Dar de baja pacientes.
  - Registrar nuevos pacientes (`/pacienteForm`).

---

### Vista Principal
![vista](/img/vista.PNG)

### Formualario Registro de Paciente
![vista](/img/registrarPaciente.PNG)


### API REST

#### Autenticación

- **Login (obtener JWT):**
  ```
  POST /api/v1/login/
  Content-Type: application/json

  {
    "email": "juan.perez@email.com",
    "password": "clave123"
  }
  ```
  **Respuesta:**  
  ```json
  { "token": "..." }
  ```

  **Authorization HEADER**
  Usa el token proporcionado y agregado a las rutas request que necesiten auteticacion.
  ```
  authentication: valor_del_token
  ```


#### Pacientes

- **Listar pacientes**
  ```
  GET /api/v1/pacientes
  ```
- **Crear paciente**
  ```
  POST /api/v1/pacientes
  Content-Type: application/json

  {
    "dni": "12345678",
    "nombre": "Juan",
    "apellido": "Pérez",
    "email": "juan@email.com",
    "password": "clave123"
  }
  ```
- **Actualizar paciente**
  ```
  PUT /api/v1/pacientes/:id
  ```
- **Eliminar paciente**
  ```
  DELETE /api/v1/pacientes/:id
  ```

#### Turnos

- **Listar turnos de un paciente**
  ```
  GET /api/v1/turnos/:idPaciente
  ```
- **Crear turno**
  ```
  POST /api/v1/turnos
  Content-Type: application/json

  {
    "idPaciente": 1,
    "fechaHora": "2025-06-20T09:30:00"
  }
  ```
- **Cancelar turno**
  ```
  DELETE /api/v1/turnos/:idTurno
  ```

## Pruebas con POSTMAN

Algunos ejemplos que se utilizaron en Postman.

### Login
Si los datos son validos devuelve el token. El mismo se utilizara en Headers de otras request.
![vista](/img/login.PNG)

### Ver todos los Pacientes
Nota: el token fue agregado en Headers Authorization.
![vista](/img/getPacientes.PNG)

### Registrar Paciente
![vista](/img/crearPaciente.PNG)

### Eliminar Paciente
El id del paciente a eliminar esta en los parametros de la request.
![vista](/img/delPaciente.PNG)

---

## Estructura de carpetas principal

```
src/
  controllers/
  models/
  repository/
  routes/
  schema/
  services/
  views/
    ejs/
      index.ejs
      crearPaciente.ejs
    pug/
  ...
.env
```

---

## Notas

- El sistema utiliza JWT para proteger los endpoints sensibles.
- La base de datos es SQLite y se sincroniza automáticamente al iniciar.
- Puedes usar herramientas como Postman o Thunder Client para probar la API REST.
- La interfaz web está en EJS y es amigable para el personal de la clínica.

---

## Autor

Daro Coletto

---