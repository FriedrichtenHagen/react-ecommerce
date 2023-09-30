# Zalando Clone

A copy of the zalando frontend (for mobile) with a simple firestore backend. The products are Nalgene water bottles because I was looking to buy one when I started working on this project. 

## Features include: 
- add to cart
- saving products to favorites
- registration and login
- apply coupon code
- product search
- product recommendation (products that have not been added to the cart yet)


Here is a link to a live demo: https://friedrichtenhagen.github.io/react-ecommerce/

![landing page screenshot](/screenshots/landingpage.png)
![landing page screenshot](/screenshots/products.png)
![landing page screenshot](/screenshots/cart-empty.png)
![landing page screenshot](/screenshots/cart1.png)
![landing page screenshot](/screenshots/cart2.png)
![landing page screenshot](/screenshots/search.png)

## How it's made:

### Tech used: React, Google Firebase, CSS

This was a fun exercise in making a professional looking frontend with React. I copied the zalando site because I enjoy the design of the site and UX. 
Google Firebase provided a quick backend to store shopping carts and favorite lists of users as well as handle authentification. 
The styling was done in vanilla CSS. The class naming is honestly kind of a mess. This is something I will improve in future projects. 

## Lessons learned:

I learned how to use React in connection with an API for the (Google Firebase) backend. Using useState, useEffect to create an interactive UI. 
Analyzing the zalando CSS definitely taught me a few new tricks as well. 

# To Do:

## Frontend Functionality
- error handling on form (using library?)
- write cookies to save the cart without logging in

## Backend
- currently the cart is fetched from the database only on the login page. It should also
  be fetched when the user reopens the page (and is still logged in)


## UI/CSS
- style shop for desktop view
  - add hover effects
- look into animation library to animate changes in the prices
- fix the text alignment for delivery in shopping cart
- display more content on client home page
- add favicon




