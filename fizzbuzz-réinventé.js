function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("TechLead");
    } else if (i % 3 === 0) {
      console.log("Tech");
    } else if (i % 5 === 0) {
      console.log("Lead");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(15);
