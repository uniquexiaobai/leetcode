Given an absolute path for a file (Unix-style), simplify it.

For example,
path = &quot;/home/&quot;, =&gt; &quot;/home&quot;
path = &quot;/a/./b/../../c/&quot;, =&gt; &quot;/c&quot;

click to show corner cases.

Corner Cases:

&nbsp;

&nbsp;


	Did you consider the case where path = &quot;/../&quot;?
	In this case, you should return &quot;/&quot;.
	Another corner case is the path might contain multiple slashes &#39;/&#39; together, such as &quot;/home//foo/&quot;.
	In this case, you should ignore redundant slashes and return &quot;/home/foo&quot;.

