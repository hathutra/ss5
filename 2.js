let Words = ["to","be","that","of","elon","to","this","now","back",
"cool","hey","love","of","life","that","rain","summer",
"color","now","of","hat","late","sorry","my","team"]
let obr = {}
for(let i=0;i<Words.length;i++){
    let count =0
    for(let j=0;j<Words.length;j++){
        if(Words[i] == Words[j]){
            count+=1
        }
    }
    obr[Words[i]] = count
}
console.log(obr)