let s = function (sketch) {

   sketch.setup = function () {
      document.body.style['userSelect'] = 'none';
      let h = document.body.clientHeight;
      let c = sketch.createCanvas(sketch.windowWidth, h);
      c.position(0,0);
      sketch.clear();

      c.style('pointer-events', 'none');
   }

    sketch.draw = function () {
      sketch.stroke(0);
      sketch.strokeWeight(4);
      if(sketch.mouseIsPressed){
         sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
   }

};

let myp5 = new p5(s);
