import test from "./test";

class Kendaraan {
  constructor(name, number, buyDate) {
    this.name = name;
    this.number = number;
    this.buyDate = buyDate;
    this.bensin = 0;
  }

  bayarPajak(pajak) {
    console.log(`Bayar pajak: ${pajak}`);
  }

  isiBensin(liter) {
    this.bensin = this.bensin + liter;
  }
}

class Motor extends Kendaraan {
  constructor({ name, number, buyDate }) {
    super(name, number, buyDate);
    this.maxPenumpang = 2;
  }

  static create({ name, number }) {
    const instance = new Motor({
      name: name,
      number: number,
      buyDate: new Date(),
    });
    return instance;
  }
}

const vario = new Motor({
  name: "Vario 150",
  number: "B 1234",
  buyDate: "12-12-2012",
});

console.log(vario);

const nmax = Motor.create({ name: "NMax", number: "B 3333" });
console.log(nmax);
