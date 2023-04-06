var names = ["Mowahed", 'Rehan', 'Sultan'];
var printInvitations = function (name) { return console.log("Dear ".concat(name, ",\nYou are cordially invited to dinner at my place.Please let me know if you can make it.\nSincerely, Mowahed Rehan\n")); };
names.forEach(function (name) {
    printInvitations(name);
});
var busyGuestIndex = Math.floor(Math.random() * names.length);
console.log("".concat(names[busyGuestIndex], " can't make it to the dinner.\n"));
names[busyGuestIndex] = 'Muhammad';
names.forEach(function (name) {
    printInvitations(name);
});
console.log("Hey! i got a big dinner table, so i'm inviting more guests.");
names.unshift('Muhammad');
names.splice(2, 0, 'Ali');
names.push('Usman');
names.forEach(function (name) {
    printInvitations(name);
});
