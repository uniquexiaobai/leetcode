Given an absolute path for a file (Unix-style), simplify it.&nbsp;

For example,
path = &quot;/home/&quot;, =&gt; &quot;/home&quot;
path = &quot;/a/./b/../../c/&quot;, =&gt; &quot;/c&quot;
path = &quot;/a/../../b/../c//.//&quot;, =&gt; &quot;/c&quot;
path = &quot;/a//b////c/d//././/..&quot;, =&gt; &quot;/a/b/c&quot;

In a UNIX-style file system, a period (&#39;.&#39;) refers to the current directory, so it can be ignored in a simplified path. Additionally, a double period (&quot;..&quot;) moves up a directory, so it cancels out whatever the last directory was. For more information, look here:&nbsp;https://en.wikipedia.org/wiki/Path_(computing)#Unix_style

Corner Cases:


	Did you consider the case where path = &quot;/../&quot;?
	In this case, you should return &quot;/&quot;.
	Another corner case is the path might contain multiple slashes &#39;/&#39; together, such as &quot;/home//foo/&quot;.
	In this case, you should ignore redundant slashes and return &quot;/home/foo&quot;.

