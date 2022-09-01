let x = "https://www.youtube.com/watch?v=b7vfp5G4brE";
let mi = x.replace("www.youtube.com/watch?v=", "youtu.be/");
console.log(mi);

let zz = x.slice(0,(x.indexOf("www"))) + "youtu.be/" + x.slice(x.indexOf("=")+1)
console.log(zz)


let zzz = x.slice(0,(x.indexOf("www"))) + x.slice(x.indexOf("you"),x.indexOf("be") ) + ".be/"  + x.slice(x.indexOf("=")+1)
console.log(zzz)