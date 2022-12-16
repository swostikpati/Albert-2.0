# Albert 2.0

## Project Description

New York University has a widely known student information website known as NYU Albert (named after its founder Albert Gallatin). The website is critical to several administrative functions including admissions, course enrollment, etc. and is linked to the database storing the information of every person affliated to the institution. My project was an attempt at creating a revamped version of the website, with modern UI designs, an easier user flow, etc. to enhance the overall user experience.

/video

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

#### • Horizontal navbar - The existing navbar in the screen was an awkward vertical navbar attached to a container instead of the screen as whole. I decided on changing it to a smooth horizontal navbar combining redundant screens (like the Academics tab and grades tab), which made the website instantly look much more modern.

#### • Announcements bar - The current home page began with a huge announcements pane, taking up almost half of the screen pushing more relvant and personalized information to the bottom of the screen. I initially thought of completely removing the announcements pane, but there might be some important information that the university would want to convey to its students. Therefore I put it up as a small card in the side of the screen.

#### • For You Page - This is one of the big features that I planned on introducing. There is just way too much information in Albert to keep track of at all times. In such a scenario, important information tends to get buried which sometimes can have very big consequences to the individual. This causes a lot of anxiety on the students part which leads them to continuously having to monitor different parts of Albert or risk missing something important. The question might come up that why aren't these things communicated through the announcements tab. The reason for this is the fact that sometimes announcements tend to be very generalized and their scope cannot cover specific things important to specific individuals. Therefore there was a strong need for a place to update these specific announcements. This is why I thought of creating a For You Page type card in the Home Page where all these information will be displayed. The information spans extends everything from updates to courses in the enrollement cart, changes in waitlists, grades being updated. fianance holds, etc. 

#### • Semester segregation - The current website has this weird way of always opening in the latest semester registered window. Even though this might feel as something logical to do, but if we think about it, the latest semester that we registered has usually not even begun and we are still in the previous semesters. This always leads to absolutely useless clicks in the users part and sometimes when the user is looking for courses, they end up looking in the wrong semester. Segregating semesters into individual semester cards helps a lot in preventing this. This way the user chooses which semester they want to enter into and see the courses for (both enrolled and to be enrolled ones)

#### • Pre-requisites fullfilled indication - A very complicated step in course registration is to validate the courses that are present in the cart. Even though it is a very required step, I don't think the fact that whether someone has fulfilled the pre-reqs of a course or not also be determined in this step. Why should the user put something inside their cart to find out they aren't eligible to take the course. If we were able to indicate this before, it would reduce the time the user spends uselessly. More often than not, the pre-reqs of the courses that are listed in the description section are not exhaustive. To make this process more smoother, I added a indicator which shows whether the users course history fullfills the courses required to take the course or not. 

#### • Number of students enrolled indication - When a course enters the wailist, they are able to view the number of people on the wailist. Why are we then not able to see the number of students enrolled into each class before enrolling? This would make the process so much more smoother and eliminate last minute stresses caused due to important courses being waitlisted. based on the current scenario, we are expected to have course backups and schedule backups. But how many permuations and combinations do we prepare for? Which course do we give priority while registering. There have been so many scenarios the person could have ended up with a much better course schedule had they registered for a different set of courses which were also fine with them but it was just that they weren't aware which class was how much full. If a sophomore wants to register for a class that is already 14/16 full after Junior registration, more than likely they should start looking for backup courses. But how would they know they have to. Therefore, I decided on displaying the number of people enrolled in every course on top of the course card itself. It is literally a small number but can have such a big effect on how the registration pans out.

#### • Multiple courses selection option - Food delivery apps, online shopping apps, etc. all allow us to put multiple items in our cart and checkout together. Why then does the current NYU Albert allow the users to put one course in the cart at a time and the users have to repeat the entire process as many times as they want to add new courses to their cart. I added this feature in my project where the user is able to add multiple courses together to their cart and checkout all of them together.

#### • Small UI elements - I spent a lot of time in making the simple UI elements better. The entire color theme has been taken from the official color pallete and I have made an effort to use more calmer colors in order to reduce anxiety caused by specifc shades of bright colors. I have tried styling every element to make it attractive to the user starting from colored hovering buttons to unique scrollbars. 

## Technical Design

The application was designed using a very modern Tech Stack. The client-side was managed using React JS while the server-side ran on a Node-Express server. I used the Firebase realtime-database to store data about students and courses.

### React JS - Client Side Library

### Firebase - Realtime Database

## Key Challenges and Solutions

#### • Learning and Implementing React 
mention about tech that keeps changing

#### • Deliberating on UI/UX issues and possible solutions

#### • Integrating Frontend and Backend

#### • Finding out the specifc problem to solve and suggesting impactful solutions

#### • Working with Firebase Realtime Database locally

## Potential Next Steps

There is no limit of improving NYU Albert further. There were so many places where I spotted possible improvements during the process of research which I conducted before starting out with my project. These are some of the very recent next steps that can be taken to improve my existing project:

#### • Implementing the registration system using Sockets

#### • Implementing more backend logic for the For You Page

#### • Creating an Admin profile

#### • Implementing other pages

## User Testing

There was extensive user-testing that was conducted both during building the application and after that. Over 12 people tested during the play-testing phase who provided me with a lot of constructive feedback. The website was finally presented to and tested by _ . These are some pictures from the final presentation.

## References
