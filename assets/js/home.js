var audio = document.getElementById("music");
var allowContinue = true;
var song = 'assets/media/song.mp3';

const asciiArtList = [
  `    █████╗ ███████╗███████╗██╗     ██╗ ██████╗████████╗
   ██╔══██╗██╔════╝██╔════╝██║     ██║██╔════╝╚══██╔══╝
███████║█████╗  █████╗  ██║     ██║██║        ██║
██╔══██║██╔══╝  ██╔══╝  ██║     ██║██║        ██║
██║  ██║██║     ██║     ███████╗██║╚██████╗   ██║
╚═╝  ╚═╝╚═╝     ╚═╝     ╚══════╝╚═╝ ╚═════╝   ╚═╝`,
  `     e      888~~  888~~  888     888  e88~-_  ~~~888~~~ 
    d8b     888___ 888___ 888     888 d888   \     888    
   /Y88b    888    888    888     888 8888        888    
  /  Y88b   888    888    888     888 8888        888    
 /____Y88b  888    888    888     888 Y888   /    888    
/      Y88b 888    888    888____ 888  "88_-~     888    `,
  `  ___   ____  ____ __    __   ___ ______
 // \\  ||    ||    ||    ||  //   | || |
 ||=|| ||==  ||==  ||    || ((      ||  
 || || ||    ||    ||__| ||  \\__    ||  `,
  ` _______ _______  _____   _____  _     _
 |______ |  |  | |_____] |_____] |     |
 |______ |  |  | |       |       |_____|
                                        `,
  ` ▄▄▄· ·▄▄▄·▄▄▄▄▄▌  ▪   ▄▄· ▄▄▄▄▄
▐█ ▀█ ▐▄▄·▐▄▄·██•  ██ ▐█ ▌▪•██  
▄█▀▀█ ██▪ ██▪ ██▪  ▐█·██ ▄▄ ▐█.▪
▐█ ▪▐▌██▌.██▌.▐█▌▐▌▐█▌▐███▌ ▐█▌·
 ▀  ▀ ▀▀▀ ▀▀▀ .▀▀▀ ▀▀▀·▀▀▀  ▀▀▀ `,
  `         |     '||''''| '||''''| '||'      '||'   ..|'''.| |''||''|   
      |||     ||  .    ||  .    ||        ||  .|'     '     ||    
     |  ||    ||''|    ||''|    ||        ||  ||            ||    
    .''''|.   ||       ||       ||        ||  '|.      .    ||    
.|.  .||. .||.     .||.     .||.....| .||.  ''|....'    .||.`,
  `                  _/_/    _/_/_/_/  _/_/_/_/  _/        _/_/_/    _/_/_/  _/_/_/_/_/      
             _/    _/  _/        _/        _/          _/    _/            _/        
            _/_/_/_/  _/_/_/    _/_/_/    _/          _/    _/            _/         
           _/    _/  _/        _/        _/          _/    _/            _/          
_/    _/  _/        _/        _/_/_/_/  _/_/_/    _/_/_/      _/`,
  `     @@@@@@   @@@@@@@@  @@@@@@@@  @@@       @@@   @@@@@@@  @@@@@@@    
  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@       @@@  @@@@@@@@  @@@@@@@  
@@!  @@@  @@!       @@!       @@!       @@!  !@@         @@!  
!@!  @!@  !@!       !@!       !@!       !@!  !@!         !@!  
@!@!@!@!  @!!!:!    @!!!:!    @!!       !!@  !@!         @!!  
!!!@!!!!  !!!!!:    !!!!!:    !!!       !!!  !!!         !!!  
!!:  !!!  !!:       !!:       !!:       !!:  :!!         !!:  
:!:  !:!  :!:       :!:        :!:      :!:  :!:         :!:  
::   :::   ::        ::        :: ::::   ::   ::: :::     ::  
 :   : :   :         :        : :: : :  :     :: :: :     :   `,
];

function proceed() {
  if (allowContinue) {
    document.getElementById("main").style.opacity = 1;
    document.querySelector(".enter").style.opacity = 0;

    setTimeout(function () {
      displayRandomAsciiArt();

      audio.src = song;
      audio.volume = 0.1;
      audio.loop = true;
      audio.autoplay = true;
      audio.play();
    }, 250);

    setTimeout(function () {
      document.querySelector(".enter").remove();
    }, 1000);

    allowContinue = false;
  }
}

function displayRandomAsciiArt() {
  const asciiArtElement = document.querySelector("#main > pre");
  const randomIndex = Math.floor(Math.random() * asciiArtList.length);
  asciiArtElement.innerHTML = '';
  const asciiTextNode = document.createTextNode(asciiArtList[randomIndex]);
  asciiArtElement.appendChild(asciiTextNode);
}
