## TODO:

Adicione nodejs work na função de calculo de rota
https://docs.nestjs.com/techniques/queues
https://stackoverflow.com/questions/70230659/nestjs-run-worker-in-a-separate-process

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

# RDBMS x MongoDB

Database -> Database
Table -> Collection
Index -> Index
Row -> Document
Column -> Field
Join -> Embedding, Linking, $lookup, $graphLookup

## Collection

```
model Route{
  id  String @db.ObjectId @id @default(auto()) @map("_id")
  name String
  source Place
  destination Place
  created_at DateTime @default(now())
  updated_at DateTime #updatedAt
  distance Float
  duration Float
}


type Place{
  name String
  location Coord
}

type Coord{
  lat Float
  lng Float
}

```

## Modelagem - Embedded

{
\_id: <ObjectId1>,
username: "123xyz",
contact: {
phone: "123-456-7890",
email: "xyz@example.com"
},
access: {
level: 5,
group: "dev"
}
}

não há obrigatoriedade de criar o schema antes de inserir os dados,
mas é possível inserir o `Schema Validations` ele te da a possibilidade de definir que tal atributo é obrigatório.

considere o uso de dados pela aplicação.
ATENÇÃO: um documento tem um tamanho limite de 16MB
(se ultrapassar esse limite o banco para).

# Teorema CAP

Consistência:

- Todos os nós devem possuir o estado mais recente de um dado

Disponibilidade:

- Todos os nós devem possuir constante acesso de leitura e escrita

Tolerância à Partição:

- O sistema deve funcionar independente de falhas que ocorram
  (no nós, na rede, ...)

# geojson = rfc

## GeoRest ex:

```
_id: ObjectId
coordinates: Array
[
  0:  Latitude
  1:  Longitude
]
type: "Point"
name: "Morris Park Bake Shop"

```

é preciso criar um índice chamado índice de esfera 2d:
location -> 2dsphere

# Localizar nas proximidades

```
{
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [-73.856077, 40.848447]
      },
      $maxDistance: 1000,
      $minDistance: 10
    }
  }
}


```
