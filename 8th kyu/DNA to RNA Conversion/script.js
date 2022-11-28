// Solution
function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    return dna.replace(/t/gi, "u").toUpperCase()
  
  }