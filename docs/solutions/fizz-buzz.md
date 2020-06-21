---
id: fizz-buzz
title: 412. Fizz Buzz
---

# Fizz Buzz

写一个程序，输出从 1 到 _n_ 数字的字符串表示。

1\. 如果 _n _是3的倍数，输出“Fizz”；

2\. 如果 _n _是5的倍数，输出“Buzz”；

3.如果 _n _同时是3和5的倍数，输出 “FizzBuzz”。

**示例：**

n = 15, 返回: \[ "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz" ]



```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var result = [];
    
    for (var i = 1; i <= n; i++) {
        result.push((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i + '');
    }
    
    return result;
};
```