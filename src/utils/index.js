import { useEffect, useState } from 'react';

export const isFalsy = (vaule) => (vaule === 0 ? false : !vaule);

/**
 * 删除对象属性值为空值的属性
 * @param {object} object
 * @returns
 */
export const cleanObject = (object) => {
  // 传入的对象，不改变对象本身
  // Object.assign({}, object)
  const newObject = { ...object };
  Object.keys(newObject).forEach((key) => {
    const vaule = newObject[key];
    // 属性值为0， 不删除
    if (isFalsy(vaule)) {
      delete newObject[key];
    }
  });
  return newObject;
};

/**
 * useEffect
 * @param {Function} callBack
 */
export const useMount = (callBack) => {
  useEffect(() => {
    callBack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

// const debounce = function(func, delay) {
//   let timeout
//   return (...param) => {
//     if (timeout) {
//       clearTimeout(timeout)
//     }
//     timeout = setTimeout(() => {
//       func(...param)
//     }, delay)
//   }
// }

// const log = debounce(() => console.log('call'), 5000)
// log()
// log()
// log()
//   ...5s
// 执行！

// debounce 原理讲解：
// 0s ---------> 1s ---------> 2s --------> ...
//     一定要理解：这三个函数都是同步操作，所以它们都是在 0~1s 这个时间段内瞬间完成的；
//     log()#1 // timeout#1
//     log()#2 // 发现 timeout#1！取消之，然后设置timeout#2
//     log()#3 // 发现 timeout#2! 取消之，然后设置timeout#3
//             // 所以，log()#3 结束后，就只剩timeout#3在独自等待了

/**
 * 防抖
 * @param {object} value
 * @param {number} delay
 */
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 每次value变化后，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个useEffect处理完成之后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
