// CASH REGISTER
/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key. */

function checkCashRegister(price, cash, cid) {
  price = Math.round(price * 100);
  cash = Math.round(cash * 100);

  let cid100 = cid.map(pair => [pair[0], parseInt(pair[1].toFixed(2).toString().replace('.',''))]);

  const changeDue = Number(cash - price);

  let values = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  let changeObj = {
    status: '', 
    change: []
  };

  function checkDrawer(index) {
    while (!cid100[index][1])
      index--;
    return index;
  }

  function largestChange(changeDue) {
    for (let i = 0; i < values.length; i++) {
      if (changeDue === values[i])
        return checkDrawer(i, cid100);
      if (changeDue < values[i])
        return checkDrawer(i - 1, cid100);
    }
  }

  let moneyIndex = largestChange(changeDue);

  function getMoney(i, changeDue) {
    let changeGiven = 0;
    while (i >= 0) {
      let changeThisCurrency = 0;

      while (changeGiven <= changeDue - values[i] && cid100[i][1] > 0) {
        cid100[i][1] -= values[i];
        changeGiven += values[i];
        changeThisCurrency += values[i];
      }

      if (changeThisCurrency > 0)
        changeObj.change.push([cid100[i][0], changeThisCurrency/100]);

      if (cid100.every(arr => arr[1] == 0) && changeGiven == changeDue) {
        changeObj.status = 'CLOSED';
        changeObj.change = cid;
        return changeObj;
      }
        
      if (changeGiven == changeDue){
        changeObj.status = 'OPEN';
        return changeObj;
      }

      i--;
    }
    
    if (changeGiven != changeDue) {
      changeObj.status = 'INSUFFICIENT_FUNDS';
      changeObj.change = [];
      return changeObj;
    }
  }

  return getMoney(moneyIndex, changeDue);
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
