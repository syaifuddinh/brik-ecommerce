
# E-Commerce Frontend

## How to install
- After pull from repository,  run : yarn install
- Open .env file, adjust API URL

## How to run
- After all installing procedures done, run : yarn dev
- This application would run on : http://localhost:3000

## User for login
- username : admin
- password : 12345678

## Technologies
- Typescript
- React JS
- React Redux

## Routes
- /login = Login Page
- /registration = Registration
- / = Homepage or List Product
- /product/create  = Creating Product Page
- /product/:id = Detail Product Page

## Directories
- src
    - assets
    - interfaces
    - layouts
    - models
    - pages
    - services
    - ui 
    - utils

### src
It contains main source code of this application
### assets
It contains CSS / SCSS file and images
### interfaces
It contains interfaces / data types for general components
### layouts
It contains layout component
### models
It contains reusable logics / central data processing
### services
It contains helper for calling API
### ui
It contains reusable basic component
### utils
It contains reusable logic, especially for simple task

## General description
Visit route "/" to see list product. You could see products and searching it. This page has pagination, each pagination contains max 10 products.
Visit route "/product/page" to create product. You could upload image, select category, fill title, fill measurement, and so on.
Visit route "/product/:id" to see detail product
