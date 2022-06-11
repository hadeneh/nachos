import Client from 'ftp'

const client = new Client();


const config = {
    host: "192.168.1.110",
    user: "radmin",
    password: "Robotics5508"
}


client.connect(config);
