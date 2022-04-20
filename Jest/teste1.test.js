const modulo1 = require('./test1')

describe('basic feature', ()=>{
   it('should return the rigth value', ()=>{
      expect(modulo1.func1("emailteste@gmail.com")).toBe(true)
   })
  })