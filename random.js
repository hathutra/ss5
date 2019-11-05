// let x=Math.random()
// console.log(x)
 

// let x=Math.floor(Math.random() * 10);
// console.log(x)

//  let array=[2,3,4,5,6,7,8]
//  let x=Math.floor(Math.random() * array.length);
//  for(let i=0;i<array.length;i++){
//  console.log(array[x])}
let quiz=[
    {
        question:"1+1 bằng mấy ?",
        choice1:"1. 1",
        choice2:"2. 2",
        choice3:"3. 3",
        choice4:"4. 4",
        rightChoice:"2"
    },
    {
        question:"1+2 bằng mấy ?",
        choice1:"1. 1",
        choice2:"2. 2",
        choice3:"3. 3",
        choice4:"4. 4",
        rightChoice:"3"
    },
    {
        question:"1+3 bằng mấy ?",
        choice1:"1. 1",
        choice2:"2. 2",
        choice3:"3. 3",
        choice4:"4. 4",
        rightChoice:"4"
    },
    
    {
        question:"1+0 bằng mấy ?",
        choice1:"1. 1",
        choice2:"2. 2",
        choice3:"3. 3",
        choice4:"4. 4",
        rightChoice:"1"
    }
]
let loop = true
let count= 0

while(loop){
   let x=Math.floor(Math.random() * quiz.length);
  for (let index = 0; index < quiz.length; index++) {
      const element=quiz[index]
    for (const key in element) {
        if (element.hasOwnProperty(key)) {
     
            
        }
    }
      
  }

  let t=prompt(`${quiz[x].question}\n ${quiz[x].choice1}\n  ${quiz[x].choice2}\n  ${quiz[x].choice3}\n  ${quiz[x].choice4}\n "Nhập vào đáp án đúng"`)

  if(t==quiz[x].rightChoice){
      alert("wao! bạn giỏi quá")
        count+=1
  }else{
      alert("đếm lại ngón tay đi bạn!><")
     
  }
  quiz.splice(quiz.indexOf(x),1)
    if(quiz.length == 0){
        alert(`Chúc mừng bạn đã trả lời đúng ${count} câu hỏi`)
        loop = false
    }
  

}

