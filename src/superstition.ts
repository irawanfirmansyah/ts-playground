function processData(input: number) {
  function innerProcessData(floor: number, counter: number): number {
    console.log({ floor, counter });
    if (counter === input) return floor;
    floor += 1;
    if (String(floor).indexOf("4") < 0 && String(floor).indexOf("13") < 0) {
      counter += 1;
    }
    return innerProcessData(floor, counter);
  }

  return innerProcessData(1, 1);
}

// console.log(findTicket2(5, 5, 5, 1, 5));
// console.log(findTicket2(5, 5, 5, 2, 5));
// console.log(findTicket2(5, 5, 5, 5, 5));
console.log(processData(12));
