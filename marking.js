var element,prevI2 =0;
var timer;

function generateTape() {

  if ($("#new").val() == 1) {

    element = new TuringClass("random", $("#len").val());
    draw(element);
  } else {
    element = new TuringClass($("#tapeStr").val(),1);
    draw(element);
  }

}

function draw(el) {

  let containerMain = $("<div></div>");
  let tapeTable = $("<table></table>");
  let buttons = '<table class="noTable" ><tr  class="noTable" ><td  class="noTable"><input type="button" class="but" value="Step" onclick="oneStep();"></td>';

  buttons += '<td  class="noTable"><label class="container2"><input class="checkmark2" id="auto" type="checkbox" value="0" onchange="isAuto()"><span class="checkmark2">&nbsp&nbsp Speed X100 &nbsp&nbsp</span></label>';
  buttons += '<br><br><input type="button" class="but" value="Stop" onclick="stop();">&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" class="but" value="Solve" onclick="solveAuto();"></td></tr></table>';

  let other = $("<div></div>");

  let content;
  let leng = el.getLen();
  let lenOfOneStr = 20;
  let indexOfEl = 0;

  let contentArr = [];

  stop: while (true) {

    content += "<tr>";
    for (let i=0; i<lenOfOneStr; i++) {
      content += "<td id='t" + indexOfEl + "' class='element'>" + el.getEl(indexOfEl) + "</td>";
      indexOfEl++;

      if (isEnd(indexOfEl, leng)) {
        content += "</tr>";
        break stop;
      }
    }
    content += "</tr>";


    content += "<tr>";
    for (let i=0; i<lenOfOneStr - 1; i++) {
      content += "<td></td>";
    }
    content += "<td id='t" + indexOfEl + "' class='element'>" + el.getEl(indexOfEl) + "</td>";
    indexOfEl++;
    content += "</tr>";
    if (isEnd(indexOfEl, leng)) {
      break stop;
    }


    content += "<tr>";
    for (let i=0; i<lenOfOneStr; i++) {
      if (!isEnd(indexOfEl, leng)) {
        contentArr[lenOfOneStr - i -1] = "<td id='t" + indexOfEl + "' class='element'>" + el.getEl(indexOfEl) + "</td>";
        indexOfEl++;
      } else {
        contentArr[lenOfOneStr - i -1] = "<td></td>";
      }
    }

    for (let i=0; i<lenOfOneStr; i++) {
      content += contentArr[i];
    }
    content += "</tr>";

    if (isEnd(indexOfEl, leng)) {
      break stop;
    }


    content += "<tr>";
    content += "<td id='t" + indexOfEl + "' class='element'>" + el.getEl(indexOfEl) + "</td>";
    indexOfEl++;
    for (let i=1; i<lenOfOneStr; i++) {
      content += "<td></td>";
    }
    content += "</tr>";
    if (isEnd(indexOfEl, leng)) {
      break stop;
    }

  }
  content += "<br>";
  content += "<br>";

  other.html(buttons);

  $('#content').html(containerMain);
  containerMain.html(tapeTable);
  tapeTable.html(content);

  tapeTable.after(other);

}

function stop() {
  clearTimeout(timer);
}

function solveAuto () {

  let withoutAnimation = $("#auto").val();
  let delayAnimation;

  if (withoutAnimation == 1) {
    delayAnimation = 0;
  } else {
    delayAnimation = 100;
  }

  timer = setTimeout(function tick() {
    oneStep();
    if (element.getEl(element.getIndex()) != "e") {
      timer = setTimeout(tick, delayAnimation);
    }
  }, delayAnimation);

}

function oneStep() {

  let id = element.getIndex();

  $( "#t" + prevI2 ).removeClass( "selectedElem" );
  $( "#t" + prevI2 ).addClass( "element" );

  element.controlFunc();
  prevI2 = id;
  $( "#t" + id ).html(element.getEl(id));
  $( "#t" + id ).removeClass( "element" );
  $( "#t" + id ).addClass( "selectedElem" );

}

function isEnd(index, leng) {
  if (index >= leng) {
    return true;
  } else {
    return false;
  }
}

function isRandom() {
  if ($("#new").val() == 0) {
    $("#new").val(1);
  } else {
    $("#new").val(0);
  }

}

function isAuto() {
  if ($("#auto").val() == 0) {
    $("#auto").val(1);
  } else {
    $("#auto").val(0);
  }

}
