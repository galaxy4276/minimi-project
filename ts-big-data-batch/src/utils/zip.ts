export const zip = (keys: string[], values: any[]) => {
  const makeObjects = (key: string, value: any) => ({[key]: value});
  const mergeObjects = (a: any[]) => a.reduce((sum, val) => ({ ...sum, ...val}), {});

  let tmp = keys
    .map((key, idx) => [key, values[idx]])
    .filter(a => a[0] && a[1])
    .map(a => makeObjects(a[0], a[1]));

  return mergeObjects(tmp);
}

const testReducer = (acc, val, idx, arr) => {
  console.log(`============idx: ${idx}===========`);
  console.log('acc: ', acc);
  console.log('val: ', val);
  console.log('...objs');
  console.log(...acc, ...val);

  return {
    ...acc,
    ...val
  };
}