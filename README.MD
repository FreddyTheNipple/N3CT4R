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

**requirements:**
- python3
    - https://www.python.org/downloads/ or `apt install python3`
- pip3
    - `apt install python3-pip`
- flask
    - `pip3 install -m flask`

**To run:**
```
python3 .\N3CT4R.py
```
- Will start default on port 5000, this can be changed in N3CT4R.py
- Logs will be generated as N3CT4R_logs.json. 
    - I'm using this format since it's easy to parse using logstash (ELK).