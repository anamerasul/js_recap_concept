// const bank = owner=>{
//         balance=0;
//         return amount=>{
//                 // balance=balance+amount;
//                 balance +=amount;
//                 return balance
//         }
        
// }
const bank = owner=>{
        balance=0;
        return {
               deposit:amount=>{
                                // balance=balance+amount;
                                balance +=amount;
                                return balance
        },
        withdraw:amount=>{
                // balance=balance+amount;
                balance -=amount;
                return balance
        }

        
}
}



const Mofijbank =bank('mofij')
console.log(Mofijbank.deposit(100))
console.log(Mofijbank.deposit(100))
console.log(Mofijbank.deposit(100))
console.log(Mofijbank.withdraw(10))
console.log(Mofijbank.balance);
console.log(Mofijbank.withdraw(20));