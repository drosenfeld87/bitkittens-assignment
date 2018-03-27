      document.addEventListener("DOMContentLoaded", function() {

      var button = document.querySelector('.summon-cats')
      button.addEventListener('click', function() {

      var request = $.ajax ({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      data: {},
      dataType: 'json'
    }).done(function (responseData) {
        var divCats = document.getElementsByClassName("cat-box");

        for(var i = 0; i < responseData.cats.length; i++) {
          var img = document.createElement('img');

			  img.src = responseData.cats[i].photo;
        divCats[i].appendChild(img);
    };
  });
  });
  });
