# Portfolio Project

[Mike Krueger Porfolio](https://mickrueg.github.io/portfolio/)

## Website Functionality
My website is a one page application. On desktop, users an see all menu/page options on the main screen. On mobile, I created a drop down menu that displays links to different pages. 

My favorite feature is the site map! When the user clicks "site map", the website opens up a grey/white simple tree of the website. I added hover animations to the text to create an effect that the user is interacting with the back end side of the website.

On the home page, if the user clicks on the image of my face in the bottom right corner, a modal pops up with a suggestion. I had fun added this hidden feature!

## Design & Wireframes
At first, I was unsure of how to begin wireframing my site. I knew that I wanted a clean/modern website appearance with a sleek color scheme, however, I had no vision of what it would look like. So I went to Canva.com and scanned through their template for inspiration until I found a visual layout and appearance that I liked! 

>In Canva.com, I built an exact wireframe of graphically what I would like my website to look like. Having a detailed wireframe was the key to my success in the project. I was able to notate the exact color #ID, opacities, etc. in preparation for planning my CSS. 
>
>![](images/Screen%20Shot%202022-06-27%20at%203.36.20%20PM.png)
>
>In Canva, I was able to design both desktop and mobile layouts exactly how I wanted them. 
>
>![](images/Screen%20Shot%202022-06-27%20at%203.34.51%20PM.png) ![](images/Screen%20Shot%202022-06-27%20at%203.36.54%20PM.png) 
>
>I also identified two color schemes/images that I liked. I couldn't make a decision of which one to go with, so I implemented both! The user can toggle between BEACH and MOUNTAIN themes on the page.
>
>![](images/Screen%20Shot%202022-06-27%20at%203.35.51%20PM.png) ![](images/Screen%20Shot%202022-06-27%20at%203.36.35%20PM.png) 

## Planning

After creating my design in Canva.com, I created a psuedocode file and started planning in the following three phases: (1) CSS; (2) HTML; (3) JavaScript

### (1) CSS
CSS was easy to start because I was able to use Canva for reference. I wrote down all layer colors, opacities, and fonts used. 

### (2) HTML
For the HTML piece, I referenced my design and the flex-box lesson that we did in class. In handwriting, I wrote down the nav/div/main elements and how they all overlapped one another. I remembered that it was important to design the layout in mobile first. And then subsequently, use media queries to move mobile elements around to fit the larger screens.

### (3) JavaScript
I notated each element that would need an event listener and the expected action. The JavaScript code is short and to the point.

## Implementation & Technologies Used
I started implementing by building the HTML layout, then styling with CSS and adding JavaScript functionality afterwards. I found that 90% of my time on this project was spent in CSS. With over 700 lines of CSS code, I feel that I learned a ton about CSS on this project. GitHub says almost half my coding is done in CSS. 

![](images/Screen%20Shot%202022-06-27%20at%203.49.14%20PM.png)

### CSS
The CSS styles  I learned in this project include: 
- `display: flex`
- `transition`
- `background-image`
- `background-color`
- `box-shadow`

### Importing Fonts, Images, and Icons
I imported a number of social media logos (different colors) and background images. I also used Google Fonts and Google Icons throughout the site. Using Google Icons was great because it allowed me to change the icon color and formatting within CSS (this prevented me from having to download multiple icons with different colors).

## Website Improvements
On day two of development, I learned how to deploy my page on GitHub. Over the weekend, I improved the website through a lot of feedback from friends and my parents. 

## Screenshots of Application

Desktop
>![](images/Screen%20Shot%202022-06-28%20at%2010.48.26%20AM.png) 
>![](images/Screen%20Shot%202022-06-28%20at%2010.48.35%20AM.png) 
>![](images/Screen%20Shot%202022-06-28%20at%2010.48.42%20AM.png) 
>![](images/Screen%20Shot%202022-06-28%20at%2010.48.50%20AM.png) 

Mobile
>![](images/Screen%20Shot%202022-06-28%20at%2010.50.59%20AM.png) 
>![](images/Screen%20Shot%202022-06-28%20at%2010.51.24%20AM.png) 

## Unsolved Problems
On some of the pages of the application, the content is larger than the page and the user is required to scroll to see the content. However, the content sits in a grey viewscreen hovers above the bottom edge of the screen by 10%. As a result, from the user's perspective, it is unclear that more content exists and needs to be scrolled down. I would have liked to add a drop down arrow or scroll animation to make it more evident that more content exists and requires the user to scroll but I could not figure out how.

## User Stories
- A friend is texted a link to the portfolio site and wants to view the app on their phone. 
- A friend wants to see animations and modern look on the application.
- A recruiter finds the portfolio linked on LinkedIn and wants to compare the website to other job applications. The recruiter wants to intuitively be able to navigate the page with no major bugs or errors. 
- A recruiter wants to find my contact info listed on the page without going past the first page.
- A user on their phone with limited cell service wants to be able to load the application quickly.