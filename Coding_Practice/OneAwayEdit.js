// There are three types of edits that can be performed on strings: insert a character, remove a character,
// or replace a character. Given two strings, write a function to check if they are zero or one edit away
// pale, ple = true | pales, pale = true | pale, bale = true | pale, bake = false

let oneAway = (str1, str2)=>{
    let edit =1;
    let maxLength = Math.max(str1.length, str2.length);
    
    let diff = Math.abs(str1.length - str2.length);
    
    if(diff > edit){
        return false;
    }
    
    for( let i = 0; j = 0; i <maxLength || j< maxLength; i++, j++){
        let curr1 = str1[i];
        let curr2 = str2[j];
        
        if( curr1 !== curr2){
            edit--;
            
            if(edit < 0){
                return false;
            }
            
            if(str1[i] === str2[j + 1]){
                j++;
            } else if(str1[i+1] === s2[j]){
                i++;
            }
        }
    }
    
    return true;
}
