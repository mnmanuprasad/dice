
let dice=document.querySelector('.dice-container');
let faces=[...document.querySelectorAll('.face')]
let numArr=[1,2,3,4,5,6];
//console.log(faces);
document.querySelector('button').addEventListener('click',throwDice)


function throwDice(){
  let index=0;
  if(dice.className=='dice-container'){ 
       dice.className='dice-container anime';
      setTimeout(()=>{
          stopRolling();
      },1000);
   }//else{
  //     dice.className='dice-container anime'
  // }
   numArr=shuffle(numArr);
  // console.log(numArr)
    faces.forEach((face)=>{
        dotCreator(face,numArr[index])
        index+=1;
    })

 // dice.style.transform='rotate3d(0.4, 0.9, 0.4, 200deg)';

}

 function stopRolling(){
   console.log('entering')
    dice.className='dice-container'
 }

function shuffle(a){
  var j,x,i;
  for(i=a.length-1;i>0;i--){
     j=Math.floor(Math.random() * (i+1))
    x=a[i]
    a[i]=a[j]
    a[j]=x
  }
  return a
}

function numToString(num){
   switch(num){
        case 1:return "one";
        break;
        case 2:return "two";
        break;
        case 3:return "three";
        break;
        case 4:return "four";
        break;
        case 5:return "five";
        break;
        case 6:return "six";
        break;
   }
}

function dotCreator(face,noOfDots){
  li=document.createElement('li');
  li.className=`dot dot-${numToString(noOfDots)}`
    for(i=0;i<noOfDots;i++){
        li.innerHTML+=`<span></span>`
    }

  face.innerHTML="";
  face.appendChild(li)
  //console.log(face)
}


//3.142rad


//dice.style.transform='rotate3d(0.4, 0.9, 0.4, 200deg)'
// dice.style.transform='rotate3d(1, -1, 1, 290deg)'