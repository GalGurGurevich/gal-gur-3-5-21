export function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }

export function groupCompnayAndSum(obj) {
  console.log("groupCompnayAndSum obj: ", obj)
    const output = []; 
    Object.entries(obj).forEach(entry => {
      const [key, value] = entry;
      let total = 0;
      for(let i = 0; i < value.length; i++) {
        total += value[i].price;
      }
    output.push({store: key, totalSum: total});
    console.log("output: ", output)
  });
  console.log("groupCompnayAndSum output: ", output)
  return output;
}
