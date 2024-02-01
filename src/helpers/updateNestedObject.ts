export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

const updateNestedObject = <T>(obj: T, update: DeepPartial<T>): T => {
  const result = { ...obj };

  for (const key in update) {
    if (update.hasOwnProperty(key)) {
      if (typeof update[key] === "object" && !Array.isArray(update[key])) {
        result[key] = updateNestedObject(result[key], update[key]!);
      } else {
        result[key] = update[key] as any;
      }
    }
  }
  return result;
};

export default updateNestedObject;
