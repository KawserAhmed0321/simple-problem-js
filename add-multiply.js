/*
chairwood=3cft
bedwood=4cft
tablewood=1cft  
*/
function woodcalculator(chairwood,bedwood,tablewood){
    const perchairwood=30;
    const perbedwood=40;
    const pertablewood=10;

     const chairwoodquantity =perchairwood*chairwood;
     const bedwoodquantity =perbedwood*bedwood;
    const tablewoodquantity =pertablewood*tablewood;

    const totalquantity= chairwoodquantity+bedwoodquantity+tablewoodquantity;
    return totalquantity;
}

const firstOption=woodcalculator(1,1,1);
console.log('Firstcalculation:',firstOption);

const secondOption=woodcalculator(2,3,5);
console.log('secondCalculation:',secondOption);