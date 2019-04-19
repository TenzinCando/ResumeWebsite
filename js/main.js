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
      title: {
          text: 'Tenzin <span class="text-orange text-shadow">Khando</span>',
          style: 'title--heading'
      },
      contacts: [
          { text: 'tkhando1@hotmail.com', 
            link: 'mailto:tkhando1@hotmail.com', 
            style: 'contact-info__email', 
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

/* Generate individual items in a list that can be used whenever */
Vue.component('list-items', {
  props: ['item'],
  template: '<li>{{ item.text }}</li>'
});

/* Resume */
var resumeMain = new Vue({
  el: '#resumeMain',
  data: {
    objective: {
      title: 'Objective',
      content: 'Great work ethic and always striving to meet or exceed the expectation for all projects. Adaptable to any challenge I face by asking questions to better understand and tackle the problem. Reliable and willing to help others to the best of my knowledge. Due to this, I can efficiently contribute my skills to the growth of an organization and build my professional career.'
    },
    technologies: {
      title: 'Technology Summary',
      list: [
        { id: 0, text: 'AWS EC2, AWS CDN, AWS RDS'},
        { id: 1, text: 'Azure Webapp'},
        { id: 2, text: 'Java'},
        { id: 3, text: 'PHP'},
        { id: 4, text: 'Bash script'},
        { id: 5, text: 'AngularJS'},
        { id: 6, text: 'HTML/CSS/JS'},
        { id: 7, text: 'C++'},
        { id: 8, text: 'Sourcetree, Github'},
        { id: 9, text: 'MySQL, SQL Server, SQLite'},
        { id: 10, text: 'Eclipse, Netbean, Visual Studio, Visual Studio Code'},
        { id: 11, text: 'MS Word, Excel, Powerpoint, Outlook'},
        { id: 12, text: 'Linux Ubuntu 14.0, Windows 7/10'},
        { id: 13, text: 'Google Drive'},
        { id: 14, text: 'Draw.io'},
        { id: 15, text: 'Postman'}
      ]
    }
  }
});