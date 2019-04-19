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

/* Template for H2 tag */
Vue.component('heading2', {
  props: ['title'],
  template: `
    <h2 class="heading-title">
      <span class="underline">{{title}}</span>
    </h2>`
});

/* Template for H3 tag */
Vue.component('heading3', {
  props: ['place', 'title', 'date'],
  template: `
    <h3 class="exp--heading">
      <span class="exp--name">{{place}}</span>
      <span class="exp--position">{{title}}</span>
      <span class="text-orange"> | </span>
      <span class="exp--date">{{date}}</span>
    </h3>`
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
    },
    experiences: {
      title: 'Work Experiences',
      companies: [
        { id: 0, 
          place: 'American Retail Supply',
          title: 'Full Stack Developer',
          date: 'Jan. 2015 - Present',
          projects: [
            { text: 'Built custom features, fixed bugs, and created reports for customers to reduce frustration and increase functionality for the Point-of-Sale(POS) application. The application was built using Maven based Java Application, Spring Framework for the frontend, Jasper Report (jrxml), and MySQL for the database.',
              hasSubText: true,
              subText: [
                { id: 0, text: 'Spoke to customers in documenting the process of their problem, discussed best possible solution and pair program with Senior Software Engineer.'},
                { id: 1, text: 'Example: Adding products on the fly, integrating gateway processors, retire products, and more… to make our POS System more robust.'}
              ]
            },
            { text: 'Helped design and implement a Hybrid Azure WebApp to collect in-stores reviews. The app is built utilizing AngularJS, MySQL, and PHP.',
              hasSubText: false
            },
            { text: 'Built custom features, fixed bugs, maintained, and migrated to a new ecommerce platform, Magneto 2.0. This saved the company from outsourcing the work, quicker feature building, and better control of their website.',
              hasSubText: true,
              subText: [
                { id: 0, text: 'Wrote automation scripts in PHP and bash to reduce steps in switching between testing environments by 30%, backing up db/logs, and sending emails summary from db queries.'},
                { id: 1, text: 'Incorporated AWS CDN to the website which redirected 30% of request away from the server.'},
                { id: 2, text: 'Re-engineered 3rd party extensions to do what the business needed.'},
                { id: 3, text: 'Delegated tasks and taught HTML/CSS to new non-technical employees to pay forward the skills and knowledge I had gained.'},
              ]
            }
          ]
        }
      ]
    }
  }
});