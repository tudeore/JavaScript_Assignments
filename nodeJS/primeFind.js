primeNumber = function()
{
    var num = 1;

    for (var i =2; i <num; i++)
    {
        if(num%2 == 0)
        {
            console.log("It's not  a prime number");
            process.exit(-1);
        }
    }
    console.log("It's a prime number");
}

primeNumber();