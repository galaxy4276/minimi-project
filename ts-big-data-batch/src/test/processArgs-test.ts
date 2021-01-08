process.argv.forEach((val: string, idx: number) => {
  console.log(`${idx}: ${val}`);
});

console.log(process.argv);