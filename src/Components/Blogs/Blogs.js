import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import "./Blogs.css";

const Blogs = () => {
    return (
        <div className="container">
            <PageTitle title="Blogs"></PageTitle>
            <div className="blogs-container">
                <div className="blog">
                    <h4>Difference between Javascript and Nodejs</h4>
                    <p>
                        Javascript is a high-level interpreted programming
                        language. On the other hand, Nodejs is a Javascript
                        runtime environment that allows Javascript code to run
                        outside the browser. Javascript is normally used in the
                        front-end whereas Nodejs is mostly used in backend
                        development. Javascript can run on any browser engine
                        like Spidermonkey of Firefox or JS core of safari. But
                        Nodejs can only run on v8 engine.
                    </p>
                </div>
                <div className="blog">
                    <h4>
                        When should you use nodejs and when should you use
                        mongodb?
                    </h4>
                    <p>
                        Nodejs is a Javascript runtime environment. I should use
                        Nodejs when I need a server for event-driven,
                        input/output, and network heavy Web or Mobile
                        Application. Where there will be a lot of real-time
                        activities. MongoDB is a NoSQl document-based database.
                        I should use MongoDB when I don't need a structured
                        database. It could be structured or unstructured. When I
                        need some scalability, flexibility and dynamic schema in
                        my database. MongoDB is document-based unlike the
                        traditional table, rows and column-based SQL databases.
                    </p>
                </div>
                <div className="blog">
                    <h4>Differences between SQL and NoSQL databases.</h4>
                    <p>
                        SQL stands for Structured Query Language. Whereas NoSQL
                        means non SQL or not only SQL. As the name suggests,
                        data in SQL databases are structured. The data in SQL
                        databases are stored in a rigid, complex, and tabular
                        schema with fixed rows and columns. On the other hand,
                        NoSQL databases are non-relational, unlike SQL
                        databases. Data in NoSQL databases are stored in various
                        ways. They can be stored as documents, key-value pairs,
                        or in tabular form. NoSQL databases are much more
                        flexible and scalable than SQL databases. Also, queries
                        are much faster in NoSQL databases.
                    </p>
                </div>
                <div className="blog">
                    <h4>What is the purpose of jwt and how does it work?</h4>
                    <p>
                        JSON Web Token often abbreviated as JWT are JSON
                        objects which are used to securely transfer data on the
                        web. JWT is mostly used for data transmission,
                        authentication, and authorization. When a user logs in
                        to an application, the application creates a jwt and
                        sends it to the user. It is stored in the user's
                        browser. When the user requests something on the website
                        the token is sent back to the server to check which
                        routes, services, and resources are allowed to the user.
                        When a user tries to login into the website after the
                        token is saved on the user's browser, the token is used
                        to identify the user.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
