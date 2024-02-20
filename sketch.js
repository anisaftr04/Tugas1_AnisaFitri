let j;
function setup() {
   createCanvas(600,500);
   background(0, 150,200);

   x=200
   y=100;
   j=0;
}


function draw() {

   fill(255);
   strokeWeight(0);
   ellipse(100, 50, 60, 60);
   ellipse(150, 40, 80, 80);
   ellipse(200, 50, 60, 60);
   ellipse(400, 50, 60, 60);
   ellipse(450, 40, 80, 80);
   ellipse(500, 50, 60, 60);

   fill(0, 150,200);
   strokeWeight(0);
   ellipse(450, 210, 170, 150);
   ellipse(450, 318, 250, 230);

   fill(25, 25, 112)
   strokeWeight(0);
   var x = 450 + 5 * Math.sin(PI/100*j)
   j+=1
   ellipse(x, 318, 220, 200); /*badan biru*/
   var x = 450 + 10 * Math.sin(PI/310*j)
   j+=1
   ellipse(x, 210, 130, 125); /* kepala biru*/

   fill(255);
   strokeWeight(0);
   var x = 450 + 5 * Math.sin(PI/100*j)
   j+=1
   ellipse(x, 318, 170, 200); /*badan putih */
   var x = 423 + 10 * Math.sin(PI/310*j)
   j+=1
   ellipse(x, 210, 65, 65); /* mata putih kiri */
   var x = 477 + 10 * Math.sin(PI/310*j)
   j+=1
   ellipse(x, 210, 65, 65); /* mata putih kanan */

   fill(0);
   strokeWeight(0);
   var x = 410 + 10 * Math.sin(PI/310*j)
   j+=1
   ellipse(x, 200, 20, 20); /*mata hitam kiri */
   var x = 460 + 10 * Math.sin(PI/310*j)
   j+=1
   ellipse(x, 200, 20, 20); /*mata hitam kanan */

   fill(209, 142, 7);
   strokeWeight(0);
   var x1 = 435 + 10 * Math.sin(PI/310*j)
   j+=1
   var x2 = 450 + 10 * Math.sin(PI/310*j)
   j+=1
   var x3 = 465 + 10 * Math.sin(PI/310*j)
   j+=1
   triangle(x1, 230, x2, 255, x3, 230); /* paruh */
   triangle(390, 435, 420, 435, 420, 415); /*kaki kiri*/
   triangle(515, 435, 480, 435, 480, 415); /* kaki kanan */

   strokeWeight(3);
   line(300,0,300,499);

   /* SEBELAH KIRI */
   strokeWeight(0);
   fill(25, 25, 112);
   ellipse(150, 318, 220, 200); /*badan biru*/

   fill(25, 25, 112);
   ellipse(150, 210, 130, 125); /* kepala biru*/

   fill(255, 255, 255);
   ellipse(150, 318, 170, 200); /* badan putih */

   fill(255);
   ellipse(123, 210, 65, 65); /* mata putih kiri */

   fill(255);
   ellipse(177, 210, 65, 65); /* mata putih kanan */

   fill(0);
   ellipse(140, 200, 20, 20); /*mata hitam kiri */

   ellipse(185, 200, 20, 20); /*mata hitam kanan */

   fill(209, 142, 7);
   triangle(135, 230, 150, 255, 165, 230); /* paruh */

   triangle(90, 435, 120, 435, 120, 415); /*kaki kiri*/
   triangle(215, 435, 180, 435, 180, 415); /* kaki kanan */
   strokeWeight(0);

   fill(25, 25, 12);
   strokeWeight(3);
   line(130,135,145,148)
   line(145,135,145,148)
   line(160,135,145,148)

   fill(255, 192, 203);
   strokeWeight(0);
   triangle(350,110,360,120,370,110);
   ellipse(355,105,13,13);
   ellipse(365,105,13,13);
}