abstract class Account {
  protected successor: Account;
  protected balance: number;

  public setNext(successor: Account) {
    this.successor = successor;
  }

  public pay(amountToPay: number) {
    if (this.canPay(amountToPay)) {
      console.log(`${this.constructor.name}でのお支払いが可能です`);
    } else if (this.successor) {
      console.log(
        `${this.constructor.name}でのお支払いができません。次の口座に移ります`
      );
      this.successor.pay(amountToPay);
    } else {
      throw new Error("お支払いできる口座がありません");
    }
  }

  private canPay(amountToPay: number): boolean {
    return this.balance >= amountToPay;
  }
}

class Bank extends Account {
  constructor(balance: number) {
    super();
    this.balance = balance;
  }
}

class PayPal extends Account {
  constructor(balance: number) {
    super();
    this.balance = balance;
  }
}

class BitCoin extends Account {
  constructor(balance: number) {
    super();
    this.balance = balance;
  }
}

// bank -> PayPal -> BitCoin
const bank = new Bank(100);
const paypal = new PayPal(200);
const bitcoin = new BitCoin(300);

bank.setNext(paypal);
paypal.setNext(bitcoin);

console.log(bank.pay(301));
