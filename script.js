let key='PASTE'
let firstchac=key[0];
let secondchac=key[1];
let thirdchac=key[2];
let fourthchac=key[3];
let fifthchac=key[4];
let result=0;
let chance=5;
let word=''
function moveToNextField(currentField, nextFieldId) {
  currentField.value = currentField.value.toUpperCase()
  const maxLength = parseInt(currentField.getAttribute('maxlength'), 10);
  const currentLength = currentField.value.length;
  word=word+currentField.value
  console.log(word);
  if (currentLength >= maxLength) {
    const nextField = document.getElementById(nextFieldId);
    
    if (nextField) {
      nextField.focus();
    }
    else{
    calculateResult();
    }
}
  function calculateResult(){
    for(i=0;i<5;i++){
      for(j=0;j<5;j++){
        if (key[i]===word[j]&& i==j){
          if(i==0){
            console.log(key[i]);
            result++;
            let goal=document.getElementById(chance+'firstAlp')

            goal.classList.add("green")
          }
          if(i==1){
            console.log(key[i]);
            result++;
            
            let goal=document.getElementById(chance+'secondAlp')
           
            goal.classList.add("green")
         
          }
          if(i==2){
            console.log(key[i]);
            result++;
            let goal=document.getElementById(chance+'thirdAlp')
            goal.classList.add("green")
          }
          if(i==3){
            console.log(key[i]);
            result++;
            let goal=document.getElementById(chance+'fourthAlp')
            goal.classList.add("green")
          }
          if(i==4){
            console.log(key[i]);
            result++;
            let goal=document.getElementById(chance+'fifthAlp')
            goal.classList.add("green")
          }
        }
        else if(key[i]===word[j]&& i!=j){
          if(j==0){
            console.log(word[j]);
            let goal=document.getElementById(chance+'firstAlp')
            goal.classList.add("orange")
          }
          if(j==1){
            console.log(word[j]);
            let goal=document.getElementById(chance+'secondAlp')
            goal.classList.add("orange")
          }
          if(j==2){
            console.log(word[j]);
            let goal=document.getElementById(chance+'thirdAlp')
            goal.classList.add("orange")
          }
          if(j==3){
            console.log(word[j]);
            let goal=document.getElementById(chance+'fourthAlp')
            goal.classList.add("orange")
          }
          if(j==4){
            console.log(word[j]);
            let goal=document.getElementById(chance+'fifthAlp')
            goal.classList.add("orange")
          }
        }
      
      }
    }
   chance--;
   
   let flag=1;
   flag=checkResult(word, key, flag)
   console.log(flag);
   if (flag===0){
      alert('you won');
      word=''
    }
      else if(chance===0){
      alert('you lose')
      word='';
      }
    
   word='';
   console.log(`chance = ${chance} ${flag}`);
   // Create five input elements (you can adjust the count as needed)
   

     
      
if(chance<5&&chance>0&&flag) {
  var flg= document.getElementById('input')
   var outerContainer = document.createElement('div')
      outerContainer.id=chance+'entry';

  // console.log("yes");
  let currentId;
  let nextId;
  for (let i = 1; i <= 5; i++) {
    if(i==1){
       currentId = chance+'firstAlp';
       nextId =  chance+'secondAlp' ;
      //  console.log("yes1");
  }
  if(i==2){
       currentId = chance+'secondAlp';
       nextId = chance+'thirdAlp' ;
      //  console.log("yes2");
  }
  if(i==3){
       currentId = chance+'thirdAlp';
       nextId =  chance+'fourthAlp' ;
      //  console.log("yes3");
  }
  if(i==4){
       currentId = chance+'fourthAlp';
       nextId =  chance+'fifthAlp' ;
      //  console.log("yes4");
  }
  if(i==5){
       currentId = chance+'fifthAlp';
       nextId = undefined;
      //  console.log("yes5");
  }
    
    addInput(currentId, nextId,outerContainer);
        // console.log("ok");

  }
  flg.appendChild(outerContainer);
  let latestElement=document.getElementById(chance+'firstAlp');
  latestElement.focus();
}
}
}

  


  
    function addInput(id, nextId, Container1) {            
    // console.log("here");
    // Create a new input element
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = id;
    newInput.className = 'nrlstyl';
    newInput.name = 'singleAlphabet';
    newInput.maxLength = 1;
    newInput.pattern = '[A-Z]';
    newInput.title = 'Please enter a single capital alphabet';
    // console.log("here1");
    // If nextId is provided, set the oninput attribute
    if (nextId) {
        newInput.setAttribute('oninput', 'moveToNextField(this, \'' + nextId + '\')');
    } else {
        newInput.setAttribute('oninput', 'moveToNextField(this)');
    }

    // Append the new input to the container
    /*console.log(container.id);*/
    Container1.appendChild(newInput);
}


function checkResult(word,key,flag){

  let counter=0;

  for(i=0;i<5;i++){
    if(key[i]===word[i])counter++;
  }

  if(counter===5){flag=0;}
    
  return flag;
}