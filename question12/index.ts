let personName:string[]=["Rehan",'Muhammad','Mowahed','Waqas','Ali'];
let msg:string='Hello name !, how are you?';
personName.forEach((name:string)=>{
    console.log(msg.replace('name',name));
});