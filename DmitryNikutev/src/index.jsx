import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";

(function () {
   if (!Array.prototype.last) {
      Array.prototype.last = function () {
         return this[this.length - 1];
      };
   }
})();

ReactDOM.render(<App />, document.getElementById('root'));
