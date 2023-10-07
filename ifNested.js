function NgerjainTugas(angka) {
  for (let i = 0; i <= angka; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("buzz");
    } else if (i % 1 == 0 && i % 3 == 0) {
      console.log("fizz");
    } else {
      console.log("fizzbuzz");
    }
  }
}

NgerjainTugas(10);
