//On clicking the Submit button
var totalE = 0
var totalM = 0
var totalS = 0
var totalT = 0
var totalL = 0
var count = 0


var db = []
function addData(){
    event.preventDefault()
    var examtype = document.getElementById("exam4").value
    var gradetype = document.getElementById("grade4").value
    var sectype = document.getElementById("sec4").value
    var rolln = document.getElementById("roll4").value
    var studentn =document.getElementById("name4").value
    var engn = document.getElementById("eng4").value
    var matn = document.getElementById("mat4").value
    var scin = document.getElementById("sci4").value
    var sstn = document.getElementById("sst4").value
    var miln = document.getElementById("mil4").value
    var totalm = Number(engn)+ Number(matn) +Number(scin) +Number(sstn) +Number(miln)
    var percent = Math.ceil(totalm/5)

    var obj = {
        rollno : Number(rolln),
        name : studentn,
        eng : Number(engn),
        mat : Number(matn),
        sci : Number(scin),
        sst : Number(sstn),
        mil : Number(miln),
        percent : percent, 
    }
    console.log(obj)
    db.push(obj)  
    console.log(db)
    displayData(db)
}
function displayData(db){
    var engn = document.getElementById("eng4").value
    var matn = document.getElementById("mat4").value
    var scin = document.getElementById("sci4").value
    var sstn = document.getElementById("sst4").value
    var miln = document.getElementById("mil4").value
    
    var tblBody = document.getElementById("tbl")
    var body = document.getElementById("body")
    body.innerHTML = ""
    count+= 1

        var E = document.getElementById("engs")
        totalE += Number(engn)
        var avgE = Number(Math.ceil(totalE/count))
        E.innerHTML = Number(avgE)

        var M = document.getElementById("mats")
        totalM += Number(matn)
        var avgM = Number(Math.ceil(totalM/count))
        M.innerHTML = Number(avgM)

        var S = document.getElementById("scis")
        totalS += Number(scin)
        var avgS = Number(Math.ceil(totalS/count))
        S.innerHTML = Number(avgS)

        var T = document.getElementById("ssts")
        totalT += Number(sstn)
        var avgT = Number(Math.ceil(totalT/count))
        T.innerHTML = Number(avgT)

        var L = document.getElementById("mils")
        totalL += Number(miln)
        var avgL = Number(Math.ceil(totalL/count))
        L.innerHTML = Number(avgL)

    db.forEach(function(item){

        
        var row =document.createElement("tr")
        
            
        var cell1 = document.createElement("td");
        cell1.innerHTML = item.rollno
        row.appendChild(cell1)
        document.getElementById("avG").innerHTML = "Average"
        
        var cell2 = document.createElement("td");
        cell2.innerHTML = item.name
        row.appendChild(cell2)
        if (count == 1){
            document.getElementById("hyp").innerHTML = count+" "+"student"}
        else {
            document.getElementById("hyp").innerHTML = count+" "+"students"}

        
        var cell3 = document.createElement("td");
        cell3.innerHTML = item.eng
        row.appendChild(cell3)
        

        var cell4 = document.createElement("td");
        cell4.innerHTML = item.mat
        row.appendChild(cell4)
       
    

        var cell5= document.createElement("td");
        cell5.innerHTML = item.sci
        row.appendChild(cell5)
        
    

        var cell6 = document.createElement("td");
        cell6.innerHTML = item.sst
        row.appendChild(cell6)
        
        

        var cell7 = document.createElement("td");
        cell7.innerHTML = item.mil
        row.appendChild(cell7)
       

        var cell8 = document.createElement("td");
        cell8.innerHTML = item.percent
        row.appendChild(cell8)
        
        

        // for filtering divisions
        if (item.percent>= 60){
            cell8.style.backgroundColor = "lightgreen"
        }
        else if(item.percent<60 && item.percent>=50){
            cell8.style.backgroundColor = "yellow"
        }
        else if (item.percent<50 && item.percent>=40){
            cell8.style.backgroundColor = "orange"
        }
        else{
            cell8.style.backgroundColor = "red"
        }
            
        
        body.appendChild(row)
        tblBody.append(body)

        //inserting new rows before avg-row
        // var avgrow = document.getElementById("avg") 
        // row.insertAdjacentElement("afterend",avgrow)
    
    })
              
    

}
function divsn(){
    var select = document.getElementById("Div")
    var selectValue = select.options[select.selectedIndex].value

    if(selectValue == "1stDiv"){
        var filterDb = db.filter(function(item){
            return item.percent >= 60
        })
    }
    else if(selectValue == "2ndDiv"){
        var filterDb = db.filter(function(item){
            return item.percent >= 50 && item.percent < 60
        })
    }
    else if(selectValue == "3rdDiv"){
        var filterDb = db.filter(function(item){
            return item.percent >= 35 && item.percent < 50
        })
    }
    else if(selectValue == "fail"){
        var filterDb = db.filter(function(item){
            return item.percent >= 0 && item.percent < 35
        })
    }
    // var result = words.filter(word => word.length > 6);
    displayData(filterDb)
}
    // function filasc(){
    // // remove all child of tbody 
    //     function compare(key){
    //         return function innerSort(a,b){
    //             if(!a.hasOwnProperty(key)|| !b.hasOwnProperty(key)){
    //                 return 0 //property doesnot exist on either object
    //             }
    //         var X = (typeof a[key] === 'string')? a[key].toUpperCase():a[key];
    //         var Y = (typeof b[key] === 'string')? b[key].toUpperCase():b[key];
            
    //         var comparision = 0
    //         if ( X > Y){comparision = 1} 
    //         else if(X < Y){comparision = -1}
    //         return comparision 
    //         }
    //     }
    //    db.sort(compare('Name'))
    // }

