function lowestelement(num)
{
    let lowest = num[0];
    for(let i=0;i<num.length;i++)
    {
        const element=num[i];
        console.log(element);
        
        if(element<lowest)
        {
         
            lowest=element;
        }

    }
    return lowest;
}
let arr=[10,20,40,5,60];
const lowestnum=lowestelement(arr);
console.log('lowest element is:',lowestnum);