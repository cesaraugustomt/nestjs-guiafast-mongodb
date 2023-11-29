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
