const express = require('express')
const expressGraphQL = require('express-graphql')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLID
} = require('graphql')
const ProductData = require('./db.json')
const CategoryList = require('./categories.json')

const app = express()

const CategoriesType = new GraphQLObjectType({
    name: "Categories",
    description: "This is product categories",
    fields: () => ({
        category: { type: GraphQLNonNull(GraphQLString) },
        products: {
            type: new GraphQLList(ProductType),
            resolve: (category) => {
                return ProductData.filter(p => {
                    return p.categories[0] === category.category
                })
            }
        }
    })
})
const ProductType = new GraphQLObjectType({
    name: 'Product',
    description: "This consist data of single product",
    fields: () => ({
        objectID: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
        shortDescription: { type: GraphQLNonNull(GraphQLString) },
        bestSellingRank: { type: GraphQLNonNull(GraphQLInt) },
        thumbnailImage: { type: GraphQLNonNull(GraphQLString) },
        salePrice: { type: GraphQLNonNull(GraphQLInt) },
        manufacturer: { type: GraphQLNonNull(GraphQLString) },
        url: { type: GraphQLNonNull(GraphQLString) },
        type: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLString },
        customerReviewCount: { type: GraphQLInt },
        shipping: { type: GraphQLNonNull(GraphQLString) },
        salePrice_range: { type: GraphQLString },
        categories: { type: GraphQLNonNull(GraphQLString) }
    })
})


const Queries = new GraphQLObjectType({
    name: "Query",
    description: "All queries",
    fields: () => ({
        ProductQueryID: {
            type: ProductType,
            description: "Return a single product",
            args: {
                id: { type: GraphQLID }
            },
            resolve: (parents, args) => ProductData.find(prod => prod.objectID === args.id)
        },
        ProductQueryName: {
            type: ProductType,
            description: "Return a single product",
            args: {
                name: { type: GraphQLString }
            },
            resolve: (parents, args) => ProductData.find(prod => prod.name === args.name)
        },
        allProduct: {
            type: new GraphQLList(ProductType),
            description: "return all product",
            resolve: () => ProductData
        },
        allCategories: {
            type: new GraphQLList(CategoriesType),
            description: "return all categories",
            resolve: () => CategoryList
        },
        GetProductsOfCategory: {
            type: CategoriesType,
            description: "get all products of certain category",
            args: {
                category: { type: new GraphQLList(GraphQLString) }
            },
            resolve: (parent, args) => CategoryList.find(p => args.category.includes(p.category))
        }
    })
})


const schema = new GraphQLSchema({
    query: Queries
})

app.use('/', expressGraphQL({
    schema: schema,
    graphiql: true
}))
app.listen(process.env.PORT || 5000, () => console.log('Server Running'))