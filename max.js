const bussinesman=500;
const minister =400;
const army=700;
if(bussinesman>minister && bussinesman>army)
{
    console.log("bussiness ban is big");
}
else if(minister> bussinesman && minister>army
    )
    {
        console.log('minister is big');
    }
    else{
        console.log("army is big");
    }

    function big(bussinesman,minister){
        if(bussinesman>minister){
            return bussinesman;
        }
        else{
            return minister;
        }
    }
     const bigger=big(500,600);
    console.log(bigger);


    var max = Math.max(bussinesman,minister,army);
    console.log(max);