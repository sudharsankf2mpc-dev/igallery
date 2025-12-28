# Ex.07 Design of Interactive Image Gallery
## Date:
28-12-2025
## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
gallery.html
```
<html>
<head>
    <title>Interactive Image Gallery</title>
    <link href="gallery.css" rel="stylesheet">
    <script src="gallery.js"></script>
</head>
<body>
<header>
    zootopia image gallery
</header>
<div class="main">
    <div class="card">
        <img src="zoo1.jpeg" id="Image">
        <p id="Text">zootopia 1##</p>
        <div class="btns">
            <button onclick="changeImage('prev')">Previous</button>
            <button onclick="changeImage('next')">Next</button>
        </div>
    </div>
</div>
<footer class="footer">
    &copy;DHARSHINI K
</footer>
</body>
</html>
```
gallery.css
```
body {
    background: rgb(188, 137, 137);
    padding-top: 10px;
    padding-bottom: 10px;
}
header 
{
    background: rgb(91, 7, 116);
    color: white;
    text-align: center;
    padding: 2px;
    font-size: 23px;
    font-weight:bolder;
}
.main 
{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
.card 
{
    background: rgb(178, 117, 143);
    padding: 25px;
    border-radius: 15px;
    text-align: center;
    width: 600px;
    height:auto;
}
.card img {
    width: 100%;
    height: 450px;
    border-radius: 12px;
    object-fit: cover;
}
p
{
    margin: 15px 0;
    font-size: 18px;
    font-weight: 600;
}
.btns 
{
    display: flex;
    justify-content: center;
    gap: 10px;
}

.btns button 
{
    background:rgb(92, 119, 131);
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    cursor: pointer;
}
.footer 
{
    background: rgb(1, 22, 7);
    color: white;
    text-align: center;
    padding: 15px;
    font-size: 25px;
    margin-top: 19px;
}
```

galler.js
```
const gallery = [
    { src: "zoo1.jpeg", caption: "zootopia 1##" },
    { src: "zoo2.jpeg", caption: "zootopia 2##" },
    { src: "zoo3.jpeg", caption: "zootopia 3##" },
    { src: "zoo4.jpeg", caption: "zootopia 4##" },
];
let index = 0;
function changeImage(type) {
    if (type === "next") 
    {
        index++;
        if(index >= gallery.length)
        {
            index = 0;
        }
    }
    if (type === "prev") 
    {
        index--;
        if(index < 0)
        {
            index = gallery.length - 1;
        }
    }
    document.getElementById("Image").src = gallery[index].src;
    document.getElementById("Text").innerText = gallery[index].caption;
}
```
## OUTPUT:
![alt text](<image 1.png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
