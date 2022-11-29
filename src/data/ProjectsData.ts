export interface Project {
 description: string;
 image: string;
 title: string;
}

const projectsData: Project[] = [
 {
  description: 'This is an e-commerce site sample featuring products seen on Seinfeld. Do you want to order a Big Salad for a friend? Or a Tweety Bird Pez Dispenser to bring to a piano recital? Or do you want your very own copy of the Coffee Table Book about Coffee Tables? If so, then the Seinfeld Store is every Seinfeld fan\'s dream shopping site!',
  image: '/images/projects/SeinfeldStore/home.png',
  title: 'Seinfeld Store'
 },
 {
  description: 'An app where you can create your own QR Codes and save them to your own QR Codes list.',
  image: '/images/projects/QRCodeApp/qrform.png',
  title: 'QR Code App'
 },
 {
  description: 'A Timezone Tracking App where you can track the times of members of your team, no matter where they are in the world. You can add as many teams and team members as you\'d like! Based on http://timezone.io.',
  image: '/images/projects/TimezoneTrackingApp/team.png',
  title: 'Timezone Tracking App'
 },
 {
  description: 'This is a clone of Twitter, where you can create your own Twitter account and send tweets from it in real time. You can delete your own tweets if you\'d like, and you can view tweets from other users of the app.',
  image: '/images/projects/TwitterCloneApp/home.png',
  title: 'Twitter Clone App'
 },
 {
  description: 'This is a Gmail Clone App, which you can use through your Gmail account. You can send emails to both yourself and other users of the app and receive them in real time. In addition, you can view all your emails together, read them, and delete them.',
  image: '/images/projects/GmailCloneApp/emailrows.png',
  title: 'Gmail Clone App'
 },
];

export default projectsData;