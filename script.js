function main() {
    const container = document.getElementById('container');
// Example usage
}
getIPAddress(ip => {
    container.innerHTML = `Your IP address is: ${ip}`;
    // You can do whatever you want with the IP address here
    console.log(ip+'hello world');
});
main();
function getIPAddress(callback) {
    // Make a request to a third-party service that returns the user's IP address
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => callback(data.ip))
        .catch(error => console.error('Error fetching IP address:', error));
}

