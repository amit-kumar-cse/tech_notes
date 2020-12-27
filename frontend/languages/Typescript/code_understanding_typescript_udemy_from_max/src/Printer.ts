class Printer {
  private static instance: Printer;
  private randomId: number;
  private constructor(private name: string) {
    this.randomId = Math.random();
  }

  static getInstance(name: string) {
    if (!this.instance) {
      this.instance = new Printer(name);
    }
    return this.instance;
  }
}

const printer1 = Printer.getInstance("Amit");
const printer2 = Printer.getInstance("Kumar");

console.log(printer1, printer2);
