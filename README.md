# DAY-PLANNER

 ## This web application functions as an event planner for a day of work.

 ### Current time sensitivity
 
- The calendar spans a workday from 9AM to 5PM. The current date is displayed at the top of the planner. 
- Each work hour is color-coded based on the current time of day. Hours in the past are gray, the present hour is red, and future hours are green.

### Event Saving

- When the user inputs a new event into an hour time block on the planner, s/he can save the event into local storage by clicking the blue save button to the right of the event.If a new event is entered and the save button is not clicked, it will not be saved to local storage.
- When the page is re-visited, saved events are added to the planner from local storage.
- At the bottom of the planner, users can clear all of the previously saved events with the "Clear" button is pressed.

### Coding

- This project utilizes javascript and css. A basic html template and styling sheet was created. Bootstraps 4 was utilized for the styling and for media responsiveness. jQuery was used to select and mainpulate the DOM. Local storage was used to save event data. Moment.js was used to create the time responsiveness in the page.

### Meta

#### [Link](https://hhutku.github.io/day-planner/) for the project.



