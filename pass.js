function PasswordGenerator(length,includelower, includeupper,includenumber,includesympol){
  const lowerchar = "abcdefghijklmnopqrstuvwxyz";
  const upperchar = "ABCDEFGHIJKLMNOPQRSTVWXYZ";
  const numberchar = "1234567890";
  const sympolchar ="!@#$%^&*()_+";
  let allowchar = "";
  let password = "";
  allowchar += includelower? lowerchar:"";
  allowchar += includeupper? upperchar:"";
  allowchar += includenumber? numberchar:"";
  allowchar += includesympol? sympolchar:"";
  if(length<=0){
    console.log("passwordlength must be a 1");
    return "";
  }

  if(allowchar.length ==0 ){
    console.log(`(atleast 1 set of charecter needds to be selected)`);
    return "";
  }
  
  for(let i = 0; i<length;i++){
  const random = Math.floor(Math.random()*allowchar.length);
  password+= allowchar[random];

  }


  return password;

}
const passlength =12;
const includelower = true;
const includeupper = true;
const includenumber = true;
const includesympol =  true;
const password = PasswordGenerator(passlength,includelower,includeupper,includenumber,includesympol);
console.log(`gentrated password:${password}`);
