// Soluiton
function calculateYears(principal, interest, tax, desired) {
    // your code
  let count = 0
  while (principal < desired) { {
    principal = principal + ((principal * interest) - (principal * interest * tax))
    count++
  }
    
  }
  return count
}