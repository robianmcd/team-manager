//http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
//Usage:  "{0} is dead, but {1} is alive! {0} {2}".format("ASP", "ASP.NET")
//  returns: ASP is dead, but ASP.NET is alive! ASP {2}
if (typeof(String.prototype.format) === 'undefined') {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] !== 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}