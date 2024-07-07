<template>
    <div>
        <h1>Websocket</h1>
        <form @submit.prevent="sendData">
            <input type="text" v-model="message">
            <button type="submit">Send</button>
        </form>
        <div>
            <p v-for="entry in history">{{ entry }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
// In prod check if secure, then use wss://
const {status, data, send, open, close } = useWebSocket(`wss://${location.host}/api/websocket`)

const history = ref([])
watch(data, (newValue) => {
  history.value.push(`server: ${newValue}`)
})

const message = ref('')
function sendData(){
    console.log('hello')
    history.value.push(`client: ${message.value}`)
    send(message.value)
    message.value = ''
}
</script>