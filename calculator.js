const Calculator = function() {
    this.sum = function(a, b) {
        return a + b;
    }
    
    this.subtract = function(a,b) {
        return a - b;
    }

    this.multiply = function(a,b) {
        return a * b;
    }

    this.divide = function(a,b) {
        return a / b;
    }

    this.modulus = function(a,b) {
        return a % b;
    }

    this.even = function(a) {
        if(a % 2 === 0) {
            return "even";
        }
    }

    this.even = function(a) {
        if(a % 2 !== 0) {
            return "odd";
        }
    }
    
}


// const modulus = null;

module.exports = {Calculator};
