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
  
  // Create an instance of the BankAccount class
  const account1 = new BankAccount('Bhoomika', 1000);
  const account2 = new BankAccount('Yamini', 5000);
  // Deposit and withdraw from the account
  account1.deposit(500);
  account1.withdraw(200);
  account1.checkBalance();

  account2.deposit(100);
  account2.withdraw(800);
  
  // Check the account balance

  account2.checkBalance();
  