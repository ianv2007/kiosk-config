# Change to MM directory
cd /home/bikeplace/MagicMirror
# Pull config file from Github
git clone https://github.com/ianv2007/kiosk-config
# Replace old config with new
mv kiosk-config/config.js config/config.js
# Clean up
rm -rf kiosk-config
