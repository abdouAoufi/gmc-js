const promiseAll = (promises: any[]) => {
  const resolvedValues = [];
  promises.forEach((promise) => {
    if (!promise.then) throw Error("Not promise");
    promise
      .then((res: any) => resolvedValues.push(res))
      .catch((err: any) => Error(err));
  });
};

promiseAll([1]);
