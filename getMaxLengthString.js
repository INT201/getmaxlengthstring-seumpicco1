 const { template } = require('@babel/core')


 function getMaxLengthString(arrayOfString) {

if(arrayOfString ==null  ){
   return undefined 
}
else if (arrayOfString == undefined){
    return undefined
}

//   else {
// let text =[arrayOfString[0]]
// let text2 = arrayOfString[0]


// for(i=0;i<arrayOfString.length;i++){
// if(i+1<arrayOfString.length){

//     if(text2.length<arrayOfString[i+1].length){
// text2 = arrayOfString[i+1]

// text = [arrayOfString[i+1]]
//     }else if (text2.length ==arrayOfString[i+1].length){
//             text.push(arrayOfString[i+1])
//     }
// }

// }
// return text
//   }

if(arrayOfString ==null  ){
    return undefined 
 }
 else if (arrayOfString == undefined){
     return undefined
 }

 let text = [arrayOfString[0]]
 let text2 = arrayOfString[0]

 let x = text
 let y = text2
   
 for(i=0;i<arrayOfString.length;i++){


  if(i+1<arrayOfString.length){

     if(text2.length<arrayOfString[i+1].length){
       text= [arrayOfString[i+1]]
       text2 = arrayOfString[i+1]
     }else if (text2.length==arrayOfString[i+1].length){
        text.push(arrayOfString[i+1])
     }



  }

 }
 return text
}


console.log(getMaxLengthString(['hello', 'hi', 'hey',"sdasdwdwdwd"]))
console.log(getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning','Good evening']))

 

 
 module.exports = getMaxLengthString


 