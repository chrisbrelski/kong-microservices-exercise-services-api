# Kong Microservices Exercise: Services API
Kong Microservices Exercise: Services API to power a Service Catalog Web App.
A Services API for a service catalog.

## Notes

ServiceApi is the model name for a service in our domain - this is to disambiguate from the Nest usage of "service" in the code.

## Design Decisions

* Use a local Postgres container through docker-compose for easier self-contained and reproducible work on the repo.

* Using auto-increment integers by ID for simplicity. Ideally use UUIDs. 

* Pagination using parameters `page` and `pageSize` to provide a clear and simple developer experience for API clients.

## Running the app: 

First, make sure the Postgres container is running with: 

```
docker-compose up -d
```

If running for the first time, generate the TypeORM migrations with: 

```
npm run typeorm migration:generate -n ServiceTableCreation -- -d ./data-source.ts
```

Migrations should be generated into `src/migrations`.

Then run the migrations with: 

```
npm run typeorm migration:run -- -d ./data-source.ts
```



Start the Nest app with: 

```
npm run start
```

## Insomnia Collection
Import the collection from the `insmonia/collection` folder to interact with the API. 
