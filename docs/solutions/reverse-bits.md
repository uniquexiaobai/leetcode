---
id: reverse-bits
title: 190. Reverse Bits
---

# Reverse Bits

颠倒给定的 32 位无符号整数的二进制位。



**示例 1：**

**输入:** 00000010100101000001111010011100 **输出:** 00111001011110000010100101000000 **解释: **输入的二进制串 **00000010100101000001111010011100 **表示无符号整数** 43261596****， **因此返回 964176192，其二进制表示形式为 **00111001011110000010100101000000**。

**示例 2：**

**输入：**11111111111111111111111111111101 **输出：**10111111111111111111111111111111 **解释：**输入的二进制串 **11111111111111111111111111111101** 表示无符号整数 4294967293， 因此返回 3221225471 其二进制表示形式为 **10111111111111111111111111111111 。**



**提示：**

-   请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
-   在 Java 中，编译器使用[二进制补码](https://baike.baidu.com/item/二进制补码/5295284)记法来表示有符号整数。因此，在上面的 **示例 2** 中，输入表示有符号整数 `-3`，输出表示有符号整数 `-1073741825`。



**进阶**:  
如果多次调用这个函数，你将如何优化你的算法？



```javascript
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    n = (n >>> 16) | (n << 16);
    n = (n >> 8 & 0x00ff00ff) | (n << 8 & 0xff00ff00);
    n = (n >> 4 & 0x0f0f0f0f) | (n << 4 & 0xf0f0f0f0);
    n = (n >> 2 & 0x33333333) | (n << 2 & 0xcccccccc);
    n = (n >> 1 & 0x55555555) | (n << 1 & 0xaaaaaaaa);
    
    return n >>> 0;
};

/*
var reverseBits = function(n) {
    var cache = {
	    	'0': 0b0000,
	    	'1': 0b1000,
	    	'2': 0b0100,
	    	'3': 0b1100,

	    	'4': 0b0010,
	    	'5': 0b1010,
	    	'6': 0b0110,
	    	'7': 0b1110,

	    	'8': 0b0001,
	    	'9': 0b1001,
	    	'10': 0b0101,
	    	'11': 0b1101,

	    	'12': 0b0011,
	    	'13': 0b1011,
	    	'14': 0b0111,
	    	'15': 0b1111
	    },
    	i = 8,
    	result = 0;

    while (i--) {
    	result <<= 4;
    	result |= cache[n & 0xf];
    	n >>= 4;
    }

    return result >>> 0;
};
*/

/*
var reverseBits = function(n) {
	function reverseByte(n) {
		var i = 4,
			byte = 0;

		while (i--) {
			byte <<= 1;
			byte |= n & 1;
			n >>= 1;
		}

		return byte;
	}

    var cache = {},
    	i = 8,
    	result = 0,
    	byte;

    while (i--) {
    	result <<= 4;
    	byte = n & 0xf;
    	result |= cache[byte] || (cache[byte] = reverseByte(byte));
    	n >>= 4;
    }

    return result >>> 0;
};
*/

/*
var reverseBits = function(n) {
    var i = 32,
    	result = 0;

    while (i--) {
    	result <<= 1;
    	result |= n & 1;
    	n >>= 1;
    }

    return result >>> 0;
};
*/
```