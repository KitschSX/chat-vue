<template>
  <div>
    <h1>Chat Application</h1>
    <div v-if="!isUserAdded">
      <input v-model="user" placeholder="Enter your name" />
      <button @click="addUser">Join Chat</button>
    </div>
    <div v-if="isUserAdded">
      <div>
        <input v-model="message" placeholder="Enter message" />
        <button @click="sendMessage">Send</button>
      </div>
      <div>
        <h2>Messages</h2>
        <ul>
          <li v-for="msg in messages" :key="msg.date + msg.text">
            <strong>{{ msg.user }}</strong>: {{ msg.text }} <em>{{ msg.date }}</em>
          </li>
        </ul>
      </div>
      <div>
        <h2>Users</h2>
        <ul>
          <li v-for="usr in users" :key="usr.id">
            {{ usr.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import io from 'socket.io-client';

export default {
  name: 'ChatComponent',
  setup() {
    const socket = io('http://localhost:3000'); // 替换为你的 Socket.IO 服务器地址
    const user = ref('');
    const message = ref('');
    const messages = ref([]);
    const users = ref([]);
    const isUserAdded = ref(false);

    onMounted(() => {
      socket.on('init-chat', (msgs) => {
        messages.value = msgs;
      });

      socket.on('update-users', (usr) => {
        users.value = usr;
      });

      socket.on('read-msg', (msg) => {
        messages.value.push(msg);
      });
    });

    const addUser = () => {
      if (user.value) {
        socket.emit('add-user', user.value);
        isUserAdded.value = true;
      }
    };

    const sendMessage = () => {
      if (message.value) {
        const msg = {
          text: message.value,
          user: user.value,
        };
        socket.emit('send-msg', msg);
        message.value = '';
      }
    };

    return {
      user,
      message,
      messages,
      users,
      isUserAdded,
      addUser,
      sendMessage,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 16px;
}

input {
  padding: 8px;
  font-size: 16px;
  margin-right: 8px;
}

button {
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 8px;
  background: #f0f0f0;
  margin-bottom: 4px;
  border-radius: 4px;
}
</style>
