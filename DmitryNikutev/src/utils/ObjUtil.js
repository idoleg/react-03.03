
//returns true if null, undefined, '', "", [] or {} is passed
export const isEmpty = (obj) => {
   if (!obj && obj !== 0) return true;

   return Object.keys(obj).length === 0 && obj.constructor === Object
      || Array.isArray(obj) && !obj.length;
};
