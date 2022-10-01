const names = ['a', 's', 'd', 'f', 'a', 's', 'd', 'q', 'w'];
// for(let i=0;i<names.length;i++)
// {
//     const element=names[i];
//     console.log(element);
// }


// for (const element of names) {
//     console.log(element);
// }



function removeDuplicate(names) {
    const unique = [];
    for (const element of names) {
        console.log(element);
        if(unique.indexOf(element) == -1)
        {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueName = removeDuplicate(names);
console.log(uniqueName);