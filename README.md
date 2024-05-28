- CLIENT on live production : https://win-client.vercel.app/
- SERVER on live production : https://win-server-production.up.railway.app/
- RESTful API documentation : https://win-server-production.up.railway.app/api/documentation


## Installation SERVER

```bash
$ cd SERVER/
$ npm install
```

- create file .env pada root dir SERVER
- paste code berikut :
  ```
  DATABASE_URL="postgresql://default:KCQ9sXD2MTyb@ep-morning-dawn-a13hfsys.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"
  PORT=5000
  RT_SECRET='asdf;lkj'
  AT_SECRET=';lkjasdf'  
  ```
- jika ingin menggunakan database lokal postgre, berikut:

```
  1. buat terlebih dahulu database di lokal, dengan nama win_db
  2. $ npx prisma init --datasource-provider postgresql
  3. $ npx prisma migrate dev --name init
  4. dan pastekan kode berikut ke file .env:
    PORT=5000
    RT_SECRET='asdf;lkj'
    AT_SECRET=';lkjasdf'  
```

# Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Installation CLIENT

```bash
$ cd CLIENT/
$ npm install
```

# Running the app

```bash
# development
$ npm run dev

# watch mode
$ npm run dev

# production mode
$ npm run start
```
