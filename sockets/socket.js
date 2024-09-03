
const {io} = require('../index')
//Mensajes de sockets
io.on('connection', client => {
    console.log('cliente conectado')
    client.on('disconnect', () => { 
        console.log('Cliente deconectado')
    });
    //on es para escuchar algo
    client.on('mensaje', ( payload )=>{
        console.log('mensajee', payload)
        io.emit('mensaje', {admin: 'Nuevo mensaje'});
    })
});