
# Open source API for ecommerce projects

<table>
 <tr>
<td valign="top"><img src="https://img.shields.io/github/issues/ath34-tech/Digital-Product-graphQL-API"/></td>
<td valign="top"><img src="https://img.shields.io/github/forks/ath34-tech/Digital-Product-graphQL-API"/></td>
<td valign="top"><img src="https://img.shields.io/github/stars/ath34-tech/Digital-Product-graphQL-API"/></td>
<td valign="top"><img src="https://img.shields.io/github/license/ath34-tech/Digital-Product-graphQL-API"/></td>
<td valign="top"><a href="https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fath34-tech%2FDigital-Product-graphQL-API"><img alt="Twitter" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fath34-tech%2FDigital-Product-graphQL-AP"></a></td>
  </tr>
  </table>

This is an graphQL API that i made for ecommerce projects, if you want to showcase a ecommerce project on your resume you can save your time by using ***digiproducts-api-graphql***.


## API Reference

You can access API from here :https://digiproducts-api-graphql.herokuapp.com/.
#### GET 

```
  GET https://digiproducts-api-graphql.herokuapp.com/
```
On get request on given endpoint you will see the default
graphql schema gui.

#### POST

**Using CURL :**

```
  curl -X POST https://digiproducts-api-graphql.herokuapp.com/ -d '
query {
  allProduct {
    image
    customerReviewCount
    salePrice_range
  }
}
'
```
Returned response:
```
{
  "data": {
    "allProduct": [
      {
        "image": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_105x210_sc.jpg",
        "customerReviewCount": 5980,
        "salePrice_range": "1 - 50"
        },
        ...
        ]
       }
}
```

This is basic way how you can use this API with curl.










## All API queries

Here is list of all api queries:

- `ProductQueryID(id: ID)`  : Return a single product based on its id.
- `ProductQueryName(name: String)` : Return a single product based on its name.
- `allProduct` : Return list of all product.
- `allCategories` : Return list of all product categories.
- `GetProductsOfCategory(category: [String])` : Return list of all product of a certain category.

## GraphQL object types

**`Proudct`**(This Object contain data of single product):

- `objectID: ID!`
- `name: String!`
- `shortDescription: String!`
- `bestSellingRank: Int!`
- `thumbnailImage: String!`
- `salePrice: Int!`
- `manufacturer: String!`
- `url: String!`
- `type: String!`
- `image: String`
- `customerReviewCount: Int`
- `shipping: String!`
- `salePrice_range: String`
- `categories: String!`


**`Category`**(This Object contain data of single category):

- `category: String!`
- `products: [Product]`


## Support

For support, Contribute to this API or please star this repo.

If you like this API and eventually use it in any of your project

then please let me know and share it link to me.

Connect me through my email : aviar.org@gmail.com 



## Tech Stack

**Server:** Node, Express, GraphQL


## Run Locally

Clone the project

```bash
  git clone https://github.com/ath34-tech/Digital-Product-graphQL-API.git
```

Go to the project directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

go to https://localhost:5000/.


## 🚀 About Me
I'm a full stack developer. I can make web apps, mobile apps,backend,i can also do database stuff. I also do software developement using PyQt5 and PySide2. I also do game developement some time using unity and C#.

I want to freelancing,open source contribution and technical writting.

My medium profile:https://athtripathi.medium.com/

## 🛠 Skills

- **Web Developement:** ReactJS,NextJS,Javascript, HTML,CSS,Django,nodeJS,ThreeJS,GraphQL

- **App Developement:** React native

- **Software Developement:** Python and C#

These are some skills that i have for knowing more visit my profile: [My github!](https://github.com/ath34-tech)
