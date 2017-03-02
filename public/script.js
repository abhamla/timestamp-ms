var timestamp = $('#timestamp').html();
        
// getUnixTime() function
Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
if(!Date.now) Date.now = function() { return new Date(); }
Date.time = function() { return Date.now().getUnixTime(); }

var isUnix = !isNaN(timestamp);
var isString = isNaN(timestamp);

if (isUnix) {
    // Unix to string
    var string = new Date(timestamp * 1000);
    var unix = string.getUnixTime();
} else if (isString) {
    // String parse
    var string = Date.parse(timestamp);
}

// If not a valid date, print null object
if(string == null || unix == 0) {
    var date = {
        unix: null,
        natural: null
    };

// If valid date, print unix and natural values in object
} else {
    if (isString) {
        // String to unix
        var unix = string.getUnixTime();
    }
    
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    var date = {
        unix: unix,
        natural: month[string.getMonth()]+ ' ' + string.getDate() + ', ' + string.getFullYear()
    };
}

// Write date obj to document
$('body').html(JSON.stringify(date));