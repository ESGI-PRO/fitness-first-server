# Subscription

This service is responsible for managing subscriptions.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash
API_GATEWAY_PORT=8000
API_GATEWAY_HOST=gateway-api

USER_SERVICE_PORT=8002
USER_SERVICE_HOST=user-api

MAILER_SERVICE_PORT=8008
MAILER_SERVICE_HOST=mailer-api

SUBSCRIPTION_SERVICE_PORT=8009
SUBSCRIPTION_SERVICE_HOST=subscription-api

BASE_URI=http://localhost

STRIPE_SECRET_KEY="sk_test_51MTk4ZAor24Sfpgr1YQf3Xfk3oJooRyBSfB1lJWmAxwvqhSWJtZsRqMZCZk3B2b0kCCEe6tHwISkb4XHxBBHEH1O00AzDE8WmD"
WEBHOOK_SECRET="whsec_31t9wJkQYqnK8eQR4N0pZT05iIOMhyPI"

POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
POSTGRES_DB=subscription
POSTGRES_HOST=postgres

DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DB}?schema=public"
```

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## We are using the following tech. in our app
```bash
-Nestjs
-Prisma Client (with PostgreSQL)
-GraphQL
-Googleapis package
-Stripe GateWay
-Webhook
```
## Installation

```bash
# install package.json
$ npm install

#Edit your env file
$ DATABASE_URL=your_db_url
$ ACCESS_TOKEN=write_any_token
$ REFRESH_TOKEN=write_any_token
$ CLIENT_ID=write_your_google_clientId
$ CLIENT_SECRET=write_your_google_client_secret
$ STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY
$ CLIENT_URL=http://localhost:5000/stripe
$ WEBHOOK_SECRET=YOUR_WEBHOOK_SECRET #you will get it when running stripe-cli

```

## Setup & Migrate PostgreSQL DB

```bash
# migrate prisma schema
$ npx prisma migrate dev --name init

# prisma generate
$ npx prisma generate
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Running Stripe Webhook Using Stripe-CLI

```bash
# install the Stripe-CLI : Go to https://github.com/stripe/stripe-cli

# then log into your stripe account
$ stripe login --api-key YOUR_SECRET_KEY

# make stripe to listen to your server
$ stripe listen --forward-to localhost:5000/stripe/webhook
```

## Go to GraphQL Playground
go to http://localhost:5000 (5000 is our port you can change it)

```bash
#write the following mutation :
mutation {
  authenticateWithGoogle(token:`${token_you_get_from_client_side}`){ 
                 #or you can get id_Token from https://developers.google.com/oauthplayground/
    accessToken  # you should get access_token that we w'll use it inside our app.
    #refreshToken
  }
}
#if you need any help to get google token you can follow this source ; it's really helpful
$ https://fusebit.io/blog/gmail-api-node-tutorial/

then go down to "Http Headers" and paste your access_token we got it as the following:
{
  "Authorization":"Bearer ${access_token}"
}

#Then execute following query to check if you are logged in
query {
  me{
    id
    firstName
    lastName
    picture
  }
}
```
## Execute some mutations

```bash
#After logging in by token as we learned we can add product
#Add product
mutation addProduct{
  addProduct(data:{title:"First Product",price:23,sku:"1k142kdsao",quantity:5,categoryId:"clothes"}){
    id
    title
    slug #we will add this product to our cart with slug to reduce queries that frontend will execute them
  }
}

#Add product to Cart
mutation addToCart{
  addToCart(slug:`${product_slug}`) #return true 
}

#Get you cart items
query getCartItems{
  getCartItems{
    id
    cartId    # we will use cartId to make order
    productId
    quantity
    price
  }
}

#Make order
#if you are loggedin
mutation makeOrder{
  makeOrder(cartId:`${cart_id}`,data:{mobile:"+1..."}){
    id
    title
    sessionId
  }
}

#If you are not logged in
#you must provide some data also if you logged in but the data not found in user table
mutation makeOrder{
  makeOrder(cartId:63,data:{firstName:`${String}`,lastName:`${String}`,email:`${String}`,mobile:`${String}`,}){
    id
    title
    sessionId
  }
}
#Once you execute "makeOrder" mutation you will be redirected to stripe checkout page or you can click on the link that shown in server logs
#Once you write fake data(https://stripe.com/docs/testing?testing-method=card-numbers#visa) and press pay webhook will update status of order to "paid" and will be redirected to success page

#Get your paid orders

query getMyOrders{
  getMyOrders{
    id
    sessionId
    status   #paid
    subTotal
    grandTotal
    orderItems{
      id
      productId
      price
      quantity
      product{
        id
        title
      }
    }
  }
}

#To check order status from stripe gateway to be sure from its status if you have a problem in orer or trasaction table
query getOrderStatusFromStripe{ #You must be Admin to execute query ; to be ADMIN you can modify user type from database
  getOrderStatusFromStripe(id:`${id_number}`)
}

```


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
