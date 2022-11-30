export interface Project {
 description: string;
 image: string;
 link: string;
 repo: string;
 title: string;
}

const projectsData: Project[] = [
 {
  description: 'A Work Order System which defines users as either consumers or suppliers, with each creating an authenticated profile. The supplier will specify the service that they offer on signup. Suppliers can search for gigs offered by different consumers. The consumer selects a supplier for their gig, based on the rates and time of completion. Afterwards, the supplier will be required to perform the work order and indicate when it\'s complete.',
  image: '/images/projects/handywork.png',
  link: 'https://handywork-clients.netlify.app/',
  repo: 'https://github.com/chingu-voyages/v41-geckos-team-08',
  title: 'Handy Work'
 },
 {
  description: 'A Timezone Tracking App where you can track the times of members of your team, no matter where they are in the world. You can add as many teams and team members as you\'d like! Based on http://timezone.io.',
  image: '/images/projects/TimezoneTrackingApp/team.png',
  link: 'https://timezone-tracking-app-1c124.web.app',
  repo: 'https://github.com/jonahBerlyne/timezone-tracking-app',
  title: 'Timezone Tracking App'
 },
 {
  description: 'This is a clone of Twitter, where you can create your own Twitter account and send tweets from it in real time. You can delete your own tweets if you\'d like, and you can view tweets from other users of the app.',
  image: '/images/projects/TwitterCloneApp/home.png',
  link: 'https://twitter-clone-app-dc926.web.app',
  repo: 'https://github.com/jonahBerlyne/twitter-clone-app',
  title: 'Twitter Clone App'
 },
 {
  description: 'This is a Gmail Clone App, which you can use through your Gmail account. You can send emails to both yourself and other users of the app and receive them in real time. In addition, you can view all your emails together, read them, and delete them.',
  image: '/images/projects/GmailCloneApp/emailrows.png',
  link: 'https://clone-app-8877a.web.app',
  repo: 'https://github.com/jonahBerlyne/gmail-clone-app',
  title: 'Gmail Clone App'
 },
];

export default projectsData;