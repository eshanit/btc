var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.listen(process.env.PORT || 3000);


$(document).on('ready', function() {
     $(".regular").slick({
       dots: true,
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 3
     });
     $(".center").slick({
       dots: true,
       infinite: true,
       centerMode: true,
       slidesToShow: 3,
       slidesToScroll: 3
     });
     $(".variable").slick({
       dots: true,
       infinite: true,
       variableWidth: true
     });
   });
