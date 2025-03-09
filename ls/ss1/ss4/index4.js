console.log("hello")
let arr = ["nptp",17,true,"bong da"];
console.log(arr[1]);
for(let i=0; i<arr.length; i++)
{
    console.log(arr[i]);
}
arr1 = [1,2,3,4,5]
arr1.push ('hello','world');
console.log(arr1);
arr2 = [1,2,3,4,5];
arr2.splice (0,0,"hello");
console.log(arr2);
arr3 = [1,2,3,4,5];
arr3.splice ("hello");
console.log(arr3);
arr4[2] = 9;
console.log(arr4);
arr5 = [1,2,3];
arr5.splice (1,1,10);
arr6 = [20,"hello","world","little",true,100,"hello"];
console.log(arr6.indexof(true));
console.log(arr6.indexOf(5));
Dùng để in ra Key
 for(let key in student)
 {
     console.log(student[key]);
 }
 //Thêm Key
student.girlFriend = 'Yen';
console.log(student);

//Sửa Value
student['name'] = 'Khoi';
console.log(student)
//Tìm kiếm key
console.log(student)
if('name' in student)
{
    console.log('Đã tìm thấy')
}
else
{
    console.log('Không tìm thấy')
}

//Tìm kiếm value
if(student.age == '18')
    {
        console.log('Đã tìm thấy');
    }
    else
    {
        console.log(student.age);
        console.log('Không tìm thấy');
    }
    //Tìm kiếm key
 if(student.hasOwnProperty('age'))
 {
     console.log('Đã tìm thấy');
 }
 //Xóa key
console.log(student);
// delete student.key;
console.log(student);