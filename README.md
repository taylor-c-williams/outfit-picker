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

