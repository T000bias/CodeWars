// Solution
function getStatus(isBusy) {
    let msg = "available";
    if (isBusy === true) {
      msg = 'busy'
    }
    
    return { status: msg }
  }