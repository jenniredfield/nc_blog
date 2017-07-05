# React Blog

## Background

Modern web development favours moving a lot of the logic that traditionally was done on the back-end to the front-end. We can do client-side routing in a React application by listening and manipulating the URL of the browser and swapping components to create the illusion of routing. It's an illusion because with this setup the server serves a single HTML document, our app is still technically a Single Page Application.

Although it's not maintained by the React team at Facebook, React Router is the most popular package for client-side routing in React. It gives us access to a series of higher order components that contain functionality that listens and reacts to the browsers location and provide props to our own components that allows to change the location programmatically.

Your task is to implement a simple React blog application with client side routing using React Router and with the dummy data exposed by the provided API.

## Setup

The starter code provided is a fresh project created witht the package `create-react-app`. If you'd rather have a custom webpack configuration, feel free to delete the provided boilerplate code and create your own. The setup from the previous sprint should be good enough to start. Note: you might need to enable the `historyApiFallback` option on the devServer configuration object ([see docs](https://webpack.js.org/configuration/dev-server/#devserver-historyapifallback))

## Requirements

- It must have a Latest Posts view that shows a list of posts with their titles, author and date. Each post must link to its own Post view.
- It must have a Post view that shows a single post with its body. Posts should be accessible on a parametric route like `/posts/:id`
- It must have an Author view that lists all the posts written by a specific author. Author pages must be accessible on a prametric route like `/authors/:name`
- It must have a custom 404 route for resources that are not found.
- It must be consistently styled with a CSS framework of your choice
- It must fetch data from [this API]() (follow link for documentation)

## Advanced Requirements

- Data from the API is served paginated. A GET request to `/posts` will return the first page with last 10 posts available. Pages are specified using query parameters. To get the second page (pages start at 0) we would have to make a request to `/posts?page=1`. Implement pagination in your post list views so that users can navigate different pages by clicking on links on the website and by modifying the URL (e.g. `/posts/page/3`)
- Bonus points if you can implement pagination with a reusable component that works for both the posts and author views.

## Resources

- [Fetch API Documentation](https://developer.mozilla.org/en/docs/Web/API/Fetch_API)
- [React Router Documentation](https://reacttraining.com/react-router/web/guides/quick-start)
- [Location API](https://developer.mozilla.org/en-US/docs/Web/API/Location)
