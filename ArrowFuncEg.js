// Arrow Function Example
const profile = {
  firstName: ' ',
  lastName: ' ',
  setName: function(name){
    let splitName = (n)=>{
      let nameArray = n.split(' ');
      this.firstName = nameArray[0];
      this.lastName = nameArray[1];
    }
    splitName(name);
  }

}

profile.setName('john doe');
console.log(profile.firstName);


// Difference between function declaration and function expression

function funcDec(){
  console.log('function declaration');
}

const funcExp = function(){
  console.log('function Expression');
}

funcDec();
console.log(funcExp());
