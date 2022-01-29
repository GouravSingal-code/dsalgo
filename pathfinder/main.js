 const canvas = document.getElementById("canvas");

const ctx =
canvas.getContext('2d');


var i=0;
var j=0;

for( i=0 ; i<=1500 ; i+=30 ){
    for( j=0 ; j<=800 ; j+=20 ){
      ctx.fillStyle="white";
      ctx.fillRect( i , j , 30 , 20);
      ctx.lineWidth =2;
      ctx.strokeStyle='black';
      ctx.strokeRect(i , j , 30 , 20);
    }
}



var xe,ye;
var xi,yi;

const a = 30;
const b = 20;

var path = new Array(canvas.width);
for( i=0 ; i<canvas.width ; i+=a ){
  path[i] = new Array(canvas.height);
   for( j=0 ; j<canvas.height ; j+=b ){
       path[i][j] = [];
   }
}

var coordinates = [];

// assigning every index to infinity path from starting index to particular index
var matrix = new Array(canvas.width);
for( i=0 ; i<canvas.width ; i+=a ){
    matrix[i] = new Array(canvas.height);
    for( j=0 ; j<canvas.height ; j+=b ){
        matrix[i][j] = Infinity;
    }
}


var visit = new Array(canvas.width);
for( i=0 ; i<canvas.width ; i+=a ){
  visit[i] = new Array(canvas.height);
}

function getMousePosition(canvas, event) {
            let rect = canvas.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            x=x-x%30;
            y=y-y%20;
     ctx.fillStyle="green";
      ctx.fillRect( x , y , 30 , 20);
      ctx.lineWidth =2;
      ctx.strokeStyle='black';
      ctx.strokeRect(x , y , 30 , 20);

      xi=x;
      yi=y;

      path[xi][yi].push({x:xi,y:yi});
      coordinates.push({x:xi,y:yi});
      matrix[xi][yi]=0;
}


  function getMousePosition1(canvas, event) {
            let rect = canvas.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            x=x-x%30;
            y=y-y%20;
     ctx.fillStyle="red";
      ctx.fillRect( x , y , 30 , 20);
      ctx.lineWidth =2;
      ctx.strokeStyle='black';
      ctx.strokeRect(x , y , 30 , 20);

      xe=x;
      ye=y;
}

 function getMousePosition2(canvas, event) {
            let rect = canvas.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            x=x-x%30;
            y=y-y%20;
            console.log(x);

     if( x < canvas.width && x>=0 && y<canvas.height && y>=0 && document.getElementById("choose").value == "Blockage Point"  ){
     ctx.fillStyle="black";
      ctx.fillRect( x , y , 30 , 20);
      ctx.lineWidth =2;
      ctx.strokeStyle='black';
      ctx.strokeRect(x , y , 30 , 20);
      visit[x][y]=false;
     }


}




    let canvasElem = document.querySelector("canvas");
    let canvasElem1 = document.querySelector("canvas");


    canvasElem.addEventListener("mousedown", function(e){

        if( document.getElementById("choose").value=="Starting Point"){
              getMousePosition(canvasElem, e);
        }

        if( document.getElementById("choose").value  === "Ending Point" ){
                  getMousePosition1(canvasElem, e);
        }

    });


    canvasElem1.addEventListener("mousemove", function(e){
        getMousePosition2(canvasElem, e);
    });














function start(){
    minpath(xe , ye);
}


function minpath( xe , ye ){



var counter = setInterval(function(){

 var n = coordinates.length;
 var j=0;
 var i=0;

var color = "#"+Math.floor(Math.random()*16777215).toString(16);

 while( j<n ){



 if( coordinates[0].x == xe && coordinates[0].y == ye ){

    for( k=0 ; k<path[xe][ye].length ; k++ ){
         ctx.fillStyle="yellow";
         ctx.fillRect( path[xe][ye][k].x , path[xe][ye][k].y , 30 , 20);
         ctx.lineWidth =2;
         ctx.strokeStyle='black';
         ctx.strokeRect( path[xe][ye][k].x , path[xe][ye][k].y , 30 , 20);
    }

      clearInterval(counter);

  }

    if( coordinates[i].x-a >= 0 ){
       if( visit[coordinates[i].x-a][coordinates[i].y] !=false ){
       if( matrix[coordinates[i].x][coordinates[i].y] + 1 < matrix[coordinates[i].x-a][coordinates[i].y] ){

         matrix[coordinates[i].x-a][coordinates[i].y] = matrix[coordinates[i].x][coordinates[i].y] + 1 ;

         for( m=0 ; m<path[coordinates[i].x][coordinates[i].y].length ; m++ ){
         path[coordinates[i].x-a][coordinates[i].y].push(path[coordinates[i].x][coordinates[i].y][m]);
         }

         path[coordinates[i].x-a][coordinates[i].y].push({x:coordinates[i].x-a ,
         y:coordinates[i].y});

         coordinates.push({x:coordinates[i].x-a,y:coordinates[i].y});

         ctx.fillStyle=color;
         ctx.fillRect( coordinates[i].x-a , coordinates[i].y , 30 , 20);
         ctx.lineWidth =2;
         ctx.strokeStyle='black';
         ctx.strokeRect( coordinates[i].x-a , coordinates[i].y , 30 , 20);
        }
       }
    }

    if( coordinates[i].x+a < canvas.width ){
        if( visit[coordinates[i].x+a][coordinates[i].y] !=false  ){
       if( matrix[coordinates[i].x][coordinates[i].y] + 1 < matrix[coordinates[i].x+a][coordinates[i].y] ){

         matrix[coordinates[i].x+a][coordinates[i].y] = matrix[coordinates[i].x][coordinates[i].y] + 1 ;


         for( m=0 ; m<path[coordinates[i].x][coordinates[i].y].length ; m++ ){
         path[coordinates[i].x+a][coordinates[i].y].push(path[coordinates[i].x][coordinates[i].y][m]);
         }



         path[coordinates[i].x+a][coordinates[i].y].push({x:coordinates[i].x+a ,
         y:coordinates[i].y});


         coordinates.push({x:coordinates[i].x+a,y:coordinates[i].y});

         ctx.fillStyle=color;
         ctx.fillRect( coordinates[i].x+a , coordinates[i].y , 30 , 20);
         ctx.lineWidth =2;
         ctx.strokeStyle='black';
         ctx.strokeRect( coordinates[i].x+a , coordinates[i].y , 30 , 20);
       }
        }
    }

    if( coordinates[i].y+b < canvas.height ){
      if( visit[coordinates[i].x][coordinates[i].y+b] !=false ){
       if( matrix[coordinates[i].x][coordinates[i].y] + 1 < matrix[coordinates[i].x][coordinates[i].y+b] ){

         matrix[coordinates[i].x][coordinates[i].y+b] = matrix[coordinates[i].x][coordinates[i].y] + 1 ;


         for( m=0 ; m<path[coordinates[i].x][coordinates[i].y].length ; m++ ){
         path[coordinates[i].x][coordinates[i].y+b].push(path[coordinates[i].x][coordinates[i].y][m]);
         }

         path[coordinates[i].x][coordinates[i].y+b].push({x:coordinates[i].x ,
         y:coordinates[i].y+b});

         coordinates.push({x:coordinates[i].x,y:coordinates[i].y+b});
         ctx.fillStyle=color;
         ctx.fillRect( coordinates[i].x , coordinates[i].y+b , 30 , 20);
         ctx.lineWidth =2;
         ctx.strokeStyle='black';
         ctx.strokeRect( coordinates[i].x , coordinates[i].y+b , 30 , 20);
       }
      }
    }

    if( coordinates[i].y-b >=0  ){
    if( visit[coordinates[i].x][coordinates[i].y-b] !=false ){
       if( matrix[coordinates[i].x][coordinates[i].y] + 1 < matrix[coordinates[i].x][coordinates[i].y-b] ){

         matrix[coordinates[i].x][coordinates[i].y-b] = matrix[coordinates[i].x][coordinates[i].y] + 1 ;

         for( m=0 ; m<path[coordinates[i].x][coordinates[i].y].length ; m++ ){
         path[coordinates[i].x][coordinates[i].y-b].push(path[coordinates[i].x][coordinates[i].y][m]);
         }

         path[coordinates[i].x][coordinates[i].y-b].push({x:coordinates[i].x ,
         y:coordinates[i].y-b});

         coordinates.push({x:coordinates[i].x,y:coordinates[i].y-b});

         ctx.fillStyle=color;
         ctx.fillRect( coordinates[i].x , coordinates[i].y-b , 30 , 20);
         ctx.lineWidth =2;
         ctx.strokeStyle='black';
         ctx.strokeRect( coordinates[i].x , coordinates[i].y-b , 30 , 20);
       }
    }
    }

   j++;
   coordinates.shift();

 }





} , 100);

}
