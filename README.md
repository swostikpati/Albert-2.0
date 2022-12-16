# Albert 2.0

## Project Description

New York University has a widely known student information website known as [NYU Albert](https://albert.nyu.edu/) (named after its founder Albert Gallatin). The website is critical to several administrative functions including admissions, course enrollment, etc. and is linked to the database storing the information of every person affliated to the institution. My project was an attempt at creating a revamped version of the website, with modern UI designs, an easier user flow, etc. to enhance the overall user experience.


https://user-images.githubusercontent.com/67205637/208161296-225994f4-df0c-461d-85d8-da7c92bf797a.mp4


### Overview

### Inspiration and Target Audience

NYU Albert is a really important and a widely used website by those affliated to the university. It stores a lot of user data including courses, grades, transcripts, course reviews, finances, etc. for students. But even while being such an important tool, the website as a whole is very obsolete and provides a pretty bad user experience. It is much different from the regular NYU websites providing information to the general public which have much better UI elements.

From a personal experience of things, I have suffered a lot during course registration in NYU Albert. The way the website is designed, makes the process much more complicated than it needs to be and makes the experience of course registration much more stressful. I conducted a user research where I asked students to fill out a completely anonymous form sharing their experience with the website - what they liked, what they disliked, and any feedback that could help with the overall improvement of the website. This is the link to the survey [results](https://docs.google.com/spreadsheets/d/1G2sTYKrhQmre93UE4gNCocgiv6ZYQ7TteUVa0LzOiW8/edit?usp=sharing). Overall the feedback I received also focussed a lot on the issues I mentioned above especially concerning course registration.

Taking away from all these reponses and my personal experience, I knew a Version 2 of the website was extremely necessary. This is what inspired me to take this up as my final project. 

### Concept

NYU Albert is a huge website with a lot of applications and loads of user data. It is very difficult to clone the entire web application and develop it at the same time. For this reason, I thought of focussing on improving a single important functionality. For the purpose of the project, I chose to improve elements of the process of course registration to make it much less stressful. The project doesn't have the actual course enrollment part implemented, but rather focusses more on the steps that lead up to the registration.

### Wireframing

This is the [wireframe](https://github.com/swostikpati/Albert-2.0/blob/main/Wireframe.png) of the website.

## Creative Design

### User Interface and User Experience

The most important part of building this project was to really focus a lot on the simple UI and UX aspects. Given below are some of the key highlights that were implemented and the process and thinking associated with them.

#### • Horizontal navbar
The existing navbar in the screen was an awkward vertical navbar attached to a container instead of the screen as whole. I decided on changing it to a smooth horizontal navbar combining redundant screens (like the Academics tab and grades tab), which made the website instantly look much more modern. 

The code for the custom Navbar component is given below:

Navbar.js
```
<header className={styles.header} id={styles["#heading1"]}>
    <div>
        <nav>
            <ul className={styles.nav_links}>
                <li>
                    <img className={styles.logo} src={logo} alt="logo"></img>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/academics">Academics</Link>
                </li>
                <li>
                    <Link to="/finances">Finances</Link>
                </li>
                <li>
                    <Link to="/resources">Resources</Link>
                </li>
            </ul>
        </nav>
    </div>
    <div><img className={styles.user_icon} src={user_icon} alt="user"></img></div>

</header >
```

#### • Announcements Pane
The current home page began with a huge announcements pane, taking up almost half of the screen pushing more relvant and personalized information to the bottom of the screen. I initially thought of completely removing the announcements pane, but there might be some important information that the university would want to convey to its students. Therefore I put it up as a small card in the side of the screen. 

The announcements pane contained of a imageSlider component wrapped inside the card component. The code for the Announcements pane is given below:

ImageSlider.js
```
import { useState } from "react";
import styles from "./ImageSlider.module.css";
// import { announcementArr } from "../helpers/announcementData.js";


function ImageSlider(props) {
    // state variable to control which announcement is being viewed
    const [currentI, setCurrentI] = useState(0);
    setInterval(() => {
        if (currentI < props.arr.length - 1) {
            setCurrentI(currentI + 1);
        }
        else {
            setCurrentI(0);
        }
    }, 10000)

    // returns a image carousel with all the announcements
    return (
        <div className={styles.main}>
            <div className={styles.bgImg} style={{ backgroundImage: `url(${props.arr[currentI].imageURL})` }}></div>
        </div>
    )
}

export default ImageSlider;
```

#### • For You Page 
This is one of the big features that I planned on introducing. There is just way too much information in Albert to keep track of at all times. In such a scenario, important information tends to get buried which sometimes can have very big consequences to the individual. This causes a lot of anxiety on the students part which leads them to continuously having to monitor different parts of Albert or risk missing something important. The question might come up that why aren't these things communicated through the announcements tab. The reason for this is the fact that sometimes announcements tend to be very generalized and their scope cannot cover specific things important to specific individuals. Therefore there was a strong need for a place to update these specific announcements. This is why I thought of creating a For You Page type card in the Home Page where all these information will be displayed. The information spans extends everything from updates to courses in the enrollement cart, changes in waitlists, grades being updated. fianance holds, etc. 

The For You Page consisted of a card which wrapped divs consisting of the FYP data around. The code is given below.

Fyp.js
```
import styles from "./Fyp.module.css";
import { forYouPageData } from "../helpers/forYouPageData.js";


function Fyp() {
    // returns the For You Page with all the data
    return (
        <div className={styles.main}>
            {
                forYouPageData.map((alert) => {
                    return <div id={alert.id}>{alert.text}</div>
                })
            }
        </div>
    )
}

export default Fyp;
```

#### • Semester segregation 
The current website has this weird way of always opening in the latest semester registered window. Even though this might feel as something logical to do, but if we think about it, the latest semester that we registered has usually not even begun and we are still in the previous semesters. This always leads to absolutely useless clicks in the users part and sometimes when the user is looking for courses, they end up looking in the wrong semester. Segregating semesters into individual semester cards helps a lot in preventing this. This way the user chooses which semester they want to enter into and see the courses for (both enrolled and to be enrolled ones).

The code for each of the semester cards is given below:

Semester.js
```
import styles from "./Semester.module.css";

function Semester(props) {

    // function to control which semester is being selected 
    function semesterDisplayHandler() {
        console.log(`${props.name} clicked!`);
        props.selectSemester(props.name, props.num);
    }

    // renders the semester cards for each semester in the home screen
    return (
        <div className={styles.main} style={{ backgroundImage: `url(${props.url})` }} onClick={semesterDisplayHandler}>
            <div className={styles.text}>
                {props.name}
            </div>
        </div>
    )
}

export default Semester;
```

#### • Pre-requisites fullfilled indication 
A very complicated step in course registration is to validate the courses that are present in the cart. Even though it is a very required step, I don't think the fact that whether someone has fulfilled the pre-reqs of a course or not also be determined in this step. Why should the user put something inside their cart to find out they aren't eligible to take the course. If we were able to indicate this before, it would reduce the time the user spends uselessly. More often than not, the pre-reqs of the courses that are listed in the description section are not exhaustive. To make this process more smoother, I added a indicator which shows whether the users course history fullfills the courses required to take the course or not. 

#### • Number of students enrolled indication 
When a course enters the wailist, they are able to view the number of people on the wailist. Why are we then not able to see the number of students enrolled into each class before enrolling? This would make the process so much more smoother and eliminate last minute stresses caused due to important courses being waitlisted. based on the current scenario, we are expected to have course backups and schedule backups. But how many permuations and combinations do we prepare for? Which course do we give priority while registering. There have been so many scenarios the person could have ended up with a much better course schedule had they registered for a different set of courses which were also fine with them but it was just that they weren't aware which class was how much full. If a sophomore wants to register for a class that is already 14/16 full after Junior registration, more than likely they should start looking for backup courses. But how would they know they have to. Therefore, I decided on displaying the number of people enrolled in every course on top of the course card itself. It is literally a small number but can have such a big effect on how the registration pans out.

#### • Multiple courses selection option 
Food delivery apps, online shopping apps, etc. all allow us to put multiple items in our cart and checkout together. Why then does the current NYU Albert allow the users to put one course in the cart at a time and the users have to repeat the entire process as many times as they want to add new courses to their cart. I added this feature in my project where the user is able to add multiple courses together to their cart and checkout all of them together.

#### • Small UI elements 
I spent a lot of time in making the simple UI elements better. The entire color theme has been taken from the official color pallete and I have made an effort to use more calmer colors in order to reduce anxiety caused by specifc shades of bright colors. I have tried styling every element to make it attractive to the user starting from colored hovering buttons to unique scrollbars. 

## Technical Design

The application was designed using a very modern Tech Stack. The client-side was managed using React JS while the server-side ran on a Node-Express server. I used the Firebase realtime-database to store data about students and courses.

### React JS - Client Side Library

For the purpose of the project we had to use a client-side JS library. I felt React JS would be a good choice considering the fact that it has a lot of reusuable components and also gives the power of creating extremely reactive web-pages rendering vast amounts of content in real-time. Therefore I created a simple react-app using npx and then proceeded to create the application's frontend using React. 

The entire application is rendered in a an app which is wrapped about by a browserRouter to listen for routes in the Navbar. Each page is put into a specific folder called pages. The layout of the website a whole is stored inside Layout.js inside the layout folder. The various components rendered throughout the various screens are placed inside a folder components and the assets and helper arrays are stored are stored in the corresponding directories. Each component is styled separately using CSS modules.This organization helps both in increasing code modularity and plus provides us with custom made reusable components throughout the website. 

### Firebase - Realtime Database

The Firebase Realtime Database was used to store the database of courses and the schema is designed in such a way that it can easily be expanded to include student data in the future. Firebase offers a really powerful and robust database and works well with the other technologies used in my project. 

Initially, the backend Node-Express based server deals with selecting and updating data from the realtime database (which works both online and offline), and sends the data as an API request to the React server. The React server fetches this data. 

Later, the build of the entire React application was put up in a public folder insider the server directory and the folder was served entirely to the backend server. This way I was able to render the entire webpage in the backend server eliminating the need two simulatenously running servers.


## Key Challenges and Solutions

#### • Learning and Implementing React 
Learning and understanding the basic concepts in React was a really difficult task. React is a fast updating framework, so almost 90% of the resources I referred to were already obsolete even if they were just a few months old. Many of the functions and tags used in those resources had already deprecated. This way it began even more difficult to learn thhe framework with understanding enough to implement the website I had proposed. It was a slow learning phase where I felt like re-learning frontend development all over again. Designing and manipulating simple elements took in a lot more time than usual. But in the end I finally got a good enough understanding of the basic concepts. I even delved further into learning advanced stuff like hooks, props, and states and experimented around with them to learn how to display different pieces of information.

#### • Deliberating on UI/UX issues and possible solutions
The application wasn't just meant to be a tech overhaul of NYU Albert. As much as it was necessary to give it a more smoother feel, it was also as important to focus on the UI and UX elements of it. This led to me to deliberate and understand every UI decision I made for the sake of the overall improvement of the application. I tried out several different things in every page and every user flow, and finally decided on the one that looked the most aestheic while still meeting up the expectations of user experience.

#### • Integrating Frontend and Backend

The next challenge in the list was after learning to work with the frontend and the backend separately, it was the integration part. I had never before worked with Node-Express and React together. Implementing the React server to receive requests from the backend server through API requests after the backend pulled data from the realtime Firebase databse was a really complicated process. After going through a number of resources, learning about proxy servers, and understanding how the different elements coudl work together, I was finally able to integrate the frontend and the backend to work together.

#### • Finding out the specifc problem to solve in the existing website and suggesting impactful solutions

The research work before starting to build the wireframe and the application as a whole was a difficult process. First, I had to go through every existing element and see what worked and what really didn't work. After getting this overall view, I started reaching out to people through surveys and 1:1 interactions to understand their views about the current version. Taking in my learnings, it took in a lot of iterations to finally have a rough idea of the specific problems that needed to be solved.

#### • Accessing the Firebase Realtime database

The code that was provided by in the Firebase website for initializing the database dealt with the server.js file as a module. This took away a lot of functionalities that the file initially had and I had to import everything starting from the very "require" statement. It caused a lot of problems to access functions that were existing before and I had to look through lots of troubleshoot guides to implement simple things.

## Potential Next Steps

There is no limit of improving NYU Albert further. There were so many places where I spotted possible improvements during the process of research which I conducted before starting out with my project. These are some of the very recent next steps that can be taken to improve my existing project:

#### • Implementing the registration system using Sockets
My project takes us up until the part of the registration covering the entire process except the part where the person finds themselves enrolled in a course. I thought of implementing it with simple GET and POST requests but then I believed that using Sockets for the purpose would be a much better idea. Adding an extra element of Sockets was very difficult given the scope of the project in the limited timeframe and already heavy tech stack. So the very next improvement that can be made is implement this part using rockets to finally finish a very robust registraion process.

#### • Implementing more backend logic for the For You Page
A lot of the ideas in the project are implemented just in the front-end to help us understand how they would work. Additional backend logic can be added to various components like the For You Page, the pre-req and number of students indicator, etc. to automate several processes.

#### • Creating an Admin profile secured with user authentication (Bcrypt)
Once sockets are implemented for the enrollment process, we can also create additional namespaces for the website where we have an admin namespace to give access to the university registrar to deal with several backend processes. This namespace would be further secured using user authentication using Bcrypt.

#### • Implementing other pages
Once the previous improvments are finished to the Home Page, we can next move on to the other pages. There are several elements in each of these prages that can be developed a lot and the way of information flow and fisplay can be drastically improved.

## User Testing

There was extensive user-testing that was conducted both during building the application and after that. Over 12 people tested during the play-testing phase who provided me with a lot of constructive feedback. The website was finally presented to the entire class and tested by guest speaker [Ruta kruliauskaite](https://rutakru.com/). These are some feedback I received from the final presentation:

"The vacancies are so mysterious on Albert so this would be so helpful"

"Especially since we get time slots for course enrollment, knowing how many vacancies there are would help when looking for a plan B"

"I love how you took into consideration the main elements in Albert that need changing and changing them in a way that will help students."

"really nice interface and albert should have the vacancies information. I need it :)"

"This would be very helpful to check the vacancies and stay updated"

"I think you should send these ideas to NYU IT team"

"vacancies is a very thoughtful feature! I like how u merged modern design with existing design features in albert"

"A cool feature would be subscribing to classes to get email reminders!"

"I would love if the website also shows which courses in New York can be counted as course in NYUAD"


## References

### • [React JS](https://reactjs.org/)

### • [Node JS](https://nodejs.org/en/)

### • [Firebase](https://firebase.google.com/)

### • [Express JS](https://expressjs.com/)
