let names:string[]=["Mowahed",'Rehan','Sultan'];
let printInvitations=(name:string)=> console.log(`Dear ${name},\nYou are cordially invited to dinner at my place.Please let me know if you can make it.\nSincerely, Mowahed Rehan\n`);
names.forEach((name:string)=>{
    printInvitations(name);
});
let busyGuestIndex=Math.floor(Math.random()*names.length);

console.log(`${names[busyGuestIndex]} can't make it to the dinner.\n`);
names[busyGuestIndex]='Irfan';

names.forEach((name: string) => {
    printInvitations(name);
});

console.log(`Hey! i got a big dinner table, so i'm inviting more guests.`);

names.unshift('Irfan');
names.splice(2,0,'Ali');
names.push('Usman');

names.forEach((name: string) => {
    printInvitations(name);
});