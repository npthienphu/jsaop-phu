1function tinh_tong(n)

{sun = 0;
    for(let i =1;i<n;i++)
    {sun +=i;}
return sun;
}
let resulCauA = tinh_tong(8);
console.log(resulCauA);

2function la_so_nguyen_to(n)
{
    let count = 0
    for(let i=1;<=n;i++)
    {
        if(n%i == 0)
        {count+=1;}
    }
    if(count == 2)
    { 
        console.log("đây là số nguyên tố");
    }
    else{
        console.log("đây ko là số nguyên tố");
    }
}
la_so_nguyen_to(17);
3function tinh_giai_thua(n)
{
    let tongphepnhan =1;
}