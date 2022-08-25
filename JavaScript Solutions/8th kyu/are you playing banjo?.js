function areYouPlayingBanjo(name) {
  // Implement me
  console.log(name);
//   console.log(typeOf(name));
  const check1 = name.split();
  console.log(check1);
  const check2 = name[0][0];
  console.log(check2);
  const check3 = 'r';
  const check4 = 'R';
  console.log(check3.includes(check2) || check4.includes(check2));
  if (check3.includes(check2) || check4.includes(check2)) {
    return `${name} plays banjo`
  } else {
    return `${name} does not play banjo`
  }
  
}