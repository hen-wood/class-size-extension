#a/A Cohort Stats Extension
This extension works on the classmates tab of progress tracker. It starts by displaying the number of
students in the cohort. Any changes in class size (students lost/gained) will also be noted the day after assessments (or whenever progress tracker updates).

It uses your own local storage on chrome and will only check for updates when the page is visited,
so the first time the page is visited it will say there are no changes. The next time changes occur on the page, it should update. It has three sets to compare. One
for "last week" and one for "this week" to determine the individual student changes and overall change in class size, then one for "current week" to check
if actual changes have occurred on the page. The page must be visited at least once a week for the week-over-week changes to be accurate. Total Size will
always be accurate.

##What it looks like when changes occur:

<img width="599" alt="changes" src="https://user-images.githubusercontent.com/104668677/198858681-1046bc50-4d0c-4b05-8dc3-8f3c364a1508.png">

##What it looks like when no changes occur:

<img width="527" alt="nochanges" src="https://user-images.githubusercontent.com/104668677/198858688-78b5a0bd-fba4-436e-968d-de926944b0f8.png">

#Installation

##Step 1: 

```git clone``` this repo, then go to the "Manage Extensions" page in chrome

<img width="168" alt="stepone" src="https://user-images.githubusercontent.com/104668677/198858305-2397a683-03ce-44ef-83da-a0edb69c5873.png">

##Step 2:

Turn on developer mode in the upper right hand corner

<img width="344" alt="steptwo" src="https://user-images.githubusercontent.com/104668677/198858423-418c04a7-354d-470f-ab17-0b1595919b9f.png">

##Step 3:

Click the "Load Unpacked" button in the upper left corner

<img width="204" alt="stepthree" src="https://user-images.githubusercontent.com/104668677/198858445-14c6b162-fe99-4c23-ad91-90e30d7ae933.png">

##Step 4:

Select the class-size-extension directory and try it out. 
