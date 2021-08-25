# The Syndicate

## Overview

The Syndicate is a full stack application that allows users to browse legend characters from the game Apex Legends. Authorized users have the ability to create, update and delete tips/tricks which are associated with a selected legend on the detail page. This app utilizies Ruby on Rails on the backend, and React on the frontend.

<br>

## MVP

<br>

### Goals

- Create a backend using rails
- Create full CRUD functionality for creating, updating, reading, and deleting post information
- User authentication to limit user interaction with the post content

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front-end user interaction and state management through manipulation of a virtual DOM.|
|   React Router   | Site navigation and routing for single page applications |
|      Rails       | Backend model-view-controller framework for Ruby|
|      Axios       | HTTP client for the browser and node.js |

<br>

### Client (Front End)

#### Wireframes

- All Wireframes:

![imageAlt](https://i.imgur.com/rcQa55Z.png)

- Desktop Landing:

![imageAlt](https://i.imgur.com/kTeLqHP.png)
![imageAlt](https://i.imgur.com/Nyt4wER.png)

- Desktop Index:

![imageAlt](https://i.imgur.com/TI8K1NO.png)
![imageAlt](https://i.imgur.com/GfApRWS.png)

- Resource Detail:

![imageAlt](https://i.imgur.com/8Gnm6Dx.png)
![imageAlt](https://i.imgur.com/q1tH50b.png)

- Sign In:

![imageAlt](https://i.imgur.com/JsY93bk.png)
![imageAlt](https://i.imgur.com/9QTUjn6.png)

- Sign Up:

![imageAlt](https://i.imgur.com/Ey0NGI4.png)
![imageAlt](https://i.imgur.com/mr3CY1U.png)


- Create Post:

![imageAlt](https://i.imgur.com/G7RE0eL.png)
![imageAlt](https://i.imgur.com/UUTqQ1I.png)

- Edit Post:

![imageAlt](https://i.imgur.com/Gi3Mk3J.png)
![imageAlt](https://i.imgur.com/DIIgzAH.png)

- Tablet:

![imageAlt](https://i.imgur.com/CI0FFoF.png)

#### Component Tree

![imageAlt](https://i.imgur.com/uQvqoZ5.png)


#### Component Architecture

``` structure

src
|__ Layout/
      |__ Nav
            |__Nav.jsx
      |__ Footer
            |__ Footer.jsx
      |__ SignUp
            |__ SignUp.jsx
      |__ SignIn
            |__ SingIn.jsx
|__ components/
      |__ Home
            |__ Home.jsx
      |__ Legends
            |__ Legends.jsx
            |__ LegendDetail.jsx
      |__ Tips
            |__ Tips.jsx
            |__ CreateTip.jsx
            |__ EditTip.jsx
            |__ DeleteTip.jsx
|__ services/

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Basic BE Models     |    H     |     3 hrs      |               |     TBD     |
| BE CRUD Actions     |    H     |     2 hrs      |               |     TBD     |
| BE Auth             |    L     |     2 hrs      |               |     TBD     |
| Seed Data           |    H     |     2 hrs      |               |     TBD     |
| FE Components       |    H     |     3 hrs      |               |     TBD     |
| FE Crud             |    H     |     3 hrs      |               |     TBD     |
| FE Routing          |    H     |     3 hrs      |               |     TBD     |
| FE State            |    H     |     3 hrs      |               |     TBD     |
| Home Page Layout    |    H     |     2 hrs      |               |     TBD     |
| Detail Page Layout  |    H     |     2 hrs      |               |     TBD     |
| Edit Page Layout    |    H     |     2 hrs      |               |     TBD     |
| Create Page Layout  |    H     |     3 hrs      |               |     TBD     |
| Sign In / Sign Up   |    H     |     3 hrs      |               |     TBD     |
| Basic Css           |    H     |     3 hrs      |               |     TBD     |
| Advanced Navbar CSS |    L     |     2 hrs      |               |     TBD     |
| Advanced Home CSS   |    L     |     2 hrs      |               |     TBD     |
| Advanced Detail CSS |    L     |     2 hrs      |               |     TBD     |
| Advanced Edit CSS   |    L     |     2 hrs      |               |     TBD     |
| Advanced Create CSS |    L     |     2 hrs      |               |     TBD     |
| TOTAL               |          |     46hrs      |               |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![imageAlt](https://i.imgur.com/KoywDq5.png)

<br>

***

## Post-MVP


***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
