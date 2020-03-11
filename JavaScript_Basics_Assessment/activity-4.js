const namelist = ['Jane','Jack','John'];

for(let i = 0; i < 3; i++){
    const name = prompt('Please enter a name:');
    namelist.push(name);
}

for(let i = 0; i < namelist.length; i++){
    console.log(namelist[i]);
}