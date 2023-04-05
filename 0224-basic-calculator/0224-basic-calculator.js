/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
     s = "("+s+")"
    let stack = [];
    let temp = [];
    for(let i = 0; i < s.length; i++){
        if(s[i]===" ") continue;
        if(s[i]===")"){     
            while(stack[stack.length-1]!=="(") temp.push(stack.pop());                   
            stack.pop();
            stack.push(count(temp));
            continue;
        }
         if(isNum(stack[stack.length-1])&&isNum(s[i])){
            stack[stack.length-1]+=s[i];   
            continue;             
        } 
        if(s[i]==="-"||s[i]==="+"){
             if(stack.length===0||stack[stack.length-1]==="(") stack.push("0");    
        }
        stack.push(s[i]);
    }
    return stack[0];
};
    
function count(temp) {
   temp = temp.reverse();
      while(temp.length!==1){
          if(temp[1]==="+") temp[0]=(+temp[0])+(+temp[2]);
          if(temp[1]==="-") temp[0]=(+temp[0])-(+temp[2]);
          temp.splice(1,2);
      }
    return temp.pop();
}
    
function isNum(str) {
  return /[0-9]+/.test(str);
};