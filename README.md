# Project 
## Specifics
* Project name: Cher's Wardrobe
* Team members: Taylor, Julius, Marvin, Karl
* Description: Allows user to select a number of tops and skirts/shorts. Once done with selections, will take user to a page that randomly generates an amazing outfit to wear based on the items picked.
(GUARANTEED YOU WILL LOOK 2% BETTER AT MOST)
* Problem to solve for user: 
  * Cant decide outfit
  * Late to school
  * Have to try on several outfits before deciding
* Solution: 
  * save time
  * helps you decide
  * helps you compare
  * sleep in longer
  * organize wardrobe

## Making a plan
1. Make a drawing of your app. Simple "wireframes"
    * wireframes in miro board at https://miro.com/app/board/o9J_lxPyAAA=/

2) Once you have a drawing, name the HTML elements you'll need to realize your vision

### All Pages 
* elements for *Mac '87 Window Layout* styling
* `<nav> ` for navigating through pages
  * home / dressing room / about us
* `<section> ` for page title

### Page One
* `<section> ` for instructions
* `<section> ` for each clothing category
* `<ul> ` for dynamically inserting images 
* `<button> ` to add event listener for checking minimum
nummber of choices for each category and to take user to *Dressing Room* page 

### Page Two
* `<section> ` constainer for results of randomized tops/skirts/shorts
* `<img> ` to insert results
* `<button> ` to get another randomized result
  * Randomize clothing images/IDs w math.random
  * Display randomized outfit- inject clothes images

### Page Three
* `<div> ` to hold "fun" icons
* `<section> ` for bios
  * `<section> ` for ` <img> ` and ` <p> ` to hold each team member's info.


## TASKS:
* Write Copy
* design data structure
* Assets (!!)
* Grids 
  * Maybe a template? 
* Layout template?
  * 3 button nav: about us, edit choices, randomize outfit, nav bar design 

## EVENT LISTENERS
* Page 1: check selections, navigate to results, alerts if min selections not met.
* Page 1: toggles local storage selectected status
* Page 2: randomize results, populate new images

## Dataset
* Item ID
* name
* image
* Selected = true/false
* category/type
  

## Functions tested

* get function test
* set function test
* switch select test

## STRETCH GOALS

* Weather-specific choices
  * add to dataset  
* Clothing styles
  * Randomize / Edit single clothing items
* Week's worth of outfits / M-F M-S 
* Save favorite outfit combos
  * Set current outfit as an arrays
* Career outfits ie cop firefighter

## Misc notes:

### FILE STRUCTURE
* Landing/Splash = index
* Results
  * HTML
  * CSS
  * JS
* ABOUT US
  * HTML
  * CSS 
  * JS 

### FILE NAMING CONVENTIONS -
* Bring it up in slack/zoom
* Kabob for filenames
* Camel for JS
* Pluralize? 

**Comment Driven Development!**

### DAILY WORKFLOW:
* Meet at 9am (Beginning of day) check in, go over challenges, achievements, check in
* Huddle before lunch (10 min before lunch) 11:50 
* 3pm (2 hr after lunch)
* other
  * Call a huddle if you need?
  * Class time working hours
  * Not immediate urgency: Slack 
  * URGENT - zoom

## ATTRIBUTION 
ChicagoFLF font by Robin Casady (Casady & Greene) - (Public Domain)
http://moorstation.org/typoasis/designers/casady_greene/index.htm









