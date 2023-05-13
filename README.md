# CHALLENGE

CHALLENGE pour la deuxième semestre.

## Installation - start le projet

```bash
docker compose up -d
```

## Variable env 
Il faut créer un fichier .env dans chaque micro-service backend et ajouter les variables suivantes

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/challenge?schema=public"
```
## Installation et connect bdd et micro-service
Pour migrer via Prisma vos tables en developement : 

```bash
npx prisma migrate dev --name init
```

## License

[MIT](https://choosealicense.com/licenses/mit/)