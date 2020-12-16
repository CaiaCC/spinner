
const spinner = ["|", "/", "—", "\\", "|", "\n"];
let time = 0;


for(const ele of spinner) {
	setTimeout(() => {
		process.stdout.write(`\r${ele}`)	
	}, time);	
	time += 200;
}


