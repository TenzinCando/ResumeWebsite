/*
 * Author:      TK
 * Date:        2019-04-17
 * Description: Template for my resume
 * 
*/

//console.log('Inside Main.js File!');

/* Navgiation Bar */
var nav = new Vue({
    el: '#nav',
    data: {
      title: 'Tenzin <span class="text-orange text-shadow">Khando</span>',
      contacts: [
          { id: 0,  
            text: 'tkhando1@hotmail.com', 
            link: 'mailto:tkhando1@hotmail.com', 
            style: 'contact-info__email', 
            icon: 'far fa-envelope icon'
            icon: 'far fa-envelope icon',
            divider: true
        },
          { text: '206-302-9558', 
            link: 'tel:206-302-558', 
            style: 'contact-info__phone', 
            icon: 'fas fa-mobile-alt icon',
            divider: false
        }
      ]
    }
});
