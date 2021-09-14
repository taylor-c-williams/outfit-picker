## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision

PG ONE 
------
- div for title and for instructions
- FORM: -- event listeners on images, submit button
- grid element (divs, spans) with images ===> shirt, pants, etc

- Styling to show status of STATE ==> picked true / fals


- button >>> disabled until min reqs met
- === at least 2 pix per category ?
    JSON some data -- picked = true
    directs to page 2
    
    
PG TWO
-------
- DRESS YO'SELF
- Section 
  -for guy in underwear = background img
  - divs to inject clothing items: hat, shirt, pants, shoes etc -- defined/same sizes 
    -- Stretch: display picks
    
- RANDOMIZE BUTTON >>
    - Randomize clothing images/IDs w math.random
    - Display randomized outfit- inject clothes images 
    

- Back button = edit choices, directs to pg 1


PG THREE - About Marvin
----
- pictures of us in crazy outfits / superimposed Cher's yellow plaid outfit (!! <3 ) 
- Bio - we are developers who live online
DIV: Images
DIV: bio 
- Grid


TASKS:
-- Write Copy
-- design data structure
-- Assets (!!)
-- Grids -- Maybe a template? 
-- Layout template? --- 3 button nav: about us, edit choices, randomize outfit, nav bar design 


-- Minimum choice requirements? 


[[ EDIT CHOICES || RANDOMIZE OUTIFT || ABOUT US ]]
    TITLE
   DIRECTIONS

----GRID


4) For each HTML element ask: Why do I need this?

6) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"

EVENT LISTENERS >>>> 
  PG 1 / Randomize
  PG 2 / Edit

8) Is there some state we need to initialize?
 Dataset --- 
  Item ID
  item image
  Picked = true/false >> How many
  category/type
  
  
10) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?

Button is disabled until minimum choice requirements are passed 
>>> Alert! You need more shirts!
Picked = true / false
Randomize picked items
inject/populate 

Grid items/images = checkboxes w event listeners

12) Think about how to validate each of your steps




Test 3 different functions:

- RANDOMIZE
 math.random x chosen array length
 displayed item = random index number
 inject random index item/image into outfit page
 
 (images live in dataset)



- CHOOSE item <= lives on checkbox event listener
 >>> array.filter = items that are picked, save to const
 >>> const pickedClothes = array.filter.picked
 >>> if (pickedClothes < 3 [minimum]){
 >>> alert('PICK MORE!')
 >>> Else { window.location = outfits} 
 
 -- changes picked = true
 -- creates new array of picked items (.push)
 
 
 - RENDER
inject items/assets into page 2 based on picked items array

SUBMIT BUTTON : 
check if pickedItems < 3
then disable submit button


14) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
15) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

const shirtPicks = shirts.true;

if (shirtPiccks < 3){
button = disabled,
alert('pick more!!')}
else {window.location = outfits}

>>> Array .filter >>> all shirts that picked = true, save to const


STRETCH GOALS

- Weather
    - add to dataset
   
- Clothing styles
- * Randomize / Edit single clothing items
- * Week's worth of outfits / M-F M-S 
-       - Save favorite outfit combos
-       - Set current outfit as an arrays
- Career outfits ie cop firefighter

MVP
- clothing colors



README:
- Name of Project:
-   Miss Match
-   Dress yo'self
-   MISMATCH
-   
- names of team members
 - ---* co co hollywood *---
 - karl (pretty out there)
 - taylor
 - Julius 
-   
- description of proj
-       GUARANTEED YOU WILL LOOK 2% BETTER AT MOST
-       
- What is our problem? I cant decide which outfit blah blahb
-       --- solution:: outfit rando
-       
-  Attribute credit where is due 


FILE STRUCTURE
- Landing/Splash = index
- Results -
-      - HTML
-      - CSS
-      - JS
- ABOUT US -
-       - HTML
-       - CSS 
-       - JS 

FILE NAMING CONVENTIONS -
- Bring it up in slack/zoom
- Kabob for filenames
- Camel for JS
- Pluralize? 

==>>> Comment Driven Development

DAILY WORKFLOW:
- Meet at 9am (Beginning of day) check in, go over challenges, achievements, check in
- Huddle before lunch (10 min before lunch) 11:50 
- 3pm (2 hr after lunch)

- Call a huddle if you need?

- Class time working hours
-  Not immediate urgency: Slack 
-  URGENT - zoom

- TESTING -
- Picked/chosen item - Pure
- Randomize --- IMPURE!!! 
- Render - Pure


ATTRIBUTION 
----
ChicagoFLF font by Robin Casady (Casady & Greene) - (Public Domain)
http://moorstation.org/typoasis/designers/casady_greene/index.htm









