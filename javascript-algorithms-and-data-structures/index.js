// Working Script for Algorithm Solving


let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line

let count= 0;

for (let user in users){
  console.log(users[user].online);
  if (users[user].online)
    count++;  
}
return count;
  // change code above this line
}

console.log(countOnline(users));

