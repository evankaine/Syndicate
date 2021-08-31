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

![imageAlt](https://i.imgur.com/w1E0UVH.png)

- Desktop Landing:

![imageAlt](https://i.imgur.com/93a7HX5.png)
![imageAlt](https://i.imgur.com/aayttox.png)

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

![imageAlt](https://i.imgur.com/NxojmIl.png)


#### Component Architecture

``` structure

src
|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ Landing.css
      |__ Landing.jsx
      |__ Layout.css
      |__ Layout.jsx
|__ screens/
      |__ LegendDetail.css
      |__ LegendDetail.jsx
      |__ Legends.css
      |__ Legends.jsx
      |__ Login.css
      |__ Login.jsx
      |__ Register.css
      |__ Register.jsx
      |__ TipCreate.css
      |__ TipCreate.jsx
      |__ TipEdit.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ Legends.js
      |__ tips.js
```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Basic BE Models     |    H     |     3 hrs      |     2 hrs     |     TBD     |
| BE CRUD Actions     |    H     |     2 hrs      |     1 hrs     |     TBD     |
| BE Auth             |    L     |     2 hrs      |     2 hrs     |     TBD     |
| Seed Data           |    H     |     2 hrs      |     2 hrs     |     TBD     |
| FE Components       |    H     |     3 hrs      |     3 hrs     |     TBD     |
| FE Crud             |    H     |     3 hrs      |     3 hrs     |     TBD     |
| FE Routing          |    H     |     3 hrs      |     2 hrs     |     TBD     |
| FE State            |    H     |     3 hrs      |     2 hrs     |     TBD     |
| Home Page Layout    |    H     |     2 hrs      |     1 hrs     |     TBD     |
| Detail Page Layout  |    H     |     2 hrs      |     2 hrs     |     TBD     |
| Edit Page Layout    |    H     |     2 hrs      |     2 hrs     |     TBD     |
| Create Page Layout  |    H     |     3 hrs      |     3 hrs     |     TBD     |
| Sign In / Sign Up   |    H     |     3 hrs      |     3 hrs     |     TBD     |
| Basic Css           |    H     |     3 hrs      |     3 hrs     |     TBD     |
| Advanced Navbar CSS |    L     |     2 hrs      |     2 hrs     |     TBD     |
| Advanced Home CSS   |    L     |     2 hrs      |     2 hrs     |     TBD     |
| Advanced Detail CSS |    L     |     2 hrs      |     2 hrs     |     TBD     |
| Advanced Edit CSS   |    L     |     2 hrs      |     2 hrs     |     TBD     |
| Advanced Create CSS |    L     |     2 hrs      |     2 hrs     |     TBD     |
| TOTAL               |          |     46hrs      |     40 hrs    |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![imageAlt](https://i.imgur.com/KoywDq5.png)

<br>

***

## Post-MVP

- Add images for content
- Add new tables for weapons and consumbles. Have an armory route on site displaying content

***

## Code Showcase

```
.legend-image {
  height: 400px;
  display: block;
  transition: all .5s ease-in;
  transition: all .5s ease-out;
}
.legend-image:hover {
  transform: scale(1.1);
  opacity: .8;
  transition:opacity .6s;
  transition: all .3s ease-in;
}

.overlay {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: .5s ease;
}

.legend-name {
  font-family: "Agency FB"; 
  color: white;
  font-size: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  overflow: hidden;
  background: linear-gradient(to right, #c7353b, #c7353b 50%, white 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
}

.legend-name:hover {
  opacity: 1;
  background-position: 0 100%;
}
```

## Code Issues & Resolutions

encountered 404 issues when trying to post, edit and delete. these issues were caused by discrepancies in my props names causing values to be undefined.
