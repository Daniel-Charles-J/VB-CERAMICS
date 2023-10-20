import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  currentImageIndex15 = 0;
  imagesNav=[
    './assets/images/menu_own.svg',
    './assets/images/icons8-close.svg',
  ];
  changeImage15() {
    this.currentImageIndex15 = (this.currentImageIndex15 + 1) % this.imagesNav.length;
  }
  ourGroups(param : any){
    if(param == 'vbcc'){
      window.location.href = 'https://www.vbceramics.com/home.php'
    } else {
      window.location.href = 'https://www.hitechceramics.in/'
    }
  }

  socials(param : any){
    if(param == 'youtube'){
      window.location.href = 'https://www.youtube.com/@drviswabaskaranvbceramics4394'
    } else if (param == 'linkedIn'){
      window.location.href = 'https://www.linkedin.com/company/dr.vb-ceramics-research-centre/'
    } else if( param == 'whatsapp'){
      window.location.href = 'https://wa.me/919445025461'
    } else if (param == 'google'){
      window.location.href = 'https://www.google.com/search?q=vb+ceramic+research+centre&sca_esv=573735525&sxsrf=AM9HkKkMB_ToLqt9xuLqEZ_Ksxml-wR4JQ%3A1697446588142&ei=vPosZfSnCMel-Qb5uonABw&oq=vb+ceramic+reseac&gs_lp=Egxnd3Mtd2l6LXNlcnAiEXZiIGNlcmFtaWMgcmVzZWFjKgIIADIHECMYsAIYJzIQEC4YDRiABBjHARivARiOBUj7E1CaBFiEDHABeAGQAQCYAZQBoAHZBaoBAzAuNrgBAcgBAPgBAcICChAAGEcY1gQYsAPCAhAQLhivARjHARiKBRiOBRgnwgICECbCAggQABiKBRiGA8ICHRAuGK8BGMcBGIoFGI4FGJcFGNwEGN4EGOAE2AEBwgIfEC4YDRiABBjHARivARiOBRiXBRjcBBjeBBjgBNgBAeIDBBgAIEGIBgGQBgi6BgYIA'
    }
    else {
      window.location.href = 'paste a facebook URL here';
    }
  }

  submitForm() {
    // // Construct the Gmail URL with mailto protocol
    // const gmailURL = `mailto:${this.recipientEmail}?subject=${encodeURIComponent(this.name)}&body=${encodeURIComponent(this.message)}`;

    // // Redirect to the Gmail URL to compose the email
    // window.location.href = gmailURL;

    // const emailSubject = `Contact Form Submission from ${this.name}`;
    // const emailBody = `Name: ${this.name}\nEmail: ${this.recipientEmail}\nMessage: ${this.message}`;
    // const mailtoLink = `mailto:example@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // window.location.href = mailtoLink;
    const { name, email, message } = this.formData;
    let description  = `\nName : ${name}\nEmail: ${email}\nMessage: ${message}`
    let mail = 'drvbcrc@gmail.com'
    // You can construct the Gmail URL with the entered data and open it in a new tab.
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=${encodeURIComponent(`Message from ${name}`)}&body=${encodeURIComponent(description)}`;
    // window.open(gmailUrl, '_blank');
    window.location.href=gmailUrl;
    (document.getElementById('name') as any).value = "";
    (document.getElementById('email') as any).value = "";
    (document.getElementById('message') as any).value = "";
  }

  ngOnInit(): void {
   
  }

}
