
// do some single thread tasks
function simpleParse(){
  var dogger = getDogger(getParseHandle());
  dogger.clear();
  doSomeLogs(dogger);
}
// do some single thread tasks
function simpleSheet() {
  var dogger = getDogger(getSheetHandle());
  dogger.clear();
  doSomeLogs(dogger);
}
// do some single thread tasks
function simpleMongo() {
  var dogger = getDogger(getMongoHandle());
  dogger.clear();
  doSomeLogs(dogger);
}

// do some tests using thread A
function sheetA() {
  var dogger = getDogger(getSheetHandle(),"sheeta");
  doSomeLogs(dogger);
}
// do some tests using thread B
function sheetB() {
  var dogger = getDogger(getSheetHandle(),"sheetb");
  doSomeLogs(dogger);
}
// do some tests using thread A
function parseA() {
  var dogger = getDogger(getParseHandle(),"parsea");
  doSomeLogs(dogger);
}
// do some tests using thread B
function parseB() {
  var dogger = getDogger(getParseHandle(),"parseb");
  doSomeLogs(dogger);
}

// clear any existing data out
function sheetClear() {
  var dogger = getDogger(getSheetHandle());
  dogger.clear();

}
function parseClear() {
  var dogger = getDogger(getParseHandle());
  dogger.clear();
}
