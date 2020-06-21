---
id: add-and-search-word-data-structure-design
title: 211. Add and Search Word - Data structure design
---

# Add and Search Word - Data structure design

设计一个支持以下两种操作的数据结构：

void addWord(word) bool search(word)

search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 `.` 或 `a-z` 。 `.` 可以表示任何一个字母。

**示例:**

addWord("bad") addWord("dad") addWord("mad") search("pad") -> false search("bad") -> true search(".ad") -> true search("b..") -> true

**说明:**

你可以假设所有单词都是由小写字母 `a-z` 组成的。



```javascript
/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.children = {};
    this.endOfWord = '#';
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    var node = this.children,
        char;
    
    for (var i = 0, len = word.length; i < len; i++) {
        char = word[i];
        node[char] = node[char] || {};
        node = node[char];
    }

    node[this.endOfWord] = 1;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const match = (node, word, index) => {
        var char = word[index];
        if (index === word.length) return !!node[this.endOfWord];
        if (char === '.') {
            var keys = Object.keys(node).filter(key => key !== this.endOfWord);
            if (!keys.length) return false;
            return keys.some((key) => {
                return match(node[key], word, index + 1);
            });
        } else {
            if (!node[char]) return false;
            return match(node[char], word, index + 1);
        }
    };

    return match(this.children, word, 0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
```