import _ from 'lodash';
import './index.css';
import Icon from './chq.png';
import Data from './data.xml';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
 element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 element.classList.add('hello');
 // Add the image to our existing div.
 var myIcon = new Image();
 myIcon.src = Icon;

 element.appendChild(myIcon);

 console.log(Data);
 
  return element;
}

document.body.appendChild(component());
