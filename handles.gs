
//---- all about parse----------------------
// note i have my parse credentials already stored here
function getParseHandle () {
  return new cDbAbstraction.DbAbstraction(cDriverParse, {
    driverob:JSON.parse(PropertiesService.getScriptProperties().getProperty('parseKeys')),
    siloid:'doggerlogger',
    dbid:'xliberation'
  });
}
function getSheetHandle() {
  return new cDbAbstraction.DbAbstraction(cDriverSheet, {
    siloid:'doggerlogger',
    dbid:'1yTQFdN_O2nFb9obm7AHCTmPKpf5cwAd78uNQJiCcjPk'
  });
}
function getMongoHandle () {
  return parseHandle = new cDbAbstraction.DbAbstraction(cDriverMongoLab, {
    driverob:JSON.parse(PropertiesService.getScriptProperties().getProperty('mongoLabKeys')),
    siloid:'doggerlogger',
    dbid:'xliberation'
  });
}
function getDogger (handle, thread) {
  return new cDogger.Dogger(handle, {
    clearfirst:false,
    thread:thread,
    failsilently:false
  });
}


function getLibraryInfo () {
  return {
    info: {
      name:'generateLogs',
      version:'0.0.1',
      key:'MV5u8iSE0JbpO_8Osgh4jbiz3TLx7pV4j',
      description:'generate test data for dogger libraries',
      url:'https://script.google.com/d/12r2HAuFnXjNGRywwxqR1I-IM4_8512GwcdYIRpQBwg1GCohoCA4OXDp7/edit?usp=sharing'
    },
    dependencies:[
      cDriverParse.getLibraryInfo(),
      cDbAbstraction.getLibraryInfo(),
      cDriverSheet.getLibraryInfo(),
      cDogger.getLibraryInfo(),
      cDriverMongoLab.getLibraryInfo(),
      cDriverOrchestrate.getLibraryInfo()
    ]
  }; 
}
