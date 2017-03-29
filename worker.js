self.onmessage = function(event) {
  var n = 1;
  var primelist = "";
  search: while (n < event.data) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1){
      if (n % i == 0)
        continue search;
    }
    primelist += " " + n;
    if (primelist.length > 75000){
      self.postMessage(primelist);
      primelist = "";
    }
  }
  self.postMessage(primelist);

}
