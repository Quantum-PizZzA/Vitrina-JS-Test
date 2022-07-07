function Test() {
  for (i = 0; i < 10000; i++) {
    console.log(i);
    maxinn = 999999999999;
    mininn = 1000000000;
    maxPrice = 8000;
    minPrice = 10;
    J = {
      EAN: "14601234567890",
      INN: Math.floor(Math.random() * (maxinn - mininn + 1)) + mininn,
      Price: Math.floor(Math.random() * (maxPrice - minPrice + 10)) + minPrice,
      Name: "Печенье",
      Date: Date.now()
      // Date2: new Date()
    };
    localStorage.setItem(Date.now() + i, JSON.stringify(J));
  }
}
