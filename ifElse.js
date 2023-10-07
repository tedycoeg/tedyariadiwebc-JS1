function ganjilGenap(angka) {
  for (let i = 1; i <= angka; i++) {
    if (i % 2 == 0) {
      console.log(i + " adalah bilangan genap");
    } else {
      console.log(i + " adalah bilangan ganjil");
    }
  }
}

ganjilGenap(40);