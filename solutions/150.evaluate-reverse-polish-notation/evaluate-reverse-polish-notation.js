/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
	var getResult = function (opr, a, b) {
		switch (opr) {
			case '+': return a + b;
			case '-': return a - b;
			case '*': return a * b;
			case '/': return ~~(a / b);
			default: return;
		}
	}

    var stack = [];
		
	for (var i = 0; i < tokens.length; i ++) {
		var token = +tokens[i];

		if (token === token) {
			stack.push(token);
		} else {
			if (stack.length < 2) return;
			var b = stack.pop();
			var a = stack.pop();
			var result = getResult(tokens[i], a, b);

			if (typeof result === 'number') 
				stack.push(result);
			else 
				return;
		}
	}

	if (stack.length) 
		return stack.pop();
	else 
		return;    
};