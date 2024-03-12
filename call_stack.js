

let num1 = 20
 let num2 = 30

 function add (n1, n2) {
    let result = n1 + n2
    return result
}

let result = add(20,10)

console.log(result);

/*                     JavaScript Execution Context
type of execution context: 
- Global Execution Context
- Functional Execution Context
- Eval Execution Context


before execute the code :

first - Memory creation phase
secons - Execution phase 

Execution steps
- global execution and this is located in (this) keyword

- memory phase in this phase store the variables. 
like - num1 - undefined
       num2 - undefined
       add - defination
       result - undefined

- execution phase store variables with his values
    num1 - 20
    num2 - 30
    add - this is a function so we can create again execution steps to  understand how it works
                memory phase - 
                        num1 - undefined
                        num2 - undefined
                        total - undefined
                
                execution phase - 
                        num1 - 20
                        num2 - 30
                        total - 50

                        **after creation this execution step, return back to previous execution steps and delet this one**
    total - 50
*/