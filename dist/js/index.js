"use strict";

/*! atomic v1.0.0 | (c) 2015 @toddmotto | https://github.com/toddmotto/atomic */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b:a.atomic=b(a)}(this,function(a){"use strict";var b={},c={contentType:"application/x-www-form-urlencoded"},d=function(a){var b;try{b=JSON.parse(a.responseText)}catch(c){b=a.responseText}return[b,a]},e=function(b,e,f){var g={success:function(){},error:function(){},always:function(){}},h=a.XMLHttpRequest||ActiveXObject,i=new h("MSXML2.XMLHTTP.3.0");i.open(b,e,!0),i.setRequestHeader("Content-type",c.contentType),i.onreadystatechange=function(){var a;4===i.readyState&&(a=d(i),i.status>=200&&i.status<300?g.success.apply(g,a):g.error.apply(g,a),g.always.apply(g,a))},i.send(f);var j={success:function(a){return g.success=a,j},error:function(a){return g.error=a,j},always:function(a){return g.always=a,j}};return j};return b.get=function(a){return e("GET",a)},b.put=function(a,b){return e("PUT",a,b)},b.post=function(a,b){return e("POST",a,b)},b["delete"]=function(a){return e("DELETE",a)},b.setContentType=function(a){c.contentType=a},b});

ready(function() {
  var div;
  var row = document.body.querySelector(".row");
    
  init(function() {
    //paintSquares();
    //setInterval(paintSquares, 5000);
  });

  function init(callback) {
    var colors;
    atomic.get('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json')
    .success(function (data, xhr) {
      colors = data;
      var styles = []

      for (var key in colors) {
        if (colors.hasOwnProperty(key)) {
        	if (colors[key].color) {
          	var truncted = key.split(' ').join('-')
          	styles.push("<div style=background-color:"+colors[key].color+"><div>"+colors[key].color+"<br><h1>"+key+"</h1></div></div>")
          }
        }
        
      }
      row.insertAdjacentHTML("beforeend", styles.join(''));
    })
    .error(function (data, xhr) {
       console.log(xhr)
    })
  }
});

function ready(f){/in/.test(document.readyState)?setTimeout('ready('+f+')',9):f()}