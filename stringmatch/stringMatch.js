//Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
var strStr = function(haystack, needle) {
    if(!needle) return 0;
    if(!haystack || needle.length > haystack.length) return -1;
    for(let i = 0 ; i < haystack.length - needle.length + 1; i++){
       var str = haystack.substr(i,needle.length);
       if(str === needle){
           return i;
       }
    }
    return -1;
};



strStr("emily", "");   // 0
strStr("emily", "e");   // 0
strStr("emily", "i");   // 2
strStr("emily", "ily"); // 2
