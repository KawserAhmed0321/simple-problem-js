function largestelement(number)
{
    let largest =0;
    for(let i=0;i < number.length;i++)
    {
        const element=number[i];
        console.log(element);
        if(element>largest)
        {
            largest=element;
        }
    }
    return largest;
}
let arr=[10,2,3,4,5];
const largeNumber=largestelement(arr);
console.log('largeNumber is:',largeNumber);