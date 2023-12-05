# criando modulo

nest g module account
nest g controller account
nest g service account

npx typeorm migration:create ./src/database/migrations/03_places/popular_migration/insert-in-type

npx typeorm migration:create ./src/database/migrations/region/popular_migration/insert-in-city

create_table_state

id integer NOT NULL,
name charcter varying NOT NULL,
created_at
updated_at
primary key (id)

create_table_city
id integer NOT NULL,
state_id integer NOT NULL,
name charcter varying NOT NULL,
created_at
updated_at
primary key (id)

create_table_address
id integer NOT NULL,
user_id integer NOT NULL,
complement charcter varying,
number integer NOT NULL,
cep charecter varying NOT NULL,
city_id integer NOT NULL,
created_at
updated_at
primary key (id)

GET / Buscar dados
PUT / Editar dados
POST / Salvar dados envia um corpo
PATCH / Edita somente um campo
DELETE / Deleta dado por ID

DTOs é o que o usuário vai mandar

utils/types
os dados que vão ser salvos no banco

## Coordenadas

latitude=
longitude=

- Minha localização
  -17.321098,-53.228881
- Padaria pão do dia
  -17.3148097,-53.2233859

```
{
  "geometry.location": {
    "$near": {
      "$geometry": {
        "type": "Point",
        "coordinates": [-53.228881, -17.321098]
      },
      "$maxDistance": 50000
  }
}
}
```

http://localhost:3000/place/proximos/-17.321098/-53.228881
http://localhost:3000/place/proximos?latitude=-17.321098&longitude=-53.228881

```
   const locais = await this.placeModel
      .find({
        'geometry.location': {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
            $maxDistance: 10000,
          },
        },
      })
      .exec();

```

```
    // Utiliza $geoNear para calcular distâncias
    const local = await this.placeModel
      .aggregate([
        {
          $geoNear: {
            near: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
            distanceField: 'distance',
            key: 'geometry.location',
            includeLocs: 'geometry.location',
            spherical: true,
            distanceMultiplier: 0.001,
          },
        },
        {
          $limit: 3,
        },
        // Pode adicionar mais estágios de projeção se necessário
        {
          $project: {
            _id: 1,
            business_status: 1,
            distance: 1,
          },
        },
      ])
      .exec();
```

```
"elements" : [
            {
               "distance" : {
                  "text" : "4,7 km",
                  "value" : 4656
               },
               "duration" : {
                  "text" : "11 minutos",
                  "value" : 652
               },
               "status" : "OK"
            }
         ]

```
