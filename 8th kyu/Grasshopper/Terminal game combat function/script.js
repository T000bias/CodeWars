// Solution
function combat(health, damage) {
    // Write your code here
    if (health - damage <= 0) {
      return 0
    }
    return health - damage
  }