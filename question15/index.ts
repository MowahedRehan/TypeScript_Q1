let names:string[]=["Muhammad",'Rehan','Waqas'];
let printInvitations=(name:string)=> console.log(`Dear ${name},\nYou are cordially invited to dinner at my place.Please let me know if you can make it.\nSincerely, Muhamamd Irfan\n`);
names.forEach((name:string)=>{
    printInvitations(name);
});
let busyGuestIndex=Math.floor(Math.random()*names.length);

console.log(`${names[busyGuestIndex]} can't make it to the dinner.`);
names[busyGuestIndex]='Muhammad';

names.forEach((name: string) => {
    printInvitations(name);
});
