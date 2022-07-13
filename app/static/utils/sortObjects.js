export default function sortObject(key) {
  return (a, b) => {
    if (!Object.hasOwn(a, key) || !Object.hasOwn(b, key)) {
      console.error(`Cannot sort objects by key that does not exist: ${key}`);
    } else {
      if (a[key] > b[key]) {
        return 1;
      } else if (a[key] < b[key]) {
        return -1;
      }
    }
    return 0;
  };
}