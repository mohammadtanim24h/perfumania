# Perfumania

### Here is the [Live Website Link](https://perfumania-4c8ba.web.app/) to view it in your browser.

## Project Details

* This is an Inventory management website. Here you can add your products, manage and maintain them. You can keep track of them on this website and much more.

* On the homepage, you will find a navbar with some links to navigate within the website. Also, there is a banner and six inventory items. There is a dashboard to keep track of how many products were sold, total quantity, and the total number of products. There is a top product section which shows us the highest sold products of the last month. They are shown in a descending order. There is a section where you can report issues you faced while using the website (It is not saved in the database for the time being). Lastly, there is a simple static footer.

* On the homepage items section, there is an update button on every item. If you click on it, you will be redirected to a page where you can deliver the product and restock it as you need. But this is a protected page. So, you have to log in to access the page. Also under the inventory items section of the homepage, you have a manage inventories button. If clicked, it will redirect you to the Manage Inventory page. This is also a protected route. Which means you can only access it if you are logged in. There you can see all the products of the website in a tabular form. Also, You can delete any product from there.

* If you log in, you will see a dropdown menu called Inventory on the navbar. It has three dropdown items. Manage items, Add items, and My items. Manage items will take you to the manage inventory page. Add items will take you to Add inventory item page, where you can add your products. Lastly, if you click My Items, it will take you to the my items page. Here you will only see the products you have added. JWT is implemented in the My items page. So you have to have a valid access token to access it. These three dropdown items are protected. So you have to log in to access them. N.B you will also find the add items button on the manage inventories page.

* There is a blogs section where there are answers to four important questions about NodeJs, MongoDB, Databases, and JWT. Also, there is an about section which holds some information about perfumania and its services.

* There is a login link in the navbar which will take you to the login page. From there you can login using email and password. You can also use google and github to login. Facebook login doesn't work, because I haven't implemented the feature yet. You can also register if you don't have an account already. There is a Reset password link if you ever forget your password. If you log in, a logout button will appear in the navbar. If clicked it will log you out.


## Technologies used :
* CSS Framework : Bootstrap
* React Librarys :
    1. React Router
    2. React Bootstrap
    3. React Firebase Hooks
    4. React Icons
    5. React Toastify
    6. React Hook Form
    7. React Helmet Async
    8. Sweet Alert