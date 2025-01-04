# MyGate Network Bot

![image](https://github.com/SKaaalper/mygate-bot/blob/main/image1.jfif)

### [MyGate Network](https://mygate-network.gitbook.io/mygate-network) transforms everyday devices—your computer, smartphone, tablet—into powerful Virtual Private Servers (VPS). By connecting to our network, you turn your devices into nodes of a global, decentralized cloud infrastructure.

1. Visit MyGate Official Dashboard Campaign - [https://app.mygate.network/login](https://app.mygate.network/login?code=IFXIhg)
   - Create Account
   - Connect Gmail account


## CLI installation:

1. Clone the repository:
   ```
   git clone https://github.com/SKaaalper/mygate-bot.git && cd mygate-bot
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

3. Input your token in `tokens.txt` file, one user per line:
   ```
   nano tokens.txt
   ```
   - To obtain the token ID, go to the MyGate [website](https://app.mygate.network/login?code=IFXIhg) > Right-click and select `Inspect` or press `F12` > Click on `Network` > Refresh the browser > Click on `Fetch/XHR` > Click `ME` > Copy the bearer token that starts with `ey`.

4. You can use a proxy if you have one (optional):
   ```
   nano proxy.txt
   ```
   - Sample Format: `http://username:password@ip:port`
  
5. Run the script:
   ```
   npm run start
   ```
   - Check the logs first, and if everything is good, press `Ctrl + C`

6. Open screen session:
   ```
   screen -S mygate-bot
   ```

7. Run the script again:
   ```
   npm run start
   ```
   - To continue, minimize your screen by pressing `CTRL+A`, then press `D`. To return to the screen, use the command: `screen -r mygate-bot`

     
  
![Banner](https://github.com/SKaaalper/mygate-bot/blob/main/image2.png)


  
![MIT License](https://img.shields.io/badge/License-MIT-yellow)

This project is licensed under the [MIT License.](https://github.com/SKaaalper/mygate-bot/blob/main/LICENSE)
