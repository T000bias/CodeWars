function naughtyOrNice(data) {
    let counter = {
      "Naughty": 0,
      "Nice": 0
    }
    for (num in data) {
      for (num2 in data[num]) {
        if (data[num][num2] == "Naughty") {
          counter["Naughty"] += 1
        } else {
          counter["Nice"] += 1
        }
      }
    }
    return counter["Naughty"] > counter["Nice"] ? "Naughty!" : "Nice!"
  }