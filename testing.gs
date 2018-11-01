function doSomeLogs(dogger) {
  
  // try various logging
  dogger.log('Im starting');
  
  for (var i = 0 ; i < 4 ; i++) {
    dogger.log(Math.random());
  }
  
  dogger.log ('heres an object');
  dogger.log ({str:'im an object', num:20, bool: true});
  
  // what happens if we try to report a library object
  dogger.log ('handler object up next');
  dogger.log(dogger);
  
  // an array
  dogger.log([1,2,3,4,5]);
  
  // simulate some time passing and things happening
  for (var i = 0 ; i < 10 ; i++) {
    dogger.log('Im doing something very busy ' + i);
    Utilities.sleep (2000);
  }
  
  // im done
  dogger.log('Im done');
  
}