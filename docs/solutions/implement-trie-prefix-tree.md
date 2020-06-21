---
id: implement-trie-prefix-tree
title: 208. Implement Trie (Prefix Tree)
---

# Implement Trie (Prefix Tree)

实现一个 Trie (前缀树)，包含 `insert`, `search`, 和 `startsWith` 这三个操作。

**示例:**

Trie trie = new Trie(); trie.insert("apple"); trie.search("apple"); // 返回 true trie.search("app"); // 返回 false trie.startsWith("app"); // 返回 true trie.insert("app"); trie.search("app"); // 返回 true

**说明:**

-   你可以假设所有的输入都是由小写字母 `a-z` 构成的。
-   保证所有输入均为非空字符串。



```javascript
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.children = {};
    this.endOfWord = '#';
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var node = this.children,
        char;
    
    for (var i = 0, len = word.length; i < len; i++) {
        char = word[i];
        node[char] = node[char] || {};
        node = node[char];
    }
    node[this.endOfWord] = this.endOfWord;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word, canStartsWith = false) {
    var node = this.children,
        char;
    
    for (var i = 0, len = word.length; i < len; i++) {
        char = word[i];
        if (!node[char]) return false;
        node = node[char];
    }

    return canStartsWith ? true : !!node[this.endOfWord];
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.search(prefix, true);
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
```