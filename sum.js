const number = [1,2,3];
let sum = 0;
for(let i=0; i< number.length; i++)
{
const element= number[i];
console.log(element);
   
  sum=sum + element;
   
}
console.log('sum is:',sum);



function  arryTotal(num){
    let sum = 0;
    for(i=0; i<num.length;i++)
    {
        const element=num[i];
        console.log('element is:',element);
        sum=sum+element;
    }
    return sum;
}
let n1=[1,2,3,4,5,6];
const total=arryTotal(n1);
console.log('total:',total);