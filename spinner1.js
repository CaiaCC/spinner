// process.stdout.write("hello from spinner1.js... \rheyyy\n");
const spinner = ["|", "/", "—", "\\", "|", "\n"];
let time = 0;

for(let char of spinner) {
setTimeout(() => {
	process.stdout.write(`\r${char}`)	
}, time);	
time += 200;
}
	


// setTimeout(() => {
// 	process.stdout.write("\r/  ")
// }, 300);

// setTimeout(() => {
// 	process.stdout.write("\r—  ")
// }, 500);

// setTimeout(() => {
// 	process.stdout.write("\r\\  ")
// }, 700);

// setTimeout(() => {
// 	process.stdout.write("\r|  \n")
// }, 900);
