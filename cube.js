var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

radioGroup.addEventListener( 'change', function(){
    var checkedRadio = radioGroup.querySelector(':checked');
    var showClass = 'show-' + checkedRadio.value;
    if ( currentClass ) {
      cube.classList.remove( currentClass );
    }
    cube.classList.add( showClass );
    currentClass = showClass;
} )

  let index = [0,1,2,3,4,5];

      let btn = document.querySelectorAll('.btn');

    //   let interval = setInterval(()=>{

      let r = parseInt(Math.random()*index.length);
      console.log(r);

      if(r>=0){
          if(r == index[0]) {
              document.getElementById('one').checked = true;
              // document.querySelector("input[name=sixth]:checked").value = true;
          }
          if(r == index[1]) {
              document.getElementById('two').checked = true;
              // document.querySelector("input[name=sixth]:checked").value = true;
          }
          if(r == index[2]) {
              document.getElementById('three').checked = true;
              // document.querySelector("input[name=sixth]:checked").value = true;
          }
          if(r == index[3]) {
              document.getElementById('fourth').checked = true;
              // document.querySelector("input[name=sixth]:checked").value = true;
          }
          if(r == index[4]) {
              document.getElementById('fifth').checked = true;
              // document.querySelector("input[name=sixth]:checked").value = true;
          }
          if(r == index[5]) {
              document.getElementById('sixth').checked = true;
              // document.querySelector("input[name=sixth]:checked").value = true;
          }
      }

//   },2000)