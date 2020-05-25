# dropCircle
some colorful circle dropping on screen

Using this plugin is unlimited.

/////////////////////
Welcome to the dropCircle wiki!

1. install <br />
  (1)  download dropWater.js <br />
  (2)  prepare html and css. <br />

//--  example --

    1) html :
    <script src = "[yourpath]/dropWater.js">
    <div class = "here"></div>
    2) css :
    .here{background-color : gold; width : 1200px; height:100%}
    .waterCircle{border-radius:100%} /* don't change classname before you modify dropWater.js */


  (3) just call function.

//-- example --

      <script>dropWater('here')</script>
<br /><br />

2. fix other style <br />
 (1) squareDrop : just change your css.<br />
 
//-- example : 


.waterCircle{border-radius:3px} or just don't insert this line.


  (2) more colorful : edit dropWater.js
//-- edit line 9.


['red','#445533','rgba(233,10,24,26)','black','cornflowerblue','tomato'...];


or you can just delete all except white, as you want to see snow drop.

  (3) more slow drop : edit dropWater.js<br />
//--edit line 34.<br />
  this.top += 0.5;<br />
<br />
or you can input minus.<br />
  this.top += -1;<br />
you can see ungravity mode. but if you want more beautiful screen, change circle's birth Y-location in line 44.<br />
<br />
or you can change more fast drop.<br />
  this.top += 3;<br />
but I recommend under 8. if over 9, 10 and more, visitors can't see the circles...<br />
<br />
  (4) larger circle : edit dropWater.js<br />
//--edit line 44. 1st number.<br />
  var aaa = new Circle(100, ....);<br />
<br />
  (5) more blurry circle : edit dropWater.js<br />
//--edit line 44. 3rd number.<br />
  var aaa = new Circle(..., ..., 30, ...);<br />
<br />
  (6) less widly spread : edit dropWater.js<br />
//--edit line 44. 4th number.<br />
  var aaa = new Circle(..., ..., ..., random(70));<br />
input with percentbasis number. If you input just number not call function random(), you can see circle drop in a column.<br />
<br />
(7) more circles : edit dropWater.js<br />
//--edit line 55. or 58.<br />
55:  }, 4000);<br />
or<br />
58:  }, 40);<br />
<br />
if you changed drop speed to slower, you must change this line to higher number. Because, this plugin is designed to prevent slow performence, delete earlier element. so, slow circle speed make some whitespace your canvas. so you once change you circle speed, you must change line 55 to higher number.<br />
<br />
another way you can see more dense circles, you can change line 58, to lower number.<br />
<br />
**Caution!** don't change to under 30, I recommend. Too many element interrupts your visitor, Makes slow browsing.<br />
<br />
/*=============*/<br />
<br />
I'm not expert in this part, but want to be, so maybe this isn't perfect way, maybe difficult to make background as you want, I will edit this plugin to use more easily like many other plugin.<br />
<br />
thanks for read this.<br />
<br />
you can contact me kind65505256@gmail.com
