const expect = require("expect/lib");
const { spyOn } = require("expect/lib/SpyUtils");

function shout(string) {}
function shout(string) {return string;}
"Hello!" .toUpperCase();// 'HELLO!'
function shout(string) {
    return string.toUpperCase();
  } 
  function whisper(string) {}
  function whisper(string) {
    return string;
  }
  "hello!".toLowerCase(); // 'hello!'
  function shout(string) {
    return string.toLowerCase();
  }
  function shout(string) {}
  function shout(string) {
    return string;
  }
  "Hello!".toUpperCase(); // 'HELLO!'
  function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string){}
  function whisper(string){
    return string;
  }
  "HELLO!".toLowerCase();//'Hello!'
  function whisper(string){
    return string.toLowerCase();
  }
  function logShout(string){}
  function sayhellotospy() {
  
    console.log("HELLO, spy")
    
  };
console.log('ALL TEXT');
console.log('HELLO');
const spy=spyOn
console.log('and call through');
logShout('hello')
expect(spy).toHaveBeenCalledWith('HELLO');
console.log.restore();
function logShout(string){
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
    if(string==='hello')
    return"I ca\'t hear you!"
    else if(string==='HELLO')
    return"YES INDEED!"
    else(string==="let's have dinner together!")
    return"I would love to!"
}
function sayHiToHeadphonedRoommate(string){
    if(string==='hello')
    return"I can't hear you!"
    else if(string==='HELLO')
    return"YES INDEED!"
    else(string==="let's have dinner together!")
    return"I would love to!"
}