function loadSearch() {
    var cx = '008639414074845644400:_oesimsauds';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    /*alert( document.location.protocol ) ;*/
    gcse.src = 'https:' + '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
    
  }

if(window.addEventListener){
    	window.addEventListener('load',loadSearch,false); //W3C
	}
	else{
    	window.attachEvent('onload',loadSearch); //IE
	}


function autoFocus(){
	if( document.getElementById("gsc-i-id1") ){
		document.getElementById("gsc-i-id1").focus() ;
		window.clearInterval( interval) ;
	}
	
}
var interval = window.setInterval( autoFocus, 1000 );
	