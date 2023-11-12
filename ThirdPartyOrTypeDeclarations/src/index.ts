import axios from "axios";
// npm i --save-dev @types/lodash to get the types. It comes for a types library that has lots of Type Declarations
import _ from "lodash";

// There are a set of TypeScript declaration files that ship with Axios in the node_modules
axios
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log("woooo");
    console.log(res.data);
  })
  .catch((e) => {
    console.log(e);
  });

_.partition;
