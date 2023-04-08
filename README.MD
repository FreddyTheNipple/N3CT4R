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

**To run:**
```
python3 .\N3CT4R.py
```
- Will start default on port 5000, this can be changed in N3CT4R.py
- Logs will be generated as N3CT4R_logs.json. 
    - I'm using this format since it's easy to parse using logstash (ELK).