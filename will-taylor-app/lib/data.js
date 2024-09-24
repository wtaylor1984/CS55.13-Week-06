// i need the node default modules for fs and path
import fs from 'fs';
import path from 'path';

// get filepath to data directory
const dataDir = path.join( process.cwd(), 'data' );

// function returns names and ids for all json objects in array, sorted by name property
export function getSortedList() {
  // get filepath to json file
  const filePath = path.join(dataDir, 'data.json');
  
  // load json file contents
  const jsonString = fs.readFileSync(filePath,'utf8');
  
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);

  // sort json array by name property
  jsonObj.sort(
    function(a,b) {
      return a.name.localeCompare(b.name);
    }
  );

  // use map() on array to extract just id + name properties into new array of obj values
  return jsonObj.map(
    function(item) {
      return {
        id: item.id.toString(),
        name: item.name
      };
    }
  );
}

// function returns ids for all json objects in array
export function getAllIds() {
  // get filepath to json file
  const filePath = path.join(dataDir, 'data.json');
  
  // load json file contents
  const jsonString = fs.readFileSync(filePath,'utf8');
  
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);

  // use map() on array to extract just id + name properties into new array of obj values
  return jsonObj.map(
    function(item) {
      return {
        params: {
          id: item.id.toString()
        }
      };
    }
  );
  
}


// This one is too simple and I want to get all the information in the app in a better way!
export async function getData(idRequested) {
  // get filepath to json file
  const filePath = path.join(dataDir, 'data.json');
  
  // load json file contents
  const jsonString = fs.readFileSync(filePath,'utf8');
  
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);

  // find object value in array that has matching id
  console.log(idRequested);
  const objMatch = jsonObj.filter(
    function(obj) {
      return obj.id.toString() === idRequested;
    }
  );

  // extract object value in filtered array if any
  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch;

    //we found something, now, let's grab all the pets
    // get filepath to json file
    const filePath2 = path.join(dataDir, 'animals.json');
    // load json file contents
    const jsonString2 = fs.readFileSync(filePath2,'utf8');
    // convert string from file into json array object
    const jsonObj2 = JSON.parse(jsonString2);
    // find object value in array that has matching id
    const objMatch2 = jsonObj2.filter(
      function(obj) {
        return obj.ownerID.toString() === idRequested;
      }
    );
    //objReturned.pets = objMatch2;
    objReturned.push(objMatch2);
  } else {
    objReturned = {};
  }

  // return object value found
  return objReturned;
}
