class Biodata {
  public name: string;
  public age: number;
  public address: string;
  private isActive: boolean;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.isActive = true;
  }

  get biodataStatus() {
    return this.isActive;
  }

  set changeBiodataStatus(value: boolean) {
    this.isActive = value;
  }
}

async function loadDataAsync() {
  try {
    const response = await fetch("https://dummyjson./products");
    const json = await response.json();

    return json;
  } catch (e) {
    throw e;
  } finally {
    console.log("finished");
  }
}

loadDataAsync()
  .then((resolve) => console.log(resolve))
  .catch((e) => console.log(e));
