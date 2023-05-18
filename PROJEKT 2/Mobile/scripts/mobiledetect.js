function checkScreen() {
	
	if ( window.screen.width<1280 && window.screen.height<1024 ) {
		
		if ( window.location == "http://www.podstawyhakingu.cba.pl/" ) {
			window.location.href = "http://www.m.podstawyhakingu.cba.pl";
		}
		
		if ( window.location == "http://www.podstawyhakingu.cba.pl/index.html" ) {
			window.location.href = "http://www.m.podstawyhakingu.cba.pl/index.html";
		}
		
		if ( window.location == "http://www.podstawyhakingu.cba.pl/subsubpages/wstep/haktywisci.html" ) {
			window.location.href = "http://www.m.podstawyhakingu.cba.pl/subsubpages/wstep/haktywisci.html";
		}
		
		if ( window.location == "http://www.podstawyhakingu.cba.pl/subsubpages/wstep/conapoczatek.html" ) {
			window.ocation.href = "http://www.m.podstawyhakingu.cba.pl/subsubpages/wstep/conapoczatek.html";
		}
		
		if ( window.location == "http://www.podstawyhakingu.cba.pl/subsubpages/wstep/konsekwencjeprawne.html" ) {
			window.location.href = "http://www.m.podstawyhakingu.cba.pl/subsubpages/wstep/konsekwencjeprawne.html";
		}
		
		if ( window.location == "http://www.podstawyhakingu.cba.pl/subpages/kontakt.html" ) {
			window.location.href = "http://www.m.podstawyhakingu.cba.pl/subpages/kontakt.html";
		}
		
		if ( window.location == "http://www.podstawyhakingu.cba.pl/subpages/ataki.html" ) {
			window.location.href = "http://www.m.podstawyhakingu.cba.pl/subpages/ataki.html";
		}
		
		if ( window.location == "http://www.podstawyhakingu.cba.pl/subpages/systemy.html" ) {
			window.location.href = "http://www.m.podstawyhakingu.cba.pl/subpages/systemy.html";
		}
		
		if ( window.location == "http://www.podstawyhakingu.cba.pl/subpages/organizacje.html" ) {
			window.location.href = "http://www.m.podstawyhakingu.cba.pl/subpages/organizacje.html";
			
		}
	} 
	
}

window.onload = function() {
	checkScreen();
}