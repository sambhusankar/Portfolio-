let header_height=document.querySelector("#header").offsetHeight;
document.querySelector("#bars").onclick =function(){
  document.querySelector(".navs").classList.toggle('active');
  
}

document.getElementById("project_grocc").onclick = function(){
window.location.href="groccery.html"
}

document.getElementById("project_slide").onclick = function(){
window.location.href="slider.html"
}

document.getElementById("project_cube").onclick = function(){
window.location.href="cube.html"
}

let lis=document.getElementById("navs");
lis.childNodes[1].onclick =function(){
 
 let about_y=document.querySelector("#about").getBoundingClientRect();
window.scrollBy(0,about_y.y-header_height);
}

lis.childNodes[5].onclick =function(){
 
 let experience_y=document.querySelector("#experience").getBoundingClientRect();
window.scrollBy(0,experience_y.y-header_height);
}
lis.childNodes[9].onclick =function(){
 
 let project_y=document.querySelector("#project").getBoundingClientRect();
window.scrollBy(0,project_y.y-header_height);
}

lis.childNodes[13].onclick =function(){
 
 let contact_y=document.querySelector("#contact").getBoundingClientRect();
window.scrollBy(0,contact_y.y-header_height);
}
