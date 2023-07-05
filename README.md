# FITNESS FIRST - CHALLENGE

Backend of the project Fitness First - Challenge IW 2023

## Tech Stack

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

## Environnement variables for micro-services

Every micro-service has its own .env file who this in the README.md file of different micro-services.   

Also add a .env file in the folder compose with the variables in the README.md this folder.

## Installation

Clone the project

```bash
git clone https://github.com/ESGI-PRO/fitness-first-server.git
```

Go to the project directory

```bash
cd fitness-first-server
```

Run the project

```bash
docker-compose build
docker compose up -d
```

## Usage

### Swagger

Open the browser and go to the url [http://localhost:8000/api](http://localhost:8000/api) to see the swagger documentation of the project.

For test the routes with the swagger documentation you need to add the token in the header of the request.   

To begin you need to create a user with the route POST /users/register, or use the seed :
    
```json
{
    "email": "test8@denrox.com",
    "password": "password"
}
```

After you need to login with the route POST /users/login, and add the token in the Authorization button in the swagger documentation.

## Utils

### Uninstall the project

```bash
npx prisma migrate dev --name init && npx prisma db seed
npx prisma generate
docker-compose down --volumes --remove-orphans --rmi all
```

### Prisma commands

#### Migration and seed

```bash
npx prisma migrate dev
npx prisma db seed
```

## License

[MIT](https://choosealicense.com/licenses/mit/)