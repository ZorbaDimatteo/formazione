/* function parsePromised(json){
    try{
        let parsedJson = JSON.parse(json) 
        return Promise.resolve(parsedJson);
    } catch(e) {
        return Promise.reject(console.log(e.message));
    }
}

parsePromised(process.argv[2]); */

// soluzione dell'esercizio

'use strict';
    
    function parsePromised(json) {
      return new Promise(function (fulfill, reject) {
        try {
          fulfill(JSON.parse(json));
        } catch (e) {
          reject(e);
        }
      });
    }
    
    function onReject(error) {
      console.log(error.message);
    }
    
    parsePromised(process.argv[2])
    .then(null, onReject);