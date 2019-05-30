import './scss/index.scss'
import 'normalize.css'
import {
    jarallax,
    jarallaxElement,
    jarallaxVideo
} from 'jarallax';




jarallaxVideo();
jarallaxElement();

jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2
});

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('Sep 30, 2019 00:00:00').getTime(),
         x = setInterval(()=> {

        let now = new Date().getTime(),
        distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        //}

    }, second);

var setting = {"height":600,"zoom":17,"queryString":"Sporthalle am Viadukt, Holzgartenstraße, Bietigheim-Bissingen, Deutschland","place_id":"ChIJwRcQp3vUmUcRZGdfKltMVB4","satellite":false,"centerCoord":[48.956593718240285,9.128635799999984],"cid":"0x1e544c5b2a5f6764","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"37813"};
var d = document;
var s = d.createElement('script');
s.src = 'https://1map.com/js/script-for-user.js?embed_id=37813';
s.async = true;
s.onload = function (e) {
  window.OneMap.initMap(setting)
};
var to = d.getElementsByTagName('script')[0];
to.parentNode.insertBefore(s, to);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
