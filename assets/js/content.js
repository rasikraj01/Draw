function night() {
   console.log('Dark Mode ON');
   // black

   let div = document.getElementsByTagName('div');

   for(elt of div){
      elt.style['background-color'] = 'black';
   }

   let article = document.getElementsByTagName('article');

   for(elt of article){
      elt.style['background-color'] = 'black';
   }



   let article = document.getElementsByTagName('article');

   for(elt of article){
      elt.style['background-color'] = 'black';
   }
   // White

   let h1 = document.getElementsByTagName('h1');

   let p = document.getElementsByTagName('p');

   for(elt of p){
      elt.style['color'] = 'white';
   }

   for(elt of h1){
      elt.style['color'] = 'white';
   }

   let a = document.getElementsByTagName('a');

   for(elt of a){
      elt.style['color'] = 'white';
   }


   let svg = document.getElementsByTagName('svg');

   for(elt of svg){
      elt.style['color'] = 'white';
   }

}

console.log('content script');
chrome.runtime.onMessage.addListener(Message);

function Message(req, sender, res) {
   console.log('recived ' + req.trigger);
}

night();
