/*

Title : Shopping Market Structure
Date : 12/13/2023
Developers : Rahele, Mobin, Nima, Fateme, Milad
Github : https://github.com/RuinedSchool/Shopping
Discreption : our second homework of designing structure using JS
email: navayearamm@gmail.com

*/


// start
//Main Object
const shop = {
     // Section for laptop brands
    Product : [
         // section1 | this product for laptop | this section have many laptop model  for buy laptop
        {
section: 'laptop',
            //Mac Laptops
MAC : {
//Available Mac Laptop Models

model :[{
     //Model Number 1
    name:'IMac Pro' ,
    price : 1800,
    Ram : '4GB',
    Color:['black' , 'withe' , 'gray']
},
{
    //Model Number 2
    name:'Mac Mini' ,
    price : 2200,
    Ram : '8GB',
    Color:['black' , 'withe' , 'green'] 
},
{
    //Model Number 3
    name:'MacBook' ,
    price : 1500,
    Ram : '6GB',
    Color:['black' , 'withe' , 'brown'] 
},
],
},
              //Asus Laptops
Asus : {
 //Available Asus Laptop Models
model :[{
    //Model Number 1
    name:'ASUS FX516PM' ,
    price : 2000,
    Ram : '4GB',
    Color:['black' , 'withe' , 'gray']
},
{
    //Model Number 2
    name:'ASUS Vivobook S 14 Flip' ,
    price : 1200,
    Ram : '8GB',
    Color:['black' , 'withe' , 'green'] 
},
{
    //Model Number 3
    name:'ASUS F515' ,
    price : 1500,
    Ram : '6GB',
    Color:['black' , 'withe' , 'brown'] 
},

],

},
             //Lenovo Laptops
Lenovo : {
//Available Lenovo Laptop Models

model :[
    {
          //Model Number 1
    name:'Lenovo ThinkBook16gen6' ,
    price : 2000,
    Ram : '4GB',
    Color:['black' , 'withe' , 'gray']
},
{
      //Model Number 2
    name:'Lenovo ThinkPad Z16' ,
    price : 1200,
    Ram : '8GB',
    Color:['black' , 'withe' , 'green'] 
},
{
      //Model Number 3
    name:'Lenovo ThinkPad Z13' ,
    price : 1500,
    Ram : '6GB',
    Color:['black' , 'withe' , 'brown'] 
},
],
}
},


    // Section for mobile brands
{
section : 'mobile' ,
 // Samsung Phones
Samsung : {
model :[
    {
    //Model Number 1
    name:'Samsung A71' ,
    price : 1800,
    Ram : '4GB',
    Color:['black' , 'withe' , 'gray']
},
{
    //Model Number 2
    name:'Samsung A12' ,
    price : 2200,
    Ram : '8GB',
    Color:['black' , 'withe' , 'green'] 
},
{
    //Model Number 3
    name:'Samsung Z-Filip' ,
    price : 1500,
    Ram : '6GB',
    Color:['black' , 'withe' , 'brown']  
},
{
    //Model Number 4
    name:'Samsung S23 Ultra' ,
    price : 2500,
    Ram : '8GB',
    Color:['black' , 'withe' , 'rozgold']
}
],
},
     //IPhone Phones
IPhone : {
 //Available IPhone Mobile Models
model :[
    {
         //Model Number 1
    name:'IPhone 14 mini' ,
    price : 1800,
    Ram : '4GB',
    Color:['black' , 'withe' , 'gray']
},
{
     //Model Number 2
    name:'IPhone SE' ,
    price : 2200,
    Ram : '8GB',
    Color:['black' , 'withe' , 'green'] 
},
{
     //Model Number 3
    name:'IPhone Xs max' ,
    price : 1500,
    Ram : '6GB',
    Color:['black' , 'withe' , 'brown']  
},
],
},
      // Sony Phones
Sony : {
 //Available Sony Mobile Models
model :[
    {
         //Model Number 1
    name:'Sony Xperia  ' ,
    price : 1800,
    Ram : '4GB',
    Color:['black' , 'withe' , 'gray']
},
{
     //Model Number 2
    name:'Sony Xperia 1 V' ,
    price : 2200,
    Ram : '8GB',
    Color:['black' , 'withe' , 'green'] 
},
{
     //Model Number 3
    name:'Sony Z1s' ,
    price : 1500,
    Ram : '6GB',
    Color:['black' , 'withe' , 'brown']  
},
],
}
},
  // Section for watch brands
{
    section :' Watch',
     // Samsung Watches
   SamsungW : {
  //Available Samsung Watches Models
    model :[
        {
             //Model Number 1
        name:'Galaxy Watch 4' ,
        price : 1800,
        Ram : '4GB',
        Color:['black' , 'withe' , 'gray']
    },
    {
         //Model Number 2
        name:'Galaxy Watch 6' ,
        price : 2200,
        Ram : '8GB',
        Color:['black' , 'withe' , 'green'] 
    },
    {
         //Model Number 3
        name:'Galaxy Watch 2' ,
        price : 1500,
        Ram : '6GB',
        Color:['black' , 'withe' , 'brown']  
    },
    
    ],
    
    },
     // Rolex Watches
   Rolex : {
    //Available Rolex Watches Models
    model :[
        {
            //Model Number 1
        name:'GMT-Master II' ,
        price : 1800,
        gold : '75%',
        Color:['black' , 'withe' , 'gray']
    },
    {
        //Model Number 2
        name:'Cosmograph Daytona' ,
        price : 2200,
        Ram : '25%',
        Color:['black' , 'withe' , 'green'] 
    },
    {
        //Model Number 3
        name:'Oyster Perpetual' ,
        price : 1500,
        Ram : '50%',
        Color:['black' , 'withe' , 'brown']  
    },

    ],
    
    },
     // Casio Watches
    Casio : {
  //Available Casio Watches Models
    model :[
        {
             //Model Number 1
        name:'GG-B100-1ADR' ,
        price : 1800,
        gold : '75%',
        Color:['black' , 'withe' , 'gray']
    },
    {
         //Model Number 2
        name:'MTP-VD01B-1BVUDF' ,
        price : 2200,
        Ram : '25%',
        Color:['black' , 'withe' , 'green'] 
    },
    {
         //Model Number 3
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


// show in console
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
