# ReddCoin Tracker

*ReddCoin Tracker* utilizes the reddsight API to query the balance of a given address and display it.

Auto-update version:
```javascript
var destination = document.getElementById('myRddAddress');
window.mytracker = new tracker( 'RwNWaAQF22rUs72YgtTgCVrSpHBeqRB6CP', destination );
window.mytracker.autoTick();
```

Single-update version:
```javascript
var destination = document.getElementById('myRddAddress');
window.mytracker = new tracker( 'RwNWaAQF22rUs72YgtTgCVrSpHBeqRB6CP', destination );
window.mytracker.tick();
```

See [index.html](index.html)