  var dbase = []
  var rolln = document.getElementById("roll4")
  var studentn =document.getElementById("name4")
  var engn = document.getElementById("eng4")
  var matn = document.getElementById("mat4")
  var scin = document.getElementById("sci4")
  var sstn = document.getElementById("sst4")
  var miln = document.getElementById("mil4")

  var form = document.getElementById("form")
  form.addEventListener("submit", function(){
    event.preventDefault()
    storeInObj()

  })

  function storeInObj(){
  var student= {}
  var inputs = document.getElementsByClassName("inp")
  Array.from(inputs).forEach(function(item){
    if(item.name){
      student[item.name] = item.value
    }
  })
    // var student = {
    //   rollno : rolln,
    //   name : studentn,
    //   eng : engn,
    //   mat : matn,
    //   sci : scin,
    //   sst : sstn,
    //   mil : miln,
    // }
    // dbase.push(student)
    console.log(student)
}

