// Your code here
class Song {

   constructor(song){
     this.title = song.title;
     this.Length = song.Length;
     this.album  = song.album;
     this.artist = song.artist;
     this.track = song.track;
     this._Playing = false;
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
