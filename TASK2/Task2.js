document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;

if(name=="" || email=="" || message==""){
document.getElementById("msg").innerText="Please fill all fields";
document.getElementById("msg").style.color="red";
}
else{
document.getElementById("msg").innerText="Message sent successfully!";
document.getElementById("msg").style.color="green";
}

});


function addTask(){

let task=document.getElementById("taskInput").value;

if(task=="") return;

let li=document.createElement("li");

li.innerText=task;

li.onclick=function(){
li.remove();
}

document.getElementById("taskList").appendChild(li);

document.getElementById("taskInput").value="";

}