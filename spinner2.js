
const spinner = ["|", "/", "—", "\\", "|", "\n"];
let time = 0;


for(let char of spinner) {
	setTimeout(() => {
		process.stdout.write(`\r${char}`)	
	}, time);	
	time += 200;
}


