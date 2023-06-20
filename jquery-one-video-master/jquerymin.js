console.log(jQuery);

// $('p').click(() => {
//     // console.log("You Clicked on P Text");
//     $('p').hide() ;
// })

///////////////////////////////////////////////////////////////////////////////////////////////

// jis bhi p tag par click ho sirf wo hide ho jaye .

// $('p').click(() =>{

//     $(this).hide();

// })

///////////////////////////////////////////////////////////////////////////////////////////////

// we also use class and id selector
// $('.para1').hide();
// $('#par1').hide();

///////////////////////////////////////////////////////////////////////////////////////////////

// ham document.ready function ka istemal karty hyn taky hamara content pehly saara hamara content visible
// ho  jaye jab jaky hamara js ka code run ho toh usky liye

// $(document).ready(function () {
//     // hamara sara jquery ka code idhar ayega .
//     // $('.para1').hide();
//     // $('#par1').hide();
// });

// Document.ready function short cut .
// $(function () {})

///////////////////////////////////////////////////////////////////////////////////////////////

// there are three main types of selectors in jquery .

// 1) Element Selector
// 1) id selector
// 1) class selector


// //   1) Element selector  - This is an example of element selector which clicks on all p

// $('p').click(function () {
//     console.log("Clicked on P");
// })



// // 2) Id Selector this is an example of id selector 
// $('#third-para').click(function () {
//   // console.log(this.innerText = "Mubashir");
//   console.log(this);
// })



// // 2) Id Selector this is an example of id selector 
// $('.even').click(function () {
//   console.log(this);
// })



///////////////////////////////////////////////////////////////////////////////////////////////
// Other Selectors
//////////////////////////////////////////////////////////////////////////////////////////////

// * clicks on all the elements
$(document).ready(function () {

    // $('p').click(function () {
    //     console.log("you clicked on p ", this);
    // })

    // // $('*').click() ;

    // $('.even').click();

// Events in Jquery 

// Mouse Events  = click , dbclick , mouseenter , mouseleave 
// keyboard Events = keypress , keydown , keyup
// Form Events = submit , change  , focus , blur
// document/window events = load , resize , scroll , unload   


// $(".even").dblclick(function() {
//     // Perform actions or call functions when the element is double-clicked
//     alert("You double-clicked the element!");
//   });



// $("#third-para").mouseenter(function() {
//     // Perform actions or call functions when the element is Mouse-enter
//     alert("You mouse Enter the element!");
//   });


// $("#third-para").mouseleave(function() {
//     // Perform actions or call functions when the element is Mouse-enter
//     alert("You mosue Leave the element!");
//   });


// $("p").hover(function() {
//     // Perform actions or call functions when the element is Mouse-enter
//     console.log("You hover on this  the element!" , this);
//   });


// ///////////////////////////////////////////////////////////////////////////////////
// demoing the on method 

// $('p').on({
//     click: function() {
//       console.log("Thanks for clicking", this);
//     },
//     mouseleave: function() {
//       console.log("Mouse leaving", this);
//     }
//   });


// ///////////////////////////////////////////////////////////////////////////////////
// Write in cosole and select live on your website editting console .
// $('#wike-content');

// $('#wike-content').click(function() {
//     $(this).hide(1000 , function() {
//         console.log("Hidden Successfully ....");
//     });
// });

// $('#wike-content').click(function() {
//     $(this).show(1000 , function() {
//         console.log("Show Successfully ....");
//     });
// });



// ///////////////////////////////////////////////////////////////////////////////////
// Fade Out

// $('#but').click(function() {
//     $('#wike-content').toggle(1000) ; 
// })



// ///////////////////////////////////////////////////////////////////////////////////
// Fade Out

// $('#but').click(function() {
//     $('#wike-content').fadeOut(1000) ; 
// })


// ///////////////////////////////////////////////////////////////////////////////////
// Fade IN
$('#but').click(function() {
    $('#wike-content').fadeIn(1000) ; 
})


  
}) // document.ready fucntion end bracket.




// /////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////


// $(selector): Selects elements in the HTML document based on the given selector.
// .addClass(className): Adds one or more CSS classes to the selected elements.
// .removeClass(className): Removes one or more CSS classes from the selected elements.
// .toggleClass(className): Toggles the presence of a CSS class on the selected elements.
// .attr(attributeName): Gets the value of the specified attribute for the first element in the selection.
// .attr(attributeName, value): Sets the value of the specified attribute for all selected elements.
// .removeAttr(attributeName): Removes the specified attribute from the selected elements.
// .html(): Gets the HTML content of the first element in the selection.
// .html(content): Sets the HTML content for all selected elements.
// .text(): Gets the text content of the first element in the selection.
// .text(content): Sets the text content for all selected elements.
// .val(): Gets the value of an input field or form element.
// .val(value): Sets the value of an input field or form element.
// .css(propertyName): Gets the computed CSS value of the first element in the selection for the specified property.
// .css(propertyName, value): Sets one or more CSS properties for all selected elements.
// .hide(): Hides the selected elements.
// .show(): Shows the selected elements.
// .fadeIn(): Fades in the selected elements.
// .fadeOut(): Fades out the selected elements.
// .slideUp(): Slides up the selected elements.
// .slideDown(): Slides down the selected elements.
// .on(event, handler): Attaches an event handler function to the selected elements.
// .off(event): Removes event handlers previously attached with .on().
// .each(function): Iterates over the selected elements and executes a function for each element.
// .ajax(): Performs an AJAX request.