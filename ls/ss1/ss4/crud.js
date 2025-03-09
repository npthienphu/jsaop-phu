let hocSinh = [
    { ten:'Khoi',tuoi:15,lop:'10A11'},
    { ten:'Binh',tuoi:16,lop:'10A13'},
    { ten:'Hoa',tuoi:17,lop:'10A14'},
    { ten:'dung',tuoi:17,lop: '11a3'},
]
hocSinh[2].tuoi = 17;
console.log(hocSinh);

hocSinh.splice(-1,1);
console.log(hocSinh);

console.log(hocSinh);