var letters=  "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*()_+"
var password= "";

for (var i= 0; i<15; i++){
    password += letters.charAt(Math.floor(Math.random()* letters.length))
}
document.write(password)