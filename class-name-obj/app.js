// school information
let school = {
  classA: {
    student1: {
      fName: "Shayan",
      lName: "Mahmoudi",
      phoneNumber: "09917509909",
      address: "Iran,Busher,Busher",
      score: "20",
    },
    student2: {
      fName: "Amir",
      lName: "Razavi",
      phoneNumber: "09188963246",
      address: "iran,Busher,Busher",
      score: "15",
    },
    student3: {
      fName: "Reza",
      lName: "Alavi",
      phoneNumber: "09563948606",
      address: "iran,Bushehr,Bushehr",
      score: "18.75",
    },
  },
  classB: {
    student1: {
      fName: "Ali",
      lName: "Khorandi",
      phoneNumber: "09762689463",
      address: "Iran,Busher,Busher",
      score: "14.25",
    },
    student2: {
      fName: "Saeed",
      lName: "Davoudi",
      phoneNumber: "09763498625",
      address: "iran,Busher,Busher",
      score: "19",
    },
    student3: {
      fName: "Parham",
      lName: "Badian",
      phoneNumber: "0648796326",
      address: "iran,Bushehr,Bushehr",
      score: "20",
    },
  },
};
// console.log(school);
console.log("____________ student class A ____________");
console.log("Shayan :>> ", school.classA.student1);
console.log("Amir :>> ", school.classA.student2);
console.log("Reza :>> ", school.classA.student3);
console.log("____________ student class B  ____________");
console.log("Ali :>> ", school.classB.student1);
console.log("Saeed :>> ", school.classB.student2);
console.log("Parham :>> ", school.classB.student3);
