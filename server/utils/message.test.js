var expect = require('expect');

const {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
  it('should generate correct message object',()=>{
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from,text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});

describe('generateLocationMessage',()=>{
  it('should generate correct location object',()=>{
    var from = 'Sagar';
    var latitude = 1;
    var longitude =1;
    var location = generateLocationMessage(from,latitude,longitude);
    var url = 'https://www.google.com/maps?q=1,1';

    expect(typeof location.createdAt).toBe('number');
    expect(location).toMatchObject({from,url});
   });
});
