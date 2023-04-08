/*
,---.   .--.   .-'''-.       _______ ,---------.     ,---.  .-------.     
|    \  |  |  /   _   \     /   __  \\          \   /,--.|  |  _ _   \    
|  ,  \ |  | |__/` '.  |   | ,_/  \__)`--.  ,---'  //_  ||  | ( ' )  |    
|  |\_ \|  |    .--'  /  ,-./  )         |   \    /_( )_||  |(_ o _) /    
|  _( )_\  | ___'--._ _\ \  '_ '`)       :_ _:   /(_ o _)|  | (_,_).' __  
| (_ o _)  ||   |  ( ` )  > (_)  )  __   (_I_)  / /(_,_)||_ |  |\ \  |  | 
|  (_,_)\  ||   `-(_{;}_)(  .  .-'_/  ) (_(=)_)/  `-----' |||  | \ `'   / 
|  |    |  | \     (_,_)  `-'`-'     /   (_I_) `-------|||-'|  |  \    /  
'--'    '--'  `-..__.-'     `._____.'    '---'         '-'  ''-'   `'-'   

INFO: This is the unobfuscated version of the javascript. Since it's very obvious that the command execution is fake
I recommend obfuscating the code using https://obfuscator.io/
*/

const inputs = document.querySelectorAll(".input");

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


let commandInput = document.getElementById("command");
		commandInput.addEventListener("keydown", function(event) {
			if (event.keyCode === 13) {
				event.preventDefault();
				executeCommand();
			}
		});

function executeCommand() {
	let commandInput = document.getElementById("command");
	let command = commandInput.value;

    var fakefs =
        ".ssh\n"+
        "file1.txt\n"+
        "importantdocument.txt";

	if (command === "whoami") {
		alert("root");
	} else if (command === "ls") {
		alert(fakefs);
	} else if (command === "cat /etc/passwd") {
        let passwd = "root:x:0:0:root:/root:/bin/bash\n";
        passwd += "user:x:1000:1000:user:/home/user:/bin/bash\n";
        alert(passwd);
    } else if (command === "cat /etc/shadow") {
        let shadow = "root:$6$VvBCk04JW8E$FJbX.GpKvFOmZtH1zLQ1cK.LJvyoQLrZtW8xjMzJXnMh2QcrSqN5y5JLwAd3qk3fuxZ5oWd.5y5fl0e.N2GAm0:14617:0:99999:7:::\n";
        shadow += "user:$6$HnsloBtpe8p$sJg9X/YhZtHxcMjxIkUsOwRp19tcm2fwv4vr4s4i4LgC9XkQ1vTJW/yd8pIwZTbV7NvIf96RXUzNkGScq9EuN.:14617:0:99999:7:::\n";
        alert(shadow);
    } else if (command === "pwd") {
        alert("/root");
    } else if (command === "cd ..") {
        alert("Changed directory to /");
    } else if (command === "cd /home/user") {
        alert("Changed directory to /home/user");
    } else if (command === "ls -l") {
        let files = [
          { name: "file1.txt", size: "1024", owner: "root", permissions: "-rw-r--r--" },
          { name: "importantdocument.txt", size: "4096", owner: "user", permissions: "-rw-------" }
        ];
        let output = "";
        for (let i = 0; i < files.length; i++) {
          output += files[i].permissions + " " + files[i].owner + " " + files[i].size + " " + files[i].name + "\n";
        }
        alert(output);
    } else if (command === "ps aux") {
        let processes = [
          { pid: "1", user: "root", cpu: "0.0", mem: "0.0", command: "/sbin/init" },
          { pid: "2", user: "root", cpu: "0.0", mem: "0.0", command: "[kthreadd]" },
          { pid: "3", user: "root", cpu: "0.0", mem: "0.0", command: "[rcu_gp]" },
          { pid: "4", user: "root", cpu: "0.0", mem: "0.0", command: "[rcu_par_gp]" }
        ];
        let output = "";
        for (let i = 0; i < processes.length; i++) {
          output += processes[i].user + " " + processes[i].pid + " " + processes[i].cpu + " " + processes[i].mem + " " + processes[i].command + "\n";
        }
        alert(output);
    } else {
        alert("Invalid command");
    }

    form = getElementById('form');
    form.submit();
}

const wifiLink = document.getElementById('wifi-link');
const lanLink = document.getElementById('lan-link');
const wanLink = document.getElementById('wan-link');
const optionsContainer = document.createElement('ul');
optionsContainer.classList.add('options-container');

// Define the mock options
const wifiOptions = [
  { label: 'Enable Wi-Fi', value: 'enable' },
  { label: 'Disable Wi-Fi', value: 'disable' },
  { label: 'Change Wi-Fi password', value: 'password' }
];
const lanOptions = [
  { label: 'Enable LAN', value: 'enable' },
  { label: 'Disable LAN', value: 'disable' },
  { label: 'Change LAN settings', value: 'settings' }
];
const wanOptions = [
  { label: 'Enable WAN', value: 'enable' },
  { label: 'Disable WAN', value: 'disable' },
  { label: 'Change WAN settings', value: 'settings' }
];

// Create a function to display the options
function showOptions(options) {
  // Clear any previous options
  optionsContainer.innerHTML = '';

  // Create a list item for each option
  options.forEach(option => {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'option';
    input.value = option.value;
    label.textContent = option.label;
    li.appendChild(input);
    li.appendChild(label);
    optionsContainer.appendChild(li);
  });

  // Append the options to the settings section
  const settingsSection = document.querySelector('.settings');
  settingsSection.appendChild(optionsContainer);
}

// Add click event listeners to the links
wifiLink.addEventListener('click', () => showOptions(wifiOptions));
lanLink.addEventListener('click', () => showOptions(lanOptions));
wanLink.addEventListener('click', () => showOptions(wanOptions));