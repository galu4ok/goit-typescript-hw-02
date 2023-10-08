/*
  Є функція getPromise(), яка повертає проміс, що додається в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise<T extends Array<string | number>>() {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise<[string | number]>().then((data) => {
  console.log(data);
});

export {};
