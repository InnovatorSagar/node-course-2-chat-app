const expect = require('expect');

const {isRealString} = require('./validation.js');

 describe('Checking isRealString function',()=>{
   it('should reject non string values',()=>{
     var str = 1234;
     var res = isRealString(str);
     expect(res).toBe(false);
   });
   it('should reject string with spaces',()=>{
     var res= isRealString('     ');
     expect(res).toBe(false);
   });
   it('should allow string with non-space characters',()=>{
     var res = isRealString('  Sagar  ');
     expect(res).toBe(true);
   });
 });
