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
<<<<<<< HEAD
## Installation et connect bdd et micro-service
Pour migrer via Prisma vos tables en developement : 
=======

Pour migrer via Prisma vos tables en developement :
>>>>>>> 12dbee6a (subscription addition ok working on invoice addition to prisma)

```bash
npx prisma migrate dev --name init && npx prisma db seed

```

## License

[MIT](https://choosealicense.com/licenses/mit/)
