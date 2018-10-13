Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:


Input: pattern = &quot;abba&quot;, str = &quot;dog cat cat dog&quot;
Output: true

Example 2:


Input:pattern = &quot;abba&quot;, str = &quot;dog cat cat fish&quot;
Output: false

Example 3:


Input: pattern = &quot;aaaa&quot;, str = &quot;dog cat cat dog&quot;
Output: false

Example 4:


Input: pattern = &quot;abba&quot;, str = &quot;dog dog dog dog&quot;
Output: false

Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.