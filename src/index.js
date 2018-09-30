// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if(currency >= 10000) {
        return { error: 'You are rich, my friend! We don\'t have so much coins for exchange' };
    }
    if(currency <= 0) {
        return {}
    }
    result = {};
    result.H = Math.floor(currency / 50);
    currency %= 50;
    result.Q = Math.floor(currency / 25);
    currency %= 25;
    result.D = Math.floor(currency / 10);
    currency %= 10;
    result.N = Math.floor(currency / 5);
    currency %= 5;
    result.P = (currency);
    
    if(result.H == 0) {
        delete result.H;
    }
    if(result.Q == 0) {
        delete result.Q;
    }
    if(result.D == 0) {
        delete result.D;
    }
    if(result.N == 0) {
        delete result.N;
    }
    if(result.P == 0) {
        delete result.P;
    }
    return result;
}
