class BankAccount {
    constructor(accountHolder, initialBalance) {
      this.accountHolder = accountHolder;
      this.balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} into ${this.accountHolder}'s account.`);
      } else {
        console.log('Invalid deposit amount.');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from ${this.accountHolder}'s account.`);
      } else {
        console.log('Invalid withdrawal amount or insufficient funds.');
      }
    }
  
    checkBalance() {
      console.log(`${this.accountHolder}'s account balance: ${this.balance}`);
    }
  }
  
  class SavingsAccount extends BankAccount {
    constructor(accountHolder, initialBalance, interestRate) {
      super(accountHolder, initialBalance);
      this.interestRate = interestRate;
    }
  
    calculateInterest() {
      const interest = (this.balance * this.interestRate) / 100;
      this.deposit(interest);
      console.log(`Interest earned: ${interest}`);
    }
  }
  
  // Create an instance of the SavingsAccount class
  const savingsAccount1 = new SavingsAccount('Alice', 1000, 5);
  
  // Deposit and withdraw from the account
  savingsAccount1.deposit(500);
  savingsAccount1.withdraw(200);
  
  // Check the account balance
  savingsAccount1.checkBalance();
  
  // Calculate and deposit interest
  savingsAccount1.calculateInterest();
  savingsAccount1.checkBalance();
  