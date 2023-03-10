// Display group by selecting wich group//
function hide1(){
    document.querySelector('.group1').style.display ='block';
    document.querySelector('.group2').style.display ='none';
    document.querySelector('.group3').style.display ='none';
    document.querySelector('.group4').style.display ='none';
    document.querySelector('.group5').style.display ='none';
    document.querySelector('.group6').style.display ='none';
    document.querySelector('.group7').style.display ='none';
    document.querySelector('.group8').style.display ='none';
}
function hide2(){
    document.querySelector('.group1').style.display ='none';
    document.querySelector('.group2').style.display ='block';
    document.querySelector('.group3').style.display ='none';
    document.querySelector('.group4').style.display ='none';
    document.querySelector('.group5').style.display ='none';
    document.querySelector('.group6').style.display ='none';
    document.querySelector('.group7').style.display ='none';
    document.querySelector('.group8').style.display ='none';
}
function hide3(){
    document.querySelector('.group3').style.display ='block';
    document.querySelector('.group2').style.display ='none';
    document.querySelector('.group1').style.display ='none';
    document.querySelector('.group4').style.display ='none';
    document.querySelector('.group5').style.display ='none';
    document.querySelector('.group6').style.display ='none';
    document.querySelector('.group7').style.display ='none';
    document.querySelector('.group8').style.display ='none';
}
function hide4(){
    document.querySelector('.group4').style.display ='block';
    document.querySelector('.group2').style.display ='none';
    document.querySelector('.group1').style.display ='none';
    document.querySelector('.group3').style.display ='none';
    document.querySelector('.group5').style.display ='none';
    document.querySelector('.group6').style.display ='none';
    document.querySelector('.group7').style.display ='none';
    document.querySelector('.group8').style.display ='none';
}
function hide5(){
    document.querySelector('.group5').style.display ='block';
    document.querySelector('.group2').style.display ='none';
    document.querySelector('.group1').style.display ='none';
    document.querySelector('.group3').style.display ='none';
    document.querySelector('.group4').style.display ='none';
    document.querySelector('.group6').style.display ='none';
    document.querySelector('.group7').style.display ='none';
    document.querySelector('.group8').style.display ='none';
}
function hide6(){
    document.querySelector('.group6').style.display ='block';
    document.querySelector('.group2').style.display ='none';
    document.querySelector('.group1').style.display ='none';
    document.querySelector('.group3').style.display ='none';
    document.querySelector('.group4').style.display ='none';
    document.querySelector('.group5').style.display ='none';
    document.querySelector('.group7').style.display ='none';
    document.querySelector('.group8').style.display ='none';
}
function hide7(){
    document.querySelector('.group7').style.display ='block';
    document.querySelector('.group2').style.display ='none';
    document.querySelector('.group1').style.display ='none';
    document.querySelector('.group3').style.display ='none';
    document.querySelector('.group4').style.display ='none';
    document.querySelector('.group5').style.display ='none';
    document.querySelector('.group6').style.display ='none';
    document.querySelector('.group8').style.display ='none';
}
function hide8(){
    document.querySelector('.group8').style.display ='block';
    document.querySelector('.group2').style.display ='none';
    document.querySelector('.group1').style.display ='none';
    document.querySelector('.group3').style.display ='none';
    document.querySelector('.group4').style.display ='none';
    document.querySelector('.group5').style.display ='none';
    document.querySelector('.group6').style.display ='none';
    document.querySelector('.group7').style.display ='none';
    
}
// Display pleyers by clicking on the team name //
function show1(){
    var x = document.getElementById('mor');
    if (x.style.display === 'none') {
      x.style.display = 'block';
}
   else {
      x.style.display = 'none';
    }
    var x = document.getElementById('sene');
    x.style.display='none';
    var x = document.getElementById('nether');
    x.style.display='none';
    var x = document.getElementById('bel');
    x.style.display='none';
}
function show2(){
    var x = document.getElementById('bel');
    if (x.style.display === 'none') {
      x.style.display = 'block';
}
   else {
      x.style.display = 'none';
    }
    var x = document.getElementById('sene');
    x.style.display='none';
    var x = document.getElementById('nether');
    x.style.display='none';
    var x = document.getElementById('mor');
    x.style.display='none';
}
    
function show3() {
    var x = document.getElementById('nether');
    if (x.style.display === 'none') {
      x.style.display = 'block';
}
   else {
      x.style.display = 'none';
    }
    var x = document.getElementById('sene');
    x.style.display='none';
    var x = document.getElementById('mor');
    x.style.display='none';
    var x = document.getElementById('bel');
    x.style.display='none';
    
} 
function show4() {
    var x = document.getElementById('sene');
    if (x.style.display === 'none') {
      x.style.display = 'block';
}
   else {
      x.style.display = 'none';
    }
    var x = document.getElementById('nether');
    x.style.display='none';
    var x = document.getElementById('mor');
    x.style.display='none';
    var x = document.getElementById('bel');
    x.style.display='none';
} 

// DISPLAY TABLE OF PLAYERS morocco /////
function showtable() {
    var x = document.getElementById('tab1');
    if (x.style.display === 'none') {
      x.style.display = 'block';
}
   else {
      x.style.display = 'none';
    }
    var x = document.getElementById('tab2');
 
    x.style.display = 'none';
    var x = document.getElementById('tab3');
 
    x.style.display = 'none';
} 


function add() {
    var x = document.getElementById('add1');

      x.style.display = 'block';

    var x = document.getElementById('tab1');
    x.style.display='none';
} 


// delete a row table team morocco
function sup(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}
/// add a new row in table morocco///
function addd(){
    var x = document.getElementById('tab1');
    x.style.display='block';
    var x = document.getElementById('add1');
    x.style.display='none';

}
// table of belgium team ////


function showtable1() {
    var x = document.getElementById('tab2');
 
      x.style.display = 'block';
      var x = document.getElementById('tab1');
 
      x.style.display = 'none';
      var x = document.getElementById('add1');
 
      x.style.display = 'none';
      
}
function sup1(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}
function add22(){
    var x = document.getElementById('add2');
    x.style.display='block';
    var x = document.getElementById('tab2');
    x.style.display='none';

}
function adddd(){
    var x = document.getElementById('tab2');
    x.style.display='block';
    var x = document.getElementById('add2');
    x.style.display='none';

}

// display netherland table //
// delete a row //
// add a new row //

function showtable2() {
    var x = document.getElementById('tab3');
 
      x.style.display = 'block';
      var x = document.getElementById('tab1');
 
      x.style.display = 'none';
      var x = document.getElementById('add1');
 
      x.style.display = 'none';
      var x = document.getElementById('tab2');
 
      x.style.display = 'none';
      var x = document.getElementById('add2');
 
      x.style.display = 'none';
      
}
function sup2(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}
function add222(){
    var x = document.getElementById('add3');
    x.style.display='block';
    var x = document.getElementById('tab3');
    x.style.display='none';

}
function addnether(){
    var x = document.getElementById('tab3');
    x.style.display='block';
    var x = document.getElementById('add3');
    x.style.display='none';

}






// display news$



function next() {
    var x = document.getElementById('qat-news');
    if (x.style.display === 'none') {
      x.style.display = 'block';
}
   else {
      x.style.display = 'none';
}
var x = document.getElementById('spa-news');
    x.style.display='none';
    var x = document.getElementById('mar-news');
    x.style.display='none';
}

    function prev() {
        var x = document.getElementById('spa-news');
        if (x.style.display === 'none') {
          x.style.display = 'block';
    }
       else {
          x.style.display = 'none';
    }
    var x = document.getElementById('qat-news');
    x.style.display='none';
    var x = document.getElementById('mar-news');
    x.style.display='none';
}
/* display news by clicking on lire plus*/
function shownews() {
    var x = document.getElementById('mar');
    if (x.style.display === 'none') {
      x.style.display = 'block';
}
   else {
      x.style.display = 'none';
}
    var x = document.getElementById('groups');
    x.style.display='none';
    var x = document.getElementById('qat');
    x.style.display='none';
    var x = document.getElementById('vol3');
    x.style.display='none';
}

/* news display qatar*/

function shownews1() {
    var x = document.getElementById('qat');
    if (x.style.display === 'none') {
      x.style.display = 'block';
}
   else {
      x.style.display = 'none';
}
    var x = document.getElementById('groups');
    x.style.display='none';
    var x = document.getElementById('mar');
    x.style.display='none';
    var x = document.getElementById('spa');
    x.style.display='none';
    var x = document.getElementById('vol3');
    x.style.display='none';
}
/* display news spain */ 

function shownews2() {
    var x = document.getElementById('spa');
    if (x.style.display === 'none') {
      x.style.display = 'block';
}
   else {
      x.style.display = 'none';
}
    var x = document.getElementById('groups');
    x.style.display='none';
    var x = document.getElementById('mar');
    x.style.display='none';
    var x = document.getElementById('qat');
    x.style.display='none';
    var x = document.getElementById('vol3');
    x.style.display='none';
}




