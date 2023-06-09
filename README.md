# PBLPhysics

Requirements to start website:

1. Linux/Ubuntu 20.04 - Dedicated Server
2. Node package manager(NPM) Last version
3. Nginx - Web Server
4. Domain Name - website.com
5. SSL Certificate - Certificate created to launch secure connection to domain server. Certificate must be linked to your domain name and be from good provider like google to allow open this website under school protection.
6. Git - Last version

Steps to run:

1. Rent Dedicated Server 
2. Get from Host (IP-adress of server)(Password to connect throw SSH)
3. Open Windows CMD and run "ssh root@(IP-adress)"
4. Enter password
5. In CMD follow steps to install Node Package Manager

![image](https://github.com/IgorJs2/PBLPhysics/assets/47695048/27f5d216-db87-432f-bb1a-c261d87d3e68)

6. Install Nginx Web Server https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-22-04
7. Rent Domain Name and SSL Certificate
8. In Domain Name Provider Website make redirect from domain name to the webserver follow next guide | https://www.namecheap.com/support/knowledgebase/article.aspx/9678/2237/how-to-redirect-subdomain-to-a-certain-ip-address-along-with-a-port/
9. Download SSL certificate from provider into local computer
10. Follow this guide to install SSL to your domain in nginx server https://phoenixnap.com/kb/install-ssl-certificate-nginx
11. Install git https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-20-04
12. Clone this repository in root folder using command "git clone https://github.com/IgorJs2/PBLPhysics.git"
13. Enter to the root/PBLPhysics folder and run "npm i"
14. After run "npm install pm2 -g"
15. Run "pm2 start npm --name "PBLPhysicsWebsite" -- start"
16. Go to nginx folder "cd .. | cd .. | cd etc | cd nginx"
17. run "nano nginx.conf"
18. Find in file 
"
location / {
  root /var/www/;
  root  /home/www/public_html/your.domain.com/public/;
  index index.html;
}
"

and change it to "

location / {
 proxy_pass http://127.0.0.1:1234;
}
"
19. run "sudo systemctl restart nginx"
20. open website using your domain and check result

If you have any problem or troubles with all this steps write to "stalker2sokol2@gmail.com" or "iurmach01@lbpearson.ca" i will try to help or do it by myself.
