//Write foo, bar, foobar if divisible by 3 or 5 or both.

for (let i = 0; i <= 50; i++) {
    const element = i;
    if (i % 3 == 0 && i%5 == 0) {
        console.log("foobar");
    }
    else if(i%3 == 0)
    {
        console.log("foo");
    }
    else if(i%5 == 0)
    {
        console.log('bar');
    }
    else {
        console.log(element);
    }

}