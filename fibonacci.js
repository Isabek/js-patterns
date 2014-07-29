var algorithm = { 
	fibonacci: function(n){
		var a = 0, b = 1, c = 0, counter = 0; 
		
		while(counter < 0){ 
			c = a + b;  
			b = a;  
			a = c; 
			counter ++;
		} 

		return c;
	}
};