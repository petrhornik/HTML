// 2 růžně vytvořené arraye si NIKDY nebudou rovny typem i když mají stejné hodnoty
 
const arr1 = ["Hello"];
const arr2 = ["Hello"];

console.log(arr1 === arr2);

// kdy si jsou arraye rovny typem

const arr1Copy = arr1; // odkazuje na ten samý prvek v paměti jako arr1

console.log(arr1 === arr1Copy)

//kdy si jsou arraye z různých míst v paměti rovny 

console.log(arr1[0] == arr2[0]);