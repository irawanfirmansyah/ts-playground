/**
 *
 * @param x Express Unlimited ticket holders
 * @param y Express ticket holders
 * @param z Regular ticket holders
 * @param n Num of holders processed for each entry
 * @param q Holder position in queue that we want to find
 * @returns 0 or 1 or 2
 *
 * Mapping:
 * ---------------------------------------------
 * | Value  |               Type               |
 * ---------|----------------------------------|
 * | 0      | Express Unlimited Ticket Holders |
 * | 1      | Express Ticket Holders           |
 * | 2      | Regular Ticket Holders           |
 * ---------------------------------------------
 *
 * E.g.:
 * x=2, y=3, z=10, n=1, q=3 -> ans:2
 *
 * Explanation:
 *
 * Entry 1:
 * N=1 Express Unlimited Ticket Holder enters the show. 1 Left
 *
 * Entry 2:
 * N=1 Express Ticket Holder enters the show. 2 left
 *
 * Entry 3:
 * N=1 Regular Ticket Holder enters the show. 9 left. The holder is position 3 in the queue and based on mapping table the value is 2.
 * Returns 2
 * 
 * 
 * 
 * 

 * 
 * 
 * E.g.:
 * x=5, y=5, z=5, n=3, q=7 -> ans: 2
 * 
  [
 *  0, 0, 0, 
 *  1, 1, 1,
 *  2, 2, 2,
 *  0, 0, 1, 
 *  1, 2, 2,  
 * ]
 *
 * Explanation:
 *
 * Entry 1:
 * 3 Express Unlimited Ticket Holder enter the show. 2 Left
 *
 * Entry 2:
 * 3 Express Ticket Holder enters the show. 2 left
 *
 * Entry 3:
 * N=1 Regular Ticket Holder enters the show. 9 left. The holder is position 3 in the queue and based on mapping table the value is 2.
 * Returns 2
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

const ticketTypeMapping: Record<PropertyKey, string> = {
  0: "Express Unlimited Ticket Holders",
  1: "Express Ticket Holders",
  2: "Regular Ticket Holders",
};

function findTicket2(x: number, y: number, z: number, n: number, q: number) {
  const arr = [x, y, z];
  const queue = new Array<number>(x + y + z).fill(0);

  let arrPointer = 0;
  let queuePointer = 0;
  let num = n;

  while (queuePointer < queue.length) {
    if (num <= 0) {
      num = Math.min(arr[arrPointer], n);
    }

    if (arr[arrPointer] > 0) {
      let count = 0;
      for (let i = 0; i < num; i++) {
        count += 1;
        queue[queuePointer] = arrPointer;
        arr[arrPointer] -= 1;
        queuePointer += 1;
      }
      num -= count;
    }

    arrPointer = (arrPointer + 1) % 3;
  }

  return queue[q - 1];
}

const position = 3;
const result = findTicket2(2, 3, 10, 1, position);
console.log(
  `The person who is at position ${position} is ${result} (${ticketTypeMapping[result]})`
);
