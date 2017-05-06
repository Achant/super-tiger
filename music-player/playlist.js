// Your code here
class PlayList {

   constructor(name){
     this.playListName = name;
     this.songListArr = [];
     this._listLength = 0
   }

   addSong(song) {
     this.songListArr.add(song);
     console.log( song.title +'Song is Added ' );
   }
   removeSong(song) {
     this.songListArr.remove(song);
     console.log( song.title +'Song is removed ' );
   }

   Play( ) {
       this._Playing = true;
       console.log(this.title + 'song is now playing');
   }

   Pause ( ){
       this._Playing = false;
       console.log(this.title + ' song is now paused');
   }
 }
