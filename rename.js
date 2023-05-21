function operator(proxies) {
  const counts = {};
  proxies.map((res) => {
    const resultArray = [airport];
    var matched = false;
    for (const elem of Object.keys(countries)) {
      if (simplify(res.name).indexOf(elem) !== -1) {
        if (!counts[elem]) {
          counts[elem] = 1;
        } else {
          counts[elem] += 1;
        }
        const count = counts[elem].toString().padStart(2, '0');
        resultArray.push(countries[elem][0], count);
        matched = true;
        break;
      }
    }
    if (!matched) {
      resultArray.push(res.name);
    }
    Object.keys(others).forEach((elem, index) => {
      if (simplify(res.name).indexOf(elem) !== -1) {
        resultArray.splice(2, 0, others[elem]);
      }
    });
    res.name = resultArray.join(' ');
  });
  if ($arguments.del1) {
    proxies = stripOnes(proxies);
  }
  return proxies;
}
