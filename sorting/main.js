var array = [];
var color = [];
var height = [];
var classa = [];


for( i=0 ; i<30 ; i++ ){
 var temph = Math.floor(Math.random() * 500) + 25;
 height.push(temph);
 array.push( temph+"px");
 color.push("#"+Math.floor(Math.random()*16777215).toString(16));
 classa.push(".heap"+i);
}

for( i=0 ; i<array.length ; i++ ){
var div = document.createElement("div");
div.className="heap"+i;
document.querySelector(".container00").appendChild(div);
}

for( i=0 ; i<array.length ; i++ ){
document.querySelector(".heap"+i).style.backgroundColor=color[i];
document.querySelector(".heap"+i).style.width="20px";
document.querySelector(".heap"+i).style.height=array[i];
document.querySelector(".heap"+i).style.position="absolute";
document.querySelector(".heap"+i).style.top="0px";
var left = 20*i;
document.querySelector(".heap"+i).style.left=left+"px";
}

function selection(){
var j=0;
var counter = setInterval(function(){
if( j==array.length-1){
    clearInterval(counter);
}

var x=-1;
var index=0;

  for( i=0 ; i<array.length-j ; i++ ){
    if( x < height[i] ){
        x=height[i];
        index=i;
    }
  }

  var end = array.length-1-j;

  var target = classa[index];

  var target1 = classa[end];
  console.log(`${target} ${target1}`);

 anime({
   targets:target1,
   left:20*index,
   duration: 500
 });
  anime({
   targets: target,
   left:20*end,
   duration: 500
 });



 var temp = classa[index];
 classa[index]=classa[end];
 classa[end]=temp;

 var temp1 = height[index];
 height[index]=height[end];
 height[end]=temp1;
 console.log(classa);

 j++;

},1000);

}

function bubble(){

var j=0;
var i=0;

var counter = setInterval(function(){

if(j==array.length-1){
  clearInterval(counter);
}

 if( i==array.length-1 ){
     i=0;
     j++;
 }




 if( height[i] > height[i+1] ){

  document.querySelector(classa[i]).style.border="5px solid black";


  var end = i+1;
  var index = i;
  var target = classa[index];

  var target1 = classa[end];
  console.log(`${target} ${target1}`);

 anime({
   targets:target1,
   left:20*index,
   duration: 100
 });
  anime({
   targets: target,
   left:20*end,
   duration: 100
 });



 var temp = classa[index];
 classa[index]=classa[end];
 classa[end]=temp;

 var temp1 = height[index];
 height[index]=height[end];
 height[end]=temp1;
 console.log(classa);
 document.querySelector(classa[end]).style.border="0px solid black";
 }

 i++;

},200);

}

var c1=0;
var c2=1;
var heightcollection = [];
var classcollection = [];
var arraycollection = [];
var colorcollection = [];
var container = [];
classcollection.push(classa);
heightcollection.push(height);
arraycollection.push(array);
colorcollection.push(color);
container.push(".container00");


function quick(){

var counter  = setInterval(function(){
    c1++;
    c2++;

// split container
    var height1 = [];
    var height2 = [];
    var classa1 = [];
    var classa2 = [];
    var color1 = [];
    var color2 = [];
    var array1 = [];
    var array2 = [];

    // remove all divs from the container;
    var list = document.querySelector(container[0]);


     //e.firstElementChild can be used.
     var child = list.lastElementChild;
     while (child) {
      list.removeChild(child);
        child = list.lastElementChild;
     }


    // put last element in the container
    var div = document.createElement("div");
    var s = [];
    s = classcollection[0][classcollection[0].length-1].split('.');
    div.className = s[1];
    var tot = colorcollection[0].length-1;
    document.querySelector(container[0]).appendChild(div);
    document.querySelector(classcollection[0][tot]).style.backgroundColor=colorcollection[0][tot];
    document.querySelector(classcollection[0][tot]).style.width="20px";
    document.querySelector(classcollection[0][tot]).style.height=arraycollection[0][tot];
    document.querySelector(classcollection[0][tot]).style.position="absolute";
    document.querySelector(classcollection[0][tot]).style.top="0px";
    document.querySelector(classcollection[0][tot]).style.left="0px";


let i_index = -1;
let val_temp = heightcollection[0][heightcollection[0].length-1];

console.log(heightcollection[0].length);
  for( j=0 ; j<heightcollection[0].length-1 ; j++ ){

   if( heightcollection[0][j] <= val_temp ){
            i_index++;
            let temp = heightcollection[0][j];
            heightcollection[0][j] = heightcollection[0][i_index];
            heightcollection[0][i_index] = temp;

            temp = colorcollection[0][j];
            colorcollection[0][j] = colorcollection[0][i_index];
            colorcollection[0][i_index] = temp;

            temp = arraycollection[0][j];
            arraycollection[0][j] = arraycollection[0][i_index];
            arraycollection[0][i_index] = temp;

            temp = classcollection[0][j];
            classcollection[0][j] = classcollection[0][i_index];
            classcollection[0][i_index] = temp;
    }
   }




   for( j=0 ; j<heightcollection[0].length ; j++ ){
    if( heightcollection[0][j] < val_temp ){
             height1.push(heightcollection[0][j]);
             color1.push(colorcollection[0][j]);
             array1.push(arraycollection[0][j]);
             classa1.push(classcollection[0][j]);
     }
    else if( heightcollection[0][j] > val_temp ){
             height2.push(heightcollection[0][j]);
             color2.push(colorcollection[0][j]);
             array2.push(arraycollection[0][j]);
             classa2.push(classcollection[0][j]);
     }
    }



    document.querySelector(container[0]).style.width="20px";


    var class1 = "container0"+c1;

    if( height1.length > 0 ){
    // container1
    var div1 = document.createElement("div");
    div1.className = class1 ;
    // append div1 at the starting
    document.querySelector(".bosecontainer").insertBefore(div1 , document.querySelector(container[0]));
    document.querySelector("."+class1).style.width = 20*height1.length+"px";
    document.querySelector("."+class1).style.height = "600px" ;
    document.querySelector("."+class1).style.position = "relative";
    document.querySelector("."+class1).style.marginRight= "20px";
    document.querySelector("."+class1).style.marginLeft= "20px";
    document.querySelector("."+class1).style.backgroundColor= "#FFFFFF";
    }

     var nodes = Array.prototype.slice.call( document.querySelector('.bosecontainer').children )
     var index = nodes.indexOf( document.querySelector(container[0]) );

    var class2 = "container1"+c2;
    if( height2.length > 0 ){
    // container2
    var div2 = document.createElement("div");
    div2.className = class2;
    // append div2 at the end
    if( document.querySelector(".bosecontainer").children.length-1 ==index   ){
      document.querySelector(".bosecontainer").appendChild(div2);
    }else{
      document.querySelector(".bosecontainer").insertBefore(div2 , document.querySelector(container[0]).nextSibling );
    }
    document.querySelector("."+class2).style.width = 20*height2.length+"px" ;
    document.querySelector("."+class2).style.height = "600px";
    document.querySelector("."+class2).style.position = "relative";
    document.querySelector("."+class2).style.marginLeft= "20px";
    document.querySelector("."+class2).style.marginRight= "20px";
    document.querySelector("."+class2).style.backgroundColor= "#FFFFFF";
    }

var nodes = Array.prototype.slice.call( document.querySelector('.bosecontainer').children )


 for( i=0 ; i<height1.length ; i++ ){
        var div = document.createElement("div");
        var s = [];
        s = classa1[i].split('.');
        div.className=s[1];
        document.querySelector("."+class1).appendChild(div);
 }

 for( i=0 ; i<height2.length ; i++ ){
        var div = document.createElement("div");
        var s = [];
        s = classa2[i].split('.');
        div.className=s[1];
        document.querySelector("."+class2).appendChild(div);
 }

for( i=0 ; i<height1.length ; i++ ){
   document.querySelector(classa1[i]).style.backgroundColor=color1[i];
   document.querySelector(classa1[i]).style.width="20px";
   document.querySelector(classa1[i]).style.height=array1[i];
   document.querySelector(classa1[i]).style.position="absolute";
   document.querySelector(classa1[i]).style.top="0px";
   var left = i*20;
   document.querySelector(classa1[i]).style.left=left+"px";
}

 for( i=0 ; i<height2.length ; i++ ){
   document.querySelector(classa2[i]).style.backgroundColor=color2[i];
   document.querySelector(classa2[i]).style.width="20px";
   document.querySelector(classa2[i]).style.height=array2[i];
   document.querySelector(classa2[i]).style.position="absolute";
   document.querySelector(classa2[i]).style.top="0px";
   var left = i*20;
   document.querySelector(classa2[i]).style.left=left+"px";
 }


if( height1.length > 1 ){
container.push("."+class1);
heightcollection.push(height1);
classcollection.push(classa1);
arraycollection.push(array1);
colorcollection.push(color1);
}

if( height2.length > 1 ){
container.push("."+class2);
heightcollection.push(height2);
classcollection.push(classa2);
arraycollection.push(array2);
colorcollection.push(color2);
}



heightcollection.shift();
container.shift();
classcollection.shift();
arraycollection.shift();
colorcollection.shift();


   if( heightcollection.length == 0 ){
       assemble();
       clearInterval(counter);
   }

} , 1000 );



}

function assemble(){

     var nodes = Array.prototype.slice.call( document.querySelector('.bosecontainer').children )

     var list  = document.querySelector('.bosecontainer');
     var child = list.lastElementChild;
     while (child) {
      list.removeChild(child);
      child = list.lastElementChild;
     }

     var div = document.createElement("div");
     div.className="container";

     i=0;
     var counter = setInterval(function(){
       nodes[i].style.position="absolute";
       nodes[i].style.left=i*20+"px";
       div.appendChild(nodes[i]);
       i++;
       if( i == nodes.length ){
         clearInterval(counter);
       }
     } , 10);


     document.querySelector(".bosecontainer").appendChild(div);
     document.querySelector(".container").style.width = "600px";
     document.querySelector(".container").style.height = "600px";
     document.querySelector(".container").style.backgroundColor = "#FFFFFF";
     document.querySelector(".container").style.position = "relative";

}


function merge(){

   var counter  = setInterval(function(){
       c1++;
       c2++;

   // split container
       var height1 = [];
       var height2 = [];
       var classa1 = [];
       var classa2 = [];
       var color1 = [];
       var color2 = [];
       var array1 = [];
       var array2 = [];

       // remove all divs from the container;
       var list = document.querySelector(container[0]);

        while (list.firstChild) {
         list.removeChild(list.firstChild);
        }



   let i_index = (heightcollection[0].length-1)/2;

      for( j=0 ; j<heightcollection[0].length ; j++ ){
       if( j<=i_index ){
                height1.push(heightcollection[0][j]);
                color1.push(colorcollection[0][j]);
                array1.push(arraycollection[0][j]);
                classa1.push(classcollection[0][j]);
        }
       else{
                height2.push(heightcollection[0][j]);
                color2.push(colorcollection[0][j]);
                array2.push(arraycollection[0][j]);
                classa2.push(classcollection[0][j]);
        }
       }



      document.querySelector(container[0]).style.width = 0 + "px";

       var class1 = "container0"+c1;

       if( height1.length > 0 ){
       // container1
       var div1 = document.createElement("div");
       div1.className = class1 ;
       // append div1 at the starting
       document.querySelector(".bosecontainer").insertBefore(div1 , document.querySelector(container[0]));
       document.querySelector("."+class1).style.width = 20*height1.length+"px";
       document.querySelector("."+class1).style.height = "600px" ;
       document.querySelector("."+class1).style.position = "relative";
       document.querySelector("."+class1).style.marginRight= "20px";
       document.querySelector("."+class1).style.marginLeft= "20px";
       document.querySelector("."+class1).style.backgroundColor= "#FFFFFF";
       }

        var nodes = Array.prototype.slice.call( document.querySelector('.bosecontainer').children )
        var index = nodes.indexOf( document.querySelector(container[0]) );

       var class2 = "container1"+c2;
       if( height2.length > 0 ){
       // container2
       var div2 = document.createElement("div");
       div2.className = class2;
       // append div2 at the end
       if( document.querySelector(".bosecontainer").children.length-1 ==index   ){
         document.querySelector(".bosecontainer").appendChild(div2);
       }else{
         document.querySelector(".bosecontainer").insertBefore(div2 , document.querySelector(container[0]).nextSibling );
       }
       document.querySelector("."+class2).style.width = 20*height2.length+"px" ;
       document.querySelector("."+class2).style.height = "600px";
       document.querySelector("."+class2).style.position = "relative";
       document.querySelector("."+class2).style.marginLeft= "20px";
       document.querySelector("."+class2).style.marginRight= "20px";
       document.querySelector("."+class2).style.backgroundColor= "#FFFFFF";
       }

    list = document.querySelector(".bosecontainer");

    list.removeChild(document.querySelector(container[0]));

    for( i=0 ; i<height1.length ; i++ ){
           var div = document.createElement("div");
           var s = [];
           s = classa1[i].split('.');
           div.className=s[1];
           document.querySelector("."+class1).appendChild(div);
    }

    for( i=0 ; i<height2.length ; i++ ){
           var div = document.createElement("div");
           var s = [];
           s = classa2[i].split('.');
           div.className=s[1];
           document.querySelector("."+class2).appendChild(div);
    }

   for( i=0 ; i<height1.length ; i++ ){
      document.querySelector(classa1[i]).style.backgroundColor=color1[i];
      document.querySelector(classa1[i]).style.width="20px";
      document.querySelector(classa1[i]).style.height=array1[i];
      document.querySelector(classa1[i]).style.position="absolute";
      document.querySelector(classa1[i]).style.top="0px";
      var left = i*20;
      document.querySelector(classa1[i]).style.left=left+"px";
   }

    for( i=0 ; i<height2.length ; i++ ){
      document.querySelector(classa2[i]).style.backgroundColor=color2[i];
      document.querySelector(classa2[i]).style.width="20px";
      document.querySelector(classa2[i]).style.height=array2[i];
      document.querySelector(classa2[i]).style.position="absolute";
      document.querySelector(classa2[i]).style.top="0px";
      var left = i*20;
      document.querySelector(classa2[i]).style.left=left+"px";
    }


   if( height1.length > 1 ){
   container.push("."+class1);
   heightcollection.push(height1);
   classcollection.push(classa1);
   arraycollection.push(array1);
   colorcollection.push(color1);
   }

   if( height2.length > 1 ){
   container.push("."+class2);
   heightcollection.push(height2);
   classcollection.push(classa2);
   arraycollection.push(array2);
   colorcollection.push(color2);
   }



   heightcollection.shift();
   container.shift();
   classcollection.shift();
   arraycollection.shift();
   colorcollection.shift();


      if( heightcollection.length == 0 ){
          assemble_merge();
          clearInterval(counter);
      }

   } , 1000 );

   }


function assemble_merge(){

 var x = 0;

 var counter = setInterval(function(){

    var nodes = Array.prototype.slice.call( document.querySelector('.bosecontainer').children );


    list = document.querySelector(".bosecontainer");


    i=0;

    while(i<nodes.length){

      let temp_div = document.createElement('div');
      temp_div.className = "container";
      temp_div.style.position = "relative";

      if( i+1 >= nodes.length ){
        break;
      }

      var node1 = Array.prototype.slice.call( nodes[i].children );
      var node2 = Array.prototype.slice.call( nodes[i+1].children );

      let k1=0;
      let k2=0;

      let kone = false;
      let ktwo = false;


      while(1){

          if( k1 === node1.length ){
           kone = true;
           break;
          }

          if( k2 === node2.length ){
           ktwo = true;
           break;
          }

          if(parseInt(node1[k1].style.height.split("px")[0]) > parseInt(node2[k2].style.height.split("px")[0])){
            let t = document.createElement('div');
            t.style.height = node2[k2].style.height;
            t.style.backgroundColor = node2[k2].style.backgroundColor;
            temp_div.appendChild(t);
            t.style.width = "20px";
            k2++;
            continue;
          }

          if(parseInt(node1[k1].style.height.split("px")[0]) <= parseInt(node2[k2].style.height.split("px")[0])){
            let t = document.createElement('div');
            t.style.height = node1[k1].style.height;
            t.style.backgroundColor = node1[k1].style.backgroundColor;
            t.style.width = "20px";
            temp_div.appendChild(t);
            k1++;
          }

      }

      if( kone === true ){
        for( l=k2 ; l<node2.length ; l++ ){
          let t = document.createElement('div');
          t.style.height = node2[l].style.height;
          t.style.backgroundColor = node2[l].style.backgroundColor;
          t.style.width = "20px";
          temp_div.appendChild(t);
        }
      }

      if( ktwo === true ){
        for( l=k1 ; l<node1.length ; l++ ){
          let t = document.createElement('div');
          t.style.height = node1[l].style.height;
          t.style.backgroundColor = node1[l].style.backgroundColor;
          t.style.width = "20px";
          temp_div.appendChild(t);
        }
      }


      var node_temp = Array.prototype.slice.call( temp_div.children )


      var div_i = document.createElement("div");
      div_i.className="container"+x;

      for( j=0 ; j<node_temp.length ; j++ ){
          node_temp[j].style.position="absolute";
          node_temp[j].style.left = j*20 + "px";
          node_temp[j].zIndex ="999";
          node_temp[j].style.width = "20px";
          div_i.appendChild(node_temp[j]);
      }

      div_i.style.width = 20*node_temp.length+"px";
      div_i.style.height = "600px";
      div_i.style.position = "relative";
      div_i.style.backgroundColor = "#FFFFFF"
      div_i.style.marginLeft = 20+"px";
      div_i.style.marginRight = 20+"px";

      const class_name = nodes[i].className;
      const class_name1 = nodes[i+1].className;
      document.querySelector(".bosecontainer").insertBefore(div_i , document.querySelector("."+class_name) );
      list.removeChild(document.querySelector("."+class_name));
      list.removeChild(document.querySelector("."+class_name1)) ;
      x++;
      i+=2;

    }


    if( document.querySelector('.bosecontainer').children.length === 1){
      clearInterval(counter);
    }

 } , 1000);

}
