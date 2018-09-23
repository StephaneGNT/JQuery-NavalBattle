let boat1 = ["b4", "b5", "b6"];
let boat2 = ["d9", "e9", "f9"];
let alreadyShot=[];

$("#canon").keypress(function (e) {
  if (e.which == 13) {

    let target = $("#canon").val();
    let re = /^(?:[a-f]|[A-F])[1-9]$/;
    

    if (!target.match(re)) {
      $("#history").append("<p>Coordonnées non valides</p>");
      window.setTimeout(function () {
        $("#history p:last").remove();
      }, 2000);
    }
    else {
      let str = String("#" + target.toLowerCase());
      $(str).css("background-color", "red");
      let message = "TOUCHE";

      console.log("target :"+target);
      console.log("alreadyShot :"+alreadyShot)
      console.log("index :"+alreadyShot.indexOf(target.toLowerCase()));


      if(alreadyShot.indexOf(target.toLowerCase())!=-1){
        message="You already shot here"
      }
      else if ($(str).text() == "") {
        message = "PLOUF";
        console.log("OK plouf");
      }
      else {
        if (boat1.indexOf(target.toLowerCase()) != -1) {
          boat1.splice(boat1.indexOf(target.toLowerCase()), 1);
          console.log("boat1 :"+boat1);
          if (boat1.length == 0) {
            if (boat2.length == 0) message = "WIN"
            else message = "COULE"
          }
        }
        else {
          boat2.splice(boat1.indexOf(target.toLowerCase()), 1);
          if (boat2.length == 0) {
            if (boat1.length == 0) message = "WIN"
            else message = "COULE"
          }
        }
      }
      $("#history").append("<p>" + message + "</p>");
      alreadyShot.push(target.toLowerCase());
      console.log("alreadyShot :"+alreadyShot);
    }
    $(this).val("");
  }
});
