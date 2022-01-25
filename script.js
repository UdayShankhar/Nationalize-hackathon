document.body.innerHTML = `    
<h1 id="heading"><u>Nationalize API</u></h1>
<div class="container">
<input type="text" id="demo" placeholder="Name">
<button id="btn">CHECK</button>
</div>
<div id="display"></div>
`

let btn1 = document.getElementById("btn");

btn1.addEventListener("click",async function x(){
   try{ 
       let get = document.getElementById("demo").value;
    let data = await fetch("https://api.nationalize.io/?name="+get);
    let result = await data.json();
    document.getElementById("display").innerHTML = JSON.stringify(result);
} catch(err){
    console.log(err);
}})

