git reset --hard 
git pull origin HEAD 
yarn install 
pm2 stop reacy -f 
pm2 start app.js -n reacy
