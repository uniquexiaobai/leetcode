Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:


Input: 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL
Output: 1-&gt;3-&gt;5-&gt;2-&gt;4-&gt;NULL


Example 2:


Input: 2-&gt;1-&gt;3-&gt;5-&gt;6-&gt;4-&gt;7-&gt;NULL
Output: 2-&gt;3-&gt;6-&gt;7-&gt;1-&gt;5-&gt;4-&gt;NULL


Note:


	The relative order inside both the even and odd groups should remain as it was in the input.
	The first node is considered odd, the second node even and so on ...

