---
id: design-add-and-search-words-data-structure
title: 211. Design Add and Search Words Data Structure
---

# Design Add and Search Words Data Structure

请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。

实现词典类 `WordDictionary` ：

-   `WordDictionary()` 初始化词典对象
-   `void addWord(word)` 将 `word` 添加到数据结构中，之后可以对它进行匹配
-   `bool search(word)` 如果数据结构中存在字符串与 `word` 匹配，则返回 `true` ；否则，返回 `false` 。`word` 中可能包含一些 `'.'` ，每个 `.` 都可以表示任何一个字母。



**示例：**

**输入：** \["WordDictionary","addWord","addWord","addWord","search","search","search","search"] \[\[],\["bad"],\["dad"],\["mad"],\["pad"],\["bad"],\[".ad"],\["b.."]] **输出：** \[null,null,null,null,false,true,true,true] **解释：** WordDictionary wordDictionary = new WordDictionary(); wordDictionary.addWord("bad"); wordDictionary.addWord("dad"); wordDictionary.addWord("mad"); wordDictionary.search("pad"); // return False wordDictionary.search("bad"); // return True wordDictionary.search(".ad"); // return True wordDictionary.search("b.."); // return True



**提示：**

-   `1 <= word.length <= 500`
-   `addWord` 中的 `word` 由小写英文字母组成
-   `search` 中的 `word` 由 '.' 或小写英文字母组成
-   最调用多 `50000` 次 `addWord` 和 `search`



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