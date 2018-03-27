      document.addEventListener("DOMContentLoaded", function() {

        var button = document.querySelector('.summon-cats')
        button.addEventListener('click', function() {

      var request = $.ajax ({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      data: {},
      dataType: 'json'
      }).done(function () {
     console.log("request succeeded");
      });
    });
  });
