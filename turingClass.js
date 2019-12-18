class TuringClass {

  tape = [];
  index = 0;
  command = 'Q0';
  commandsCall = 0 ;

  getLen () {
    return this.tape.length;
  }

  getEl (i) {
    return this.tape[i];
  }

  getIndex () {
    return this.index;
  }

  constructor (getTape, len) {

    if (this.isGetTapeCorrect(getTape) && this.isLength(len)) {
      if (getTape == "random") {

        this.tape[0] = "s";
        for (let i=1;i<=len;i++) {
          this.tape[i] = Math.floor(Math.random()*2);
        }
        this.tape[this.tape.length] = "=";

        for (let i=parseInt(len)+2; i<(Math.floor(len/3)+parseInt(len)+2); i++) {
          this.tape[i] = "x";
        }

      } else {

        for (let i=0; i<getTape.length;i++) {
          this.tape[i] = parseInt(getTape[i]);
        }

        this.tape.unshift("s");

        this.tape[this.tape.length] = "=";

        len = this.tape.length - 2;

        for (let i=parseInt(len)+2; i<(Math.floor(len/3)+parseInt(len)+2); i++) {
          this.tape[i] = "x";
        }
      }
    } else {
      if ((len == "cake") || (getTape == "cake")) {
        this.tape[0] = "The &#x1f370; is a lie";
      } else {
        this.tape[0] = "Ошибка";
      }
    }

    this.index = 0;
    this.command = 'Q0';

    console.clear();

    console.log("Tape: " + this.tape);

  }

  isGetTapeCorrect (getTape) {

    let test = [];

    if (getTape != "random") {

      for (let i=0; i<getTape.length;i++) {
        test[i] = parseInt(getTape[i]);
      }

      for (let i=0;i<test.length;i++) {
        switch (test[i]) {
          case 0: {
            break;
          }
          case 1: {
            break;
          }
          default: {
            return false;
          }
        }
      }

      return true;

    } else if (getTape == "random") {
      return true;
    }
    return false;

  }

  isLength (len) {

    if (!isNaN(len)){
	     if ((len>0) && (len<1000)) {
         return true;
       } else {
         return false;
       }
    } else {
	     return false;
    }
  }

  controlFunc () {
    this.prevI = this.index;
    this.commandsCall++;
    switch (this.command) {
      case "Q0":{
          this.Q0();
        break;
      }
      case "Q1":{
          this.Q1();
        break;
      }
      case "Q1_1":{
          this.Q1_1();
        break;
      }
      case "Q2":{
          this.Q2();
        break;
      }
      case "Q2_1":{
          this.Q2_1();
        break;
      }
      case "Q3":{
          this.Q3();
        break;
      }
      case "Q4":{
          this.Q4();
        break;
      }
      case "Q5":{
          this.Q5();
        break;
      }
      case "Q5_1":{
          this.Q5_1();
        break;
      }
      case "Q6":{
          this.Q6();
        break;
      }
      case "Q7":{
          this.Q7();
        break;
      }
      case "Q8":{
          this.Q8();
        break;
      }
      case "Q8_1":{
          this.Q8_1();
        break;
      }
      case "Q9":{
          this.Q9();
        break;
      }
      case "Q9_1":{
          this.Q9_1();
        break;
      }
      case "Q10":{
          this.Q10();
        break;
      }
      case "Q11":{
          this.Q11();
        break;
      }
      case "Q12":{
          this.Q12();
        break;
      }
      case "Q12_1":{
          this.Q12_1();
        break;
      }
      case "Q13":{
          this.Q13();
        break;
      }
      case "Q14":{
          this.Q14();
        break;
      }
      case "Q15":{
          this.Q15();
        break;
      }
      case "Q16":{
          this.Q16();
        break;
      }
      case "Q17":{
          this.Q17();
        break;
      }
      case "Qz":{
          this.Qz();
        break;
      }

    }
    console.log("-----------------------------");
    console.log("Command: " + this.command);
    console.log("Index: " + this.index);
    console.log("Tape: " + this.tape);
    console.log("Commands call: " + this.commandsCall);
  }

  Q0 () {
    switch (this.tape[this.index]) {
      case "s": {
        this.command = "Q0";
        this.index++;
        break;
      }
      case 0: {
        this.command = "Q1";
        break;
      }
      case 1: {
        this.command = "Q8";
        break;
      }
      case "=": {
        this.command = "Qz";
        break;
      }
      case "x": {
        this.command = "Q0";
        this.index++;
        break;
      }

    }

  }

  Q1 () {
    switch (this.tape[this.index]) {
      case 0: {
        this.tape[this.index]="x";
        this.command = "Q1_1";
        this.index++;
        break;
      }

    }

  }

  Q1_1 () {
    switch (this.tape[this.index]) {
      case 0: {
        this.command = "Q2";
        break;
      }
      case 1: {
        this.command = "Q5";
        break;
      }
      case "=": {
        this.command = "Qz";
        break;
      }

    }

  }

  Q2 () {
    switch (this.tape[this.index]) {
      case 0: {
        this.tape[this.index]="x";
        this.command = "Q2_1";
        this.index++;
        break;
      }

    }

  }

  Q2_1 () {
    switch (this.tape[this.index]) {
      case 0: {
        this.command = "Q3";
        break;
      }
      case 1: {
        this.command = "Q4";
        break;
      }
      case "=": {
        this.command = "Qz";
        break;
      }

    }

  }

  Q3 () {
    switch (this.tape[this.index]) {
      case 0: {
        this.command = "Q15";
        this.tape[this.index]="x";
        this.index++;
        break;
      }

    }

  }

  Q4 () {
    switch (this.tape[this.index]) {
      case 1: {
        this.command = "Q15";
        this.tape[this.index]="x";
        this.index++;
        break;
      }

    }

  }

  Q5 () {
    switch (this.tape[this.index]) {
      case 1: {
        this.command = "Q5_1";
        this.tape[this.index]="x";
        this.index++;
        break;
      }

    }

  }

  Q5_1 () {
    switch (this.tape[this.index]) {
      case 0: {
        this.command = "Q6";
        break;
      }
      case 1: {
        this.command = "Q7";
        break;
      }
      case "=": {
        this.command = "Qz";
        break;
      }

    }

  }

  Q6 () {
    switch (this.tape[this.index]) {
      case 0: {
        this.command = "Q15";
        this.tape[this.index]="x";
        this.index++;
        break;
      }

    }

  }

  Q7 () {
    switch (this.tape[this.index]) {
      case 1: {
        this.command = "Q16";
        this.tape[this.index]="x";
        this.index++;
        break;
      }

    }

  }

  Q8 () {
    switch (this.tape[this.index]) {
      case 1: {
        this.command = "Q8_1";
        this.tape[this.index]="x";
        this.index++;
        break;
      }

    }

  }

  Q8_1 () {
    switch (this.tape[this.index]) {
      case 0: {
        this.command = "Q9";
        break;
      }
      case 1: {
        this.command = "Q12";
        break;
      }
      case "=": {
        this.command = "Qz";
        break;
      }

    }

  }

  Q9 () {
    switch (this.tape[this.index]) {
      case 0: {
        this.command = "Q9_1";
        this.tape[this.index]="x";
        this.index++;
        break;
      }

    }

  }

  Q9_1 () {
    switch (this.tape[this.index]) {
      case 0: {
        this.command = "Q10";
        break;
      }
      case 1: {
        this.command = "Q11";
        break;
      }
      case "=": {
        this.command = "Qz";
        break;
      }

    }

  }

  Q10 () {
    switch (this.tape[this.index]) {
      case 0: {
        this.command = "Q15";
        this.tape[this.index]="x";
        this.index++;
        break;
      }

    }

  }

  Q11 () {
    switch (this.tape[this.index]) {
      case 1: {
        this.command = "Q16";
        this.tape[this.index]="x";
        this.index++;
        break;
      }

    }

  }

  Q12 () {
    switch (this.tape[this.index]) {
      case 1: {
        this.command = "Q12_1";
        this.tape[this.index]="x";
        this.index++;
        break;
      }

    }

  }

  Q12_1 () {
    switch (this.tape[this.index]) {
      case 0: {
        this.command = "Q13";
        break;
      }
      case 1: {
        this.command = "Q14";
        break;
      }
      case "=": {
        this.command = "Qz";
        break;
      }

    }

  }

  Q13 () {
    switch (this.tape[this.index]) {
      case 0: {
        this.command = "Q16";
        this.tape[this.index]="x";
        this.index++;
        break;
      }

    }

  }

  Q14 () {
    switch (this.tape[this.index]) {
      case 1: {
        this.command = "Q16";
        this.tape[this.index]="x";
        this.index++;
        break;
      }

    }

  }

  Q15 () {
    switch (this.tape[this.index]) {
      case 0: {
        this.command = "Q15";
        this.index++;
        break;
      }
      case 1: {
        this.command = "Q15";
        this.index++;
        break;
      }
      case "=": {
        this.command = "Q15";
        this.index++;
        break;
      }
      case "x": {
        this.command = "Q17";
        this.tape[this.index]=0;
        this.index--;
        break;
      }

    }

  }

  Q16 () {
    switch (this.tape[this.index]) {
      case 0: {
        this.command = "Q16";
        this.index++;
        break;
      }
      case 1: {
        this.command = "Q16";
        this.index++;
        break;
      }
      case "=": {
        this.command = "Q16";
        this.index++;
        break;
      }
      case "x": {
        this.command = "Q17";
        this.tape[this.index]=1;
        this.index--;
        break;
      }

    }

  }

  Q17 () {
    switch (this.tape[this.index]) {
      case 0: {
        this.command = "Q17";
        this.index--;
        break;
      }
      case 1: {
        this.command = "Q17";
        this.index--;
        break;
      }
      case "=": {
        this.command = "Q17";
        this.index--;
        break;
      }
      case "x": {
        this.command = "Q0";
        break;
      }

    }

  }

  Qz () {
    this.tape[this.index]="e";
  }

}
