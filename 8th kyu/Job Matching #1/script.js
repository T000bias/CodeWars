// Solution
function match(candidate, job) {
    // is this job a valid match for the candidate?
    console.log(candidate)
    if (Object.keys(candidate).length === 0 || Object.keys(job).length === 0) {
      throw new Error ('no data');
    }
    
    if (candidate.minSalary - (candidate.minSalary * 0.1) <= job.maxSalary) {
      return true
    } else {
      return false
    }
  }