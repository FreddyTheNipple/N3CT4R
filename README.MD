![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) 


```
,---.   .--.   .-'''-.       _______ ,---------.     ,---.  .-------.     
|    \  |  |  /   _   \     /   __  \\          \   /,--.|  |  _ _   \    
|  ,  \ |  | |__/` '.  |   | ,_/  \__)`--.  ,---'  //_  ||  | ( ' )  |    
|  |\_ \|  |    .--'  /  ,-./  )         |   \    /_( )_||  |(_ o _) /    
|  _( )_\  | ___'--._ _\ \  '_ '`)       :_ _:   /(_ o _)|  | (_,_).' __  
| (_ o _)  ||   |  ( ` )  > (_)  )  __   (_I_)  / /(_,_)||_ |  |\ \  |  | 
|  (_,_)\  ||   `-(_{;}_)(  .  .-'_/  ) (_(=)_)/  `-----' |||  | \ `'   / 
|  |    |  | \     (_,_)  `-'`-'     /   (_I_) `-------|||-'|  |  \    /  
'--'    '--'  `-..__.-'     `._____.'    '---'         '-'  ''-'   `'-'  
```

N3CT4R is a very early stage web honeypot tool designed to track and log all incoming requests, login attempts with credentials, and command execution on a fake/mock router dashboard.

## Requirements

- python3
    - https://www.python.org/downloads/ or `apt install python3`
- pip3
    - `apt install python3-pip`
- flask
    - `pip3 install -m flask`

## Setup

**To run in dev mode (just using flask):**
```bash
python3 .\N3CT4R.py
```
- Will start default on port 5000, this can be changed in N3CT4R.py
- Logs will be generated as N3CT4R_logs.json. 
    - I'm using this format since it's easy to parse using logstash (ELK).

**To run in production mode (using gunicorn):**
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0 'N3CT4R:app'
```

- In case of 'error: module not found'
    - You can add it to path
    - find it using `find / -name "gunicorn"`

## systemd service

```bash
[Unit]
Description=N3CT4R
After=multi-user.target

[Service]
Type=simple
WorkingDirectory=/home/frederic/Desktop/N3CT4R/
ExecStart=gunicorn -w 4 -b 0.0.0.0 'N3CT4R:app'
 
[Install]
WantedBy=multi-user.target
```

- For this you'll have to install the flask and gunicorn module as sudo because systemd runs as sudo. However, his is not recommended.