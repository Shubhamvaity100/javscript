let date = new Date()
// console.log(date.toString())
  let myDate =new Date(2023,0,2,5,3)
//   console.log(myDate.toLocaleString())

  let formDate= new Date("2023-01-14")
//   console.log(formDate.toDateString());

  let timeStamp =Date.now()//give the date into the timestamp
//   console.log(timeStamp);
//   console.log(formDate.getTime());

 console.log(formDate.toLocaleString('default',{
    timeStyle:"short",
  }))
  



