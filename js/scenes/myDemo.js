let MyDemo = function() {

   this.init = (model) => {
      this.start = true;
      this.name = "myDemo";
      this.model = model;
      this.model.move(-3,0,0).scale(0.4);

      let height = 4;
      // table
      this.table = this.model.add();
      this.table.add('cube').scale(2,0.1,2).color(1,1,1).move(0,height,0).texture('media/textures/wood.png');
      this.table.add('cube').scale(0.2,1.5,0.2).color(1,1,1).move(8,-0.8,-8).texture('media/textures/wood.png');
      this.table.add('cube').scale(0.2,1.5,0.2).color(1,1,1).move(-8,-0.8,-8).texture('media/textures/wood.png');
      this.table.add('cube').scale(0.2,1.5,0.2).color(1,1,1).move(8,-0.8,8).texture('media/textures/wood.png');
      this.table.add('cube').scale(0.2,1.5,0.2).color(1,1,1).move(-8,-0.8,8).texture('media/textures/wood.png');

      this.globe = this.model.add();
      // base
      this.base = this.globe.add();
      this.base.add('tubeY').scale(0.8,0.1,0.8).color(0.1,0.1,0.1).move(0,height + 0.2,0);
      // support
      this.support = this.globe.add();
      for(let i = 30; i > 0; i--){
         let w = 0.1 + i * 0.005;
         let h = height + (31 - i) * 0.15;
         this.support.add('cube').scale(w, 0.1, w).color(1,1,1).move(0,h,0);
      }
      // sphere
      this.sphere = this.globe.add();
      this.sphere.add('sphere').scale(0.5,0.5,0.5).color(1,1,1).move(0,3,0).texture('media/textures/globe.png');
      this.sphere.add('tubeY').scale(0.05,0.6,0.05).color(0,0,0).move(0,2,0);

   }

   this.display = () => {
      this.model.animate(() => {
         this.sphere.identity().turnY(1.5 * this.model.time);
      });
   }
 }
 
 export let myDemo
  = new MyDemo();
 