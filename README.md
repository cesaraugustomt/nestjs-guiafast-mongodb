## TODO:

Adicione nodejs work na função de calculo de rota
https://docs.nestjs.com/techniques/queues

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

```
//SUBTYPES
{
  // <!--  automotivo pt-br - -->
  'vendedor de carros',
    'aluguel de carros',
    'reparo de carro',
    'lava-jato',
    'estação_de_carregamento_de_veículo_elétrico',
    'posto de gasolina',
    'estacionamento',
    'parada de descanso';

  // <!-- De negócios pt-br -->
  ('fazenda');

  // <!-- Cultura pt-br -->
  'galeria de Arte',
    'museu',
    'teatro de artes cênicas',
    // <!-- Educação pt-br -->
    'biblioteca',
    'pré escola',
    'escola primária',
    'escola',
    'Ensino Médio',
    'universidade',
    // <!-- Lazer e atividades pt-br -->
    'Centro de entreterimento',
    'Parque de diversões',
    'aquário',
    'banquete banquetes',
    'pista de boliche',
    'cassino',
    'Centro Comunitário',
    'Centro de Convenções',
    'Centro Cultural',
    'Parque de cães',
    'local do evento',
    'área de caminhada',
    'marco histórico',
    'marina',
    'aluguel de drone',
    'cinema',
    'Parque Nacional',
    'Boate',
    'parque',
    'atração turística',
    'Centro de Visitantes',
    'Local de casamento',
    'jardim zoológico',
    'quadra de basquete',
    'quadra de futsal',
    'quadra de vôlei',
    'quadra de tênis',
    'pista de skate',
    // <!-- Finanças pt-br -->
    'contabilidade',
    'atm',
    'banco';

  // <!-- Alimentos e bebidas pt-br -->
  'restaurante americano',
    'padaria',
    'bar',
    'churrascaria',
    'restaurante brasileiro',
    'restaurante de café da manhã',
    'restaurante de brunch',
    'cafeteria',
    'restaurante chines',
    'cafeteria',
    'restaurante fast food',
    'restaurante francês',
    'restaurante grego',
    'restaurante de hambúrguer',
    'sorveteria',
    'restaurante indiano',
    'restaurante indonésio',
    'restaurante italiano',
    'restaurante japonês',
    'restaurante coreano',
    'restaurante libanês',
    'entrega de refeição',
    'refeição para viagem',
    'restaurante mediterrâneo',
    'restaurante mexicano',
    'restaurante do Oriente Médio',
    'Restaurante de pizza',
    'restaurante ramen',
    'restaurante',
    'lanchonete',
    'Restaurante de frutos do mar',
    'restaurante espanhol',
    'Churrascaria',
    'restaurante de sushi',
    'Restaurante tailandês',
    'restaurante turco',
    'restaurante vegano',
    'Restaurante vegetariano',
    'restaurante vietnamita';

  // <!-- Áreas geográficas pt-br -->
  'área administrativa nível 1',
    'área administrativa nível 2',
    'país',
    'localidade',
    'Código postal',
    'Distrito escolar';

  // <!-- Governo pt-br -->
  'Prefeitura',
    'tribunal',
    'embaixada',
    'Corpo de Bombeiros',
    'escritório do governo local',
    'polícia',
    'correios';

  // <!-- Saúde e bem-estar pt-br -->
  'Clinica odontológica',
    'dentista',
    'doutor',
    'Drogaria',
    'hospital',
    'laboratório médico',
    'farmácia',
    'fisioterapeuta',
    'spa';

  // <!-- Hospedagem pt-br -->
  'cama e café da manhã',
    'área de camping',
    'cabana de acampamento',
    'cabana',
    'hotel para estadia prolongada',
    'fazenda',
    'casa de hóspedes',
    'Hostel',
    'hotel',
    'alojamento',
    'motel',
    'quarto de hóspedes privado',
    'hotel resort',
    'parque de trailers';

  // <!-- Lugares de inspiração pt-br -->
  'igreja', 'templo hindu', 'mesquita', 'sinagoga', 'Theravada';

  // <!-- Serviços pt-br -->
  'barbearia',
    'salão de beleza',
    'cemitério',
    'agência de cuidados infantis',
    'consultor',
    'serviço de entrega',
    'eletricista',
    'florista',
    'casa funerária',
    'cuidado capilar',
    'cabeleireiro',
    'agência de seguros',
    'lavanderia',
    'advogado',
    'chaveiro',
    'empresa de mudança',
    'pintor',
    'encanador',
    'agência imobiliária',
    'empreiteiro de telhados',
    'armazenar',
    'alfaiate',
    'provedor de serviços de telecomunicações',
    'agência de viagens',
    'cuidados veterinários';

  // <!-- Compras pt-br -->
  'loja de peças automotivas',
    'loja de bicicletas',
    'livraria',
    'loja de celulares',
    'loja de roupas',
    'loja de conveniência',
    'loja de departamento',
    'loja de descontos',
    'loja de eletrônicos',
    'loja de móveis',
    'loja de presentes',
    'bomboneria',
    'loja de ferragens',
    'loja de artigos para casa',
    'loja de materiais de construção',
    'loja de joias',
    'loja de bebidas',
    'mercado',
    'loja de animais',
    'loja de sapatos',
    'Centro de compras',
    'loja de artigos esportivos',
    'loja',
    'supermercado',
    'grossista';

  // <!-- Esportes pt-br -->
  'campo de atletismo',
    'Academia',
    'campo de golfe',
    'academia',
    'Parque infantil',
    'estação de esqui',
    'clube de esportes',
    'complexo desportivo',
    'estádio',
    'piscina';
  'campo de futebol',
    'trilha',
    // <!-- Transporte pt-br -->
    'aeroporto',
    'Rodoviária',
    'ponto de ônibus',
    'terminal da balsa',
    'heliporto',
    'estação ferroviária leve',
    'estacionar e dirigir',
    'estação de metrô',
    'ponto de taxi',
    'estação de trem',
    'depósito de trânsito',
    'estação de trânsito',
    'parada de caminhão';

  // <!-- tipo b pt-br-->
  'área administrativa nível 3',
    'área administrativa nível 4',
    'área administrativa nível 5',
    'área administrativa nível 6',
    'área administrativa nível 7',
    'arquipélago',
    'área coloquial',
    'continente',
    'estabelecimento',
    'chão',
    'comida',
    'empreiteiro geral',
    'geocódigo',
    'saúde',
    'interseção',
    'marco',
    'característica natural',
    'vizinhança',
    'local de culto',
    'mais código';
  'ponto de interesse',
    'político',
    'caixa postal',
    'prefixo do código postal',
    'sufixo código_postal',
    'cidade postal',
    'premissa',
    'sala',
    'rota',
    'endereço da Rua',
    'número da rua',
    'sublocalidade',
    'sublocalidade nível 1',
    'nível de sublocalidade 2',
    'nível de sublocalidade 3',
    'nível de sublocalidade 4',
    'nível de sublocalidade 5',
    'subpremissa',
    'Praça da cidade';
}



```
