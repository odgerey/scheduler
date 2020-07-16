# Interview Scheduler
This project introduces REACT as well as the Jest Test Framework.It is a single page app and was developed incrementally using Storybook as a tool. Full testing has been completed throughout the project phases, first with static testing (ESlint), unit testing (Building hooks), integration testing, and end-to-end testing with Cypress. Core functionalities work. 

## Known issues and project debugging
There were significant version clashes throughout the project, including reaching maximum browsing memory and javascript heap memory which made the whole project crash on Day 5 while working on hooks. A previous commit was used to roll back on by creating a separate tree (temp) using my_repo. The amount of commits are inaccurate as at least 28 commits were done prior to the project crash. The project was debugged and completed on the temp branch. Git rebase was used to merge the files to master safely. The my_repo folder and temp branch were kept out of safekeeping in the eventuality that any bugs remain unresolved and irreparable. 

## Final Product

!["Main page upon load"](https://github.com/odgerey/scheduler/blob/temp/Docs/Screen%20Shot%202020-07-16%20at%201.44.48%20PM.png)
!["When appointment is booked with student name"](https://github.com/odgerey/scheduler/blob/temp/Docs/Screen%20Shot%202020-07-16%20at%201.45.00%20PM.png)
!["Confirm message"](https://github.com/odgerey/scheduler/blob/temp/Docs/Screen%20Shot%202020-07-16%20at%201.45.11%20PM.png)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
