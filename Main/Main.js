
let arr = JSON.parse(localStorage.getItem('array')) 
let array = arr || []
let btn=document.getElementById("saveData")
btn.addEventListener("click", save)
let name = document.getElementById("inputName").value

function save(event){

let name = document.getElementById('inputName').value
let select = document.getElementById(`select`).value
console.log(name)
    if(select==="dessert"){
        x="desseret"
        y="./dessert.jpeg";
        z=7
    }
    if(select==="mainCo"){
        x="mainCo"
        y="./main co.jpeg";
        z=18
    }
    if(select==="aptizer"){
        x="appetizer"
        y="./appetizer.jpeg";
        z=10
    }
    let orders ={
    
       'orderImage'  : y,
        'customerName': name,
        'foodType':x,
        'payment':z
    }
    array.push(orders)
localStorage.setItem("array",JSON.stringify(array))

printData()
event.preventDefault()
}

function printData(){

let table1 = '<table border=2>';
    table1 += '<tr><th>order image</th><th>customer name</th><th>food type</th><th>payment</th></tr>';
    array.map( ele => {
        var image = ele.orderImage;
        var cname = ele.customerName;
        var FoodType = ele.foodType;
        var Payment = ele.payment;
 
        table1 = table1 + '<tr>',
        table1 = table1 + '<td>'+ `<img src=${image} style="width:140px ;">` + '</td>',
        table1 = table1 + '<td>' + `${cname}` + '</td>',
        table1 = table1 + '<td>' + `${FoodType}` + '</td>'
        table1 = table1 + '<td>'  + `${Payment}` + '</td>'
     });  
     table1 += "</table>"

     
     document.getElementById("list").innerHTML = table1;


}

let btnRemove=document.getElementById(`remove`)
btnRemove.addEventListener(`click`,removetable)

function removetable(){

    document.getElementById("list").innerHTML = "";


}



