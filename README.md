# Sorting Hat

## This is a HOWARTS SORTING HAT that randomly sorts a new student into a house or can expel students who then become Death Eaters.


## About the User -- 
-The ideal user for this application is an educator 
-They have people in a classroom or group setting and would like to sort them into random groups. Having a love for Harry Potter helps :)
-The Student cards can be sorted by house.


## Features --
-When "Lets Begin" button is clicked a modal with a form should pop up that has an input to add a new student.
-When "Sort" is clicked the new student is randomly placed into a house and their card is fixed onto the DOM.
-Students only in specific houses can be shown when the button for each house is clicked.
-There is a seperate container for expelled students called Death Eaters. When a student is expelled their card is given a Death Eater mask.

## -
-I have deployed this project at: https://timely-phoenix-01bfac.netlify.app/
-A brief walkthrough is here https://www.loom.com/share/e1ff1dfd1383436eb3b01d29db58b00a



## Screen Shots
<img width="721" alt="Screenshot 2023-05-06 at 8 37 11 AM" src="https://user-images.githubusercontent.com/120412248/236627885-5e4fce04-2dd8-4fd4-97e6-1654108229d3.png">
<img width="721" alt="Screenshot 2023-05-06 at 8 36 59 AM" src="https://user-images.githubusercontent.com/120412248/236627890-15160024-2a55-46ef-a97c-7e6016f7cc4f.png">
<img width="721" alt="Screenshot 2023-05-06 at 8 36 40 AM" src="https://user-images.githubusercontent.com/120412248/236627899-971de98f-b3ac-455f-8b59-2af13476f9b1.png">

## Contributors --
- Jared Anderson https://github.com.drumstrum88
## Goals
The goal of this project is to test your knowledge and to have a FUN time stretching yourself on your FIRST independent application that will become a part of your portfolio.

Focus on MVP. Do not spend a ton of time styling initially. Hit functionality first and then spend time on the styling of the project using bootstrap.

- READ THROUGH ALL OF THE INFORMATION BELOW before planning how you will tackle the project.
- Check the Issue Tickets to organize your process. You will have all week in class to work on this in class. 
- PLEASE submit questions in help tickets if you need help. We will guide you to the resources that are available to you.
- When done, tell an instructor. Everyone will present how far they got AND their favorite piece of code that they wrote to an instructor.
- MOST OF ALL HAVE FUN!!!!!

## Instructions
You are in charge of bringing the Hogwarts sorting hat to life! 

This is what the finished app should have:
- To start off with, you will use a [bootstrap card](https://getbootstrap.com/docs/5.0/components/card/#header-and-footer) to have your sorting hat introduce itself and start the sorting process (by clicking on a button). The form should not be on the DOM until the button click happens.

- A [bootstrap form](https://getbootstrap.com/docs/5.0/forms/overview/) will then appear to fill in the student's name and a button to sort. This should then assign the student to a random house (Gryffindor, Hufflepuff, Ravenclaw, or Slytherin). 

- On sorting a student, the form should clear and a [bootstrap card](https://getbootstrap.com/docs/5.0/components/card/) with the student's name and a random house assignment should print below the form. 

- You should also be able to expel a student after they have been sorted, which should remove their card from the student array and move them to Moldy Voldy's Army.

In the end, your app will look something like: 

![screencapture-drt-sorting-netlify-app-2022-04-23-14_28_47](https://user-images.githubusercontent.com/29741570/164943525-d20275be-c312-42d1-9730-0c1fd3fd9834.png)


<!-- [See Demo](https://drt-sortinghat.netlify.app/)
 -->
## Technical Requirements
- You MUST plan your project and highly suggest using issue tickets. There are a few that have been provided for you to use already. Continue to add to these so you know what work you need to complete. 
- You MAY use the `renderToDom()` function that we worked on in class, but you also need to be able to explain it if you use it
- You have to create a data structure for your project. Review all the elements that need to be on the DOM and create the structure accordingly
- You must use [Boostrap](https://getbootstrap.com/) to style your page components
- You must use a loop other than a `for loop`
- Your JS file should be comprised of functions, no actions should happen in your code outside of a function except for your initial `startApp()` function
- Your code MUST be YOUR code. Do not copy and paste code into your project. Type every bit of it out
- Your HTML and JS should all have proper indentation
- Helpful Form: An error message shows if a user tries to sort a student without filling out the form
- Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.
- Add filter buttons to filter the non-expelled students by house

## DEFINITION OF DONE
Once you have completed all the technical requirments, you should complete the following:
- [README Requirements](https://github.com/orgs/nss-evening-web-development/discussions/13)
- **RECOMMENDED** Loom Video: [Sign up for Loom](https://www.loom.com/signup) and record a video of you walking through your app 

## Expel Button Hints
Think of a way you can expel students without just hiding those divs on the page. This would mean when the button is clicked you modify the array of students and pass the new array into your `renderToDom()` function.  Double hint - put a unique id in the student object when you create them.

## Optional Bonus
- House Colors: The color of the student's card changes depending on which house they were sorted.
- Card Sorting/Ordering: Sort the student cards by some criteria (i.e. alphabetically by name, by house)
