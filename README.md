# Prueba-Credit
Sistema para gestionar solicitudes de crédito.

## Tecnologías

### Backend
- Node.js
- Express
- Knex
- MySQL
- JWT

### Frontend
- Angular 21
- TailwindCSS

### Testing
- Vitest

---

## Instalación

Clonar repositorio:

```bash
git clone https://github.com/Raul-Veces507/Prueba-Credit
```

Backend:

```bash
cd backend
npm install
```

Crear archivo:

```bash
cp .env.example .env

```

Configurar credenciales de base de datos.

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=Examen
JWT_SECRET=your_secret_key


Ejecutar migraciones:

```bash
npx knex migrate:latest
```

Iniciar servidor:

```bash
npm run dev
```

Frontend:

```bash
cd frontend
npm install
ng serve
```

Aplicación:

```txt
Frontend:
http://localhost:4200

Backend:
http://localhost:3000
```

---

## Ejecutar pruebas

```bash
npm run test:unit
```

---

## Docker
Configurar credenciales docker-compose.yml.
    environment:
    DB_HOST: localhost
    DB_USER: root
    DB_PASSWORD: ''
    DB_NAME: database
    JWT_SECRET:your_secret_key

Ejecutar:

```bash
docker-compose up --build

```

---

## Endpoints

### Auth

POST

```txt
/api/v1/auth/login
```

### Credit Requests

GET

```txt
/api/v1/credit
```

POST

```txt
/api/v1/credit
```

PATCH

```txt
/api/v1/credit/:id/status
```

GET History

```txt
/api/v1/credit/:id/history
```
