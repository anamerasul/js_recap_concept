const bapertaka= 100000;
function patrichai(age,earning){
       
        // console.log(trueAge)
        console.log(age);
        console.log(earning);
        var decision=canMarry(10)
        console.log(decision)

        var trueAge =age+7

      
        function canMarry(expense){
                const remaining =bapertaka+earning-expense
            
                if(remaining>1000){
                        // var showing=200;
                        const showing=remaining;
                            console.log(showing)
                        
                        return true
                }
                return false;
        }
//      var canMarry=   function(expense){
//                 const remaining =earning-expense
//                 if(remaining>1000){
//                         return true
//                 }
//                 return false;
//         }
}

patrichai(20,500)
