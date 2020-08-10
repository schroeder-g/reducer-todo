# Module Project: The Reducer Pattern - Reducer Todo

This project allows you to practice the concepts and techniques learned in this module and apply them in a concrete project. This module explored the reducer pattern. During the module, you studied what immutability is, what reducers, actions and dispatch are, and how to use the reducer hook. In your project you will demonstrate proficiency of these subjects and principles by creating an application using each of these.

### Commits

Commit your code regularly and meaningfully. This helps both you and your team lead in case you ever need to return to old code for any number of reasons.

## Introduction

In this project, you build an app that let's you display a todo list from reducer state, and update todo items as completed and clear completed todos from the list by dispatching different actions.

## Instructions

### Task 1: Project Set Up

- [x] Create a forked copy of this project.
- [x] Add your team lead as collaborator on Github.
- [x] Clone your OWN version of the repository in your terminal.
- [x] CD into the project base directory `cd reducer-todo`.
- [x] Create a new react app running `npx create-react-app todo --use-npm`.
- [x] CD into the react app directory `cd todo`.
- [x] Start up the app using `npm start`.
- [x] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

### Task 2a: Minimum Viable Product

1. Set an initial state value through a reducer and render a list of todos from that state
2. Add a form that dispatches an "ADD_TODO" action to be able to add a todo item to your list
3. Build a function that let's you mark todo items as completed when you click on them
4. Build a function that let's you clear completed todos when you click on a "Clear Completed" button

#### Build a simple reducer and initial state

- In a folder called `reducers` add a reducer file and build out a simple reducer with just a default return for now
- In the same file, build your initial state object that has a list of todos with the following shape:

```js
{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}
```

- Export both the reducer and the initial state object

#### Set up state in your component

You get to choose how you want to set up your components. Please don't just do this all inside App. I know it is a small and simple project, but you will do yourself a great service by setting your app up as if it were going to be a larger application

- Using the `reducer` hook, set up state in your component. Think about what you'll need in order to use the reducer hook, and think about what it returns.
- Now render your list of todos from your reducer in your app

#### Adding todos

- Build a form to add todos to your list
- Build a function that will dispatch an action to add a new todo
- Write the `case` in your reducer for adding a todo (You can create a unique id with `new Date()`)

#### Toggle the completed field

- Build a function that will dispatch an action to toggle a todo's completed field
- Invoke this new function when you click on a todo
- Style your todo to somehow show that it is completed (be creative here!)
- Write the `case` in your reducer for toggling the completed property

#### Clearing completed todos

- Build a function that will dispatch an action to filter out any completed todos
- Invoke this new function when you click on a "Clear completed" button
- Write the `case` in your reducer for filtering completed todos

### Task 2b: Exit Ticket

Once you begin, you will have 15 minutes to answer the questions [here](https://app.codesignal.com/public-test/SqCyCj55G9hCCd3Ar/ApoPeE7oubSgdg).

The completion of these questions is mandatory for MVP. However, passing the quiz doesn't affect your standing as a Lambda School student whatsoever. This is Lambda School testing itself! Please answer honestly and to the best of your ability without using external references.

### Task 3: Stretch Problems

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- Add the moment library to show in "human speak" when a todo was completed
- Add a property on the todos for when a todo should be completed by. Then display that a todo is "overdue" if it has not been completed by its due date
- Add "tags" to your todos, and display them with your todo list
- Have fun with the styling. Make this something you'd be proud to show off!

## Submission Format
* [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**
* [ ] Fill out your module retrospective form [here](https://forms.lambdaschool.com/module-retrospective) with a link to your PR
