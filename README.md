# EB Market

A full-stack app that allows users to post advertisements to sell items.

## Features

- You can see a list of advertisements on the front page.
- You can find in advertisement details information about the description, price, and contact information of the seller.
- You can signup to create a new account and login with your created account.
- After logging in, you can post an advertisement about the item that you want to sell.
- You can update and delete your advertisement.
- You can make an offer about the price of the item and send it to the seller.

## Technologies

- [React](https://reactjs.org)
- [Redux](https://redux.js.org)
- [Material-UI](https://material-ui.com)
- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [Sequelize](https://sequelize.org)

## Installation

- Make sure you installed [Node.js](https://nodejs.org/en/download/) on your development machine.
- Create a [Docker](https://www.docker.com) container to store your [PostgreSQL](https://www.postgresql.org) database. You can update the database configuration in the db.js file. Create your local database by running

```
> docker run -p 5432:5432 --name <name_of_your_database> -e POSTGRES_PASSWORD=<your_password> -d postgres
```

- In the terminal, run

```
> git clone git@github.com:ducatrinh/eb-market.git
> cd eb-market
> npm install
> node index.js
> cd client
> npm install
> npm start
```
