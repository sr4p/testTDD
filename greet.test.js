const greet = require('./greet')

test('Write a method greet(name)', ()=>{
    expect(greet("Bob"));
})
//1
test('when name is "Bob", the method should return a string "Hello, Bob."', ()=>{
    expect(greet("Bob")).toBe("Hello, Bob.");
})

//1.1
test('when name is "Kob", the method should return a string "Hello, Kob."', ()=>{
    expect(greet("Kob")).toBe("Hello, Kob.");
})

//2
test('null, then the method should return the string "Hello, my friend."', ()=>{
    expect(greet(null)).toBe("Hello, my friend.");
})

//3
test('when name is "JERRY" then the method should return the string "HELLO JERRY!"', ()=>{
    expect(greet('JERRY')).toBe("HELLO JERRY!");
})
   
//4
test('when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."', ()=>{
    expect(greet(Array.of("Jill", "Jane"))).toBe("Hello, Jill and Jane.");
})

//5
test('when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."', () => {
    expect(greet(Array.of("Amy","Brian","Charlotte"))).toBe("Hello, Amy, Brian, and Charlotte.");
})

//6
test('when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"', () => {
    expect(greet(Array.of("Amy","BRIAN","Charlotte"))).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
})

//7
test('when name is ["Bob", "Charlie, Dianne"], then the method should return the string "Hello, Bob, Charlie, and Dianne."', () => {
    expect(greet(Array.of("Bob","Charlie, Dianne"))).toBe("Hello, Bob, Charlie, and Dianne.");
})

//8
test('when name is ["Bob", ""Charlie, Dianne""], then the method should return the string "Hello, Bob and Charlie, Dianne."', () => {
    expect(greet(Array.of("Bob","\"Charlie, Dianne\""))).toBe("Hello, Bob and Charlie, Dianne.");
})