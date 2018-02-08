(function(){
	var util = {};
	util.reddsightURL = 'https://live.reddcoin.com/api/addr/{n}';

	util.tracker = function( address, destination ) {
		this.destination = destination;
		this.address = address;
	};

	util.tracker.prototype.autoTick = function() {
		if( this.refreshTimer != undefined ) {
			clearInterval( this.refreshTimer );
		}
		var self = this;
		setInterval( function(){
			self.tick();
		}, 60000 );
		self.tick();
	};

	util.tracker.prototype.tick = function(){
		var self = this;
		var xhr = new XMLHttpRequest();
		xhr.open( 'GET', util.reddsightURL.replace( '{n}', this.address ));
		xhr.onreadystatechange = function() {
			var DONE = 4;
			var OK = 200;
			if( xhr.readyState === DONE ) {
				var data = JSON.parse( xhr.responseText );
				self.render( data );
			} else {
				if( xhr.status != OK ) {
					console.log( 'Error: ' + xhr.status );
				}
			}
		};
		xhr.send( null );
	};

	util.tracker.prototype.render = function( data ) {
		this.destination.innerHTML = '<span class="boxHeader">ReddCoin Tracker</span><br>Address: <span style="font-weight: 900;">'+this.address+'</span><br>Balance: <span style="font-weight: 900;">'+data.balance+'</span><br><span style="font-size: 60%; color: #999;">Built By Greg Billings: RwNWaAQF22rUs72YgtTgCVrSpHBeqRB6CP</span>';
	}

	window.tracker = util.tracker;
})();