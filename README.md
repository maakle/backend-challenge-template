### The task:

Build a service that fetches a specific public Github Repository of your choice every X minutes.

We want you to use the public Github API and map the response to our local `ObservedRepo` format and then store it in the database. 

Then create all CRUD API endpoints where you can add new observed repos, delete them and query them from the database.

We already implemented Prisma and SQLite for you, so you can focus on the task at hand.

### Features implemented:

- Create a CRON job that runs every X minutes and triggers a service that iterates over all `ObservedRepo` and fetches the latest data from Github
- This service should then query the official Github API for the details of a specific public Repo, but only for `ACTIVE` observed repos
- When you receive the result back, please map the response to our local `ObservedRepo` format. Check `schema.prisma` or the db format below
- Implement an API endpoint to GET `ObservedRepo` for a given `id`
- Store/Update the result in a database for every fetch
- The endpoint to GET all `ObservedRepos` should have query parameters and pagination implemented. The query parameters should be `owner`, `name`, `status` and `license`. 

### Bonus Objectives:

- Build API key management to authenticate requests to our endpoints
- Write unit test, that cover the basic functionality of this API

### Data structure

`ObservedRepo`

```json
{
  "id": "73276f33-cffe-4bde-b64d-f5d62cd03f13",
  "url": "https://github.com/nestjs/nest",
  "status": "active",
  "owner": "nestjs",
  "name": "nest",
  "stars": 29,
  "openIssues": 12,
  "license": "mit",
  "createdAt": "2023-02-24T18:10:14.450Z",
  "updatedAt": "2023-02-24T18:10:14.450Z"
}
```

For the pagination you can follow something like

```json
{
	"next": "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  "previous": "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
	"results": [
		{
			...
		}
	]
}
```

### Evaluation Criteria:
- We will evaluate your solution by completeness, code quality, tests and whatever you consider “production-ready”.
- We evaluate the completeness based on what we would expect from our team members in day-to-day business. We should be able to understand what exactly you built


### Helpful

- You will need to create a personal Github API token [here](https://github.com/settings/tokens) to communicate with the Github API
- The link for how to fetch a specific Github Repo can be found [here](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository)
- Nestjs offers Cron job scheduling out of the box. See [here](https://docs.nestjs.com/techniques/task-scheduling)
- For cursor based pagination in Prisma, see [here](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

### Tech Stack:

- Nestjs
- Postgres
- ORM of your choice
- Jest for testing
