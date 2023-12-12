const shop = {
    Product : [
         // section1 | this product for laptop | this section have many laptop model  for buy laptop
        {
section: 'laptop',
MAC : {


model :[{
    name:'IMac Pro' ,
    price : 1800,
    Ram : '4GB',
    Color:['black' , 'withe' , 'gray']
},
{
    name:'Mac Mini' ,
    price : 2200,
    Ram : '8GB',
    Color:['black' , 'withe' , 'green'] 
},
{
    name:'MacBook' ,
    price : 1500,
    Ram : '6GB',
    Color:['black' , 'withe' , 'brown'] 
},

],

},
Asus : {

  


model :[{
    name:'ASUS FX516PM' ,
    price : 2000,
    Ram : '4GB',
    Color:['black' , 'withe' , 'gray']
},
{
    name:'ASUS Vivobook S 14 Flip' ,
    price : 1200,
    Ram : '8GB',
    Color:['black' , 'withe' , 'green'] 
},
{
    name:'ASUS F515' ,
    price : 1500,
    Ram : '6GB',
    Color:['black' , 'withe' , 'brown'] 
},

],

},
Lenovo : {



model :[
    {
    name:'Lenovo ThinkBook16gen6' ,
    price : 2000,
    Ram : '4GB',
    Color:['black' , 'withe' , 'gray']
},
{
    name:'Lenovo ThinkPad Z16' ,
    price : 1200,
    Ram : '8GB',
    Color:['black' , 'withe' , 'green'] 
},
{
    name:'Lenovo ThinkPad Z13' ,
    price : 1500,
    Ram : '6GB',
    Color:['black' , 'withe' , 'brown'] 
},

],

}

    },


    // section2 | this product for mobil | this section have many mobil model for  buy mobil
{
section : 'mobile' ,

Samsung : {


model :[{
    name:'Samsung A71' ,
    price : 1800,
    Ram : '4GB',
    Color:['black' , 'withe' , 'gray']
},
{
    name:'Samsung A12' ,
    price : 2200,
    Ram : '8GB',
    Color:['black' , 'withe' , 'green'] 
},
{
    name:'Samsung Z-Filip' ,
    price : 1500,
    Ram : '6GB',
    Color:['black' , 'withe' , 'brown']  
},
{
    name:'Samsung S23 Ultra' ,
    price : 2500,
    Ram : '8GB',
    Color:['black' , 'withe' , 'rozgold']
}

],

},
IPhone : {



model :[{
    name:'IPhone 14 mini' ,
    price : 1800,
    Ram : '4GB',
    Color:['black' , 'withe' , 'gray']
},
{
    name:'IPhone SE' ,
    price : 2200,
    Ram : '8GB',
    Color:['black' , 'withe' , 'green'] 
},
{
    name:'IPhone Xs max' ,
    price : 1500,
    Ram : '6GB',
    Color:['black' , 'withe' , 'brown']  
},


],

},
Sony : {



model :[{
    name:'Sony Xperia  ' ,
    price : 1800,
    Ram : '4GB',
    Color:['black' , 'withe' , 'gray']
},
{
    name:'Sony Xperia 1 V' ,
    price : 2200,
    Ram : '8GB',
    Color:['black' , 'withe' , 'green'] 
},
{
    name:'Sony Z1s' ,
    price : 1500,
    Ram : '6GB',
    Color:['black' , 'withe' , 'brown']  
},


],

}
},
 // section3 | this product for Watch | this section have many watch model for  buy watch
{
    section :' Watch',
   SamsungW : {

    model :[{
        name:'Galaxy Watch 4' ,
        price : 1800,
        Ram : '4GB',
        Color:['black' , 'withe' , 'gray']
    },
    {
        name:'Galaxy Watch 6' ,
        price : 2200,
        Ram : '8GB',
        Color:['black' , 'withe' , 'green'] 
    },
    {
        name:'Galaxy Watch 2' ,
        price : 1500,
        Ram : '6GB',
        Color:['black' , 'withe' , 'brown']  
    },

    
    ],
    
    },
   Rolex : {

    
    
    model :[{
        name:'GMT-Master II' ,
        price : 1800,
        gold : '75%',
        Color:['black' , 'withe' , 'gray']
    },
    {
        name:'Cosmograph Daytona' ,
        price : 2200,
        Ram : '25%',
        Color:['black' , 'withe' , 'green'] 
    },
    {
        name:'Oyster Perpetual' ,
        price : 1500,
        Ram : '50%',
        Color:['black' , 'withe' , 'brown']  
    },

    
    ],
    
    },
    Casio : {

    
    
    model :[{
        name:'GG-B100-1ADR' ,
        price : 1800,
        gold : '75%',
        Color:['black' , 'withe' , 'gray']
    },
    {
        name:'MTP-VD01B-1BVUDF' ,
        price : 2200,
        Ram : '25%',
        Color:['black' , 'withe' , 'green'] 
    },
    {
        name:'GA-B2100-1A1DR' ,
        price : 1500,
        Ram : '50%',
        Color:['black' , 'withe' , 'brown']  
    },

    
    ],
    
    }
},


// just this time products is finish but may this products is increase
]
}



console.log(shop.Product[0].Asus.model[0]);











// style for html 

var byline = document.getElementById('byline');   // Find the H2
bylineText = byline.innerHTML;                    // Get the content of the H2
bylineArr = bylineText.split('');                 // Split content into array
byline.innerHTML = '';                            // Empty current content

var span;         // Create variables to create elements
var letter;

for(i=0;i<bylineArr.length;i++){                  // Loop for every letter
  span = document.createElement("span");          // Create a <span> element
  letter = document.createTextNode(bylineArr[i]); // Create the letter
  if(bylineArr[i] == ' ') {                       // If the letter is a space...
    byline.appendChild(letter);         // ...Add the space without a span
  } else {
    span.appendChild(letter);           // Add the letter to the span
    byline.appendChild(span);           // Add the span to the h2
  }
}