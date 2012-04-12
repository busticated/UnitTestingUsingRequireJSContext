define(function(  ){
    'use strict';

    var incr = 0;

    var inc = function(){
        incr = incr + 1;
    };

    var dec = function(){
        incr = incr - 1;
    };

    // public api /////////////////////////////////////////////////////////////
    return {
        inc: inc,
        dec: dec,
        get: function(){ return incr; }
    };
});
