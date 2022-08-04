const arr = [1, 2, 3, 4, 5, 6, 7];
const num = 3;
const helper = (n, k, i, map) => {
   if (map.hasOwnProperty([n, k, i]))
   return map[[n, k, i]];
   if (i === 1)
   return map[[n, k, i]] = (k - 1) % n;
   return map[[n, k, i]] =
   (k + helper(n - 1, k, i - 1, map)) % n;
}
const josephus = (arr, k) => {
   let n = arr.length;
   let result = new Array(n);
   let map = {};
   for (let i=1; i<=n; i++)
   result[i - 1] = arr[ helper(n, k, i, map) ];
   return result;
};
console.log(josephus(arr, num));