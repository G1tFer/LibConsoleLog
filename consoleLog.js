// style info
const bgBlue = 'background:rgba(0, 192, 255, 0.2);';
const borderBlue ="border-color:#00bcff;";
// style warning
const bgYellow = 'background:rgba(255, 255, 0, .2);';
const borderYellow = 'border-color:yellow;';
// style error
const bgRed = "background: rgba(255, 0, 0, .2);";
const borderRed = 'border-color:red;';
// style success
const bgGreen = 'background: rgba(0, 255, 0, .1);';
const borderGreen = 'border-color:green;';
// style white
const bgWhite = 'background: rgba(255, 255, 255, .05);';
const borderWhite = 'border-color:#fff;';
// style black
const bgBlack = 'background: rgba(0, 0, 0);';
//colorWhite = 'color:#fff;';
let style = 'border:1px solid;border-radius:4px; padding:4px;';

function info(obj, type){
  style += bgBlue + borderBlue;
  v(obj,'Info',style, type);
}
function warning(obj, type){
  style += bgYellow + borderYellow;
  v(obj,'Warning',style, type);
}
function err(obj, type){
  style += bgRed + borderRed;
  v(obj,'Err',style, type);
}
function ok(obj, type){
  style += bgGreen + borderGreen;
  v(obj,'Ok',style, type);
}
function lg(obj, type){
  style += bgWhite + borderWhite;
  v(obj,'Log',style, type);
}
function lx(obj, type){
  style += bgBlack + borderWhite;
  v(obj,'Log',style, type);
}
function lw(obj, type){
  style += 'background:#fff;border:2px solid #000;color:#000;font-weight:bold';
  v(obj,'Log',style, type);
}

function v(obj, title, style, type){
  if(type == 'fColor'){
    if(typeof(obj) == 'object'){
      return console.log("%c" + title + '\n \t' + JSON.stringify(obj) + '\t\t', style);
    }else{
      return console.log("%c" + title + '\n \t' + obj , style);
    }
  }else if(type == 'tColor'){
    return console.log("%c" + title, style, obj);
  }
}
