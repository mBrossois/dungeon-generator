const room = 'ROOM'
export default defineWebSocketHandler({
    open(peer) {
        console.log('opened ws', peer)
        peer.subscribe(room)
        peer.publish(room, 'Another use has joined')
    },
    close(peer) {
        console.log('Closed ws', peer)
    },
    error(peer, error) {
        console.log(`${peer} had a problem: ${error}`)
    },
    message(peer, message) {
        console.log('Message on ws', peer, message)
        peer.publish(room, message.text())
    }
})