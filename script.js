 function action(val){
    document.getElementById('display').value+=val
}
function clearrr(){
    document.getElementById('display').value=""
}
function eql(){
  var text =  document.getElementById('display').value
 var result= eval(text)
 document.getElementById('display').value=result
}