const app = Vue.createApp({
    data() {
        return {
            friends: [
                { id: 'manuel', name: 'Manuel Lorenz', phone: '1312313', email: '01231@gmail.com' },
                { id: 'bunny', name: 'BunnyBB', phone: '0107798398', email: '133131@gmail.com' },
            ],
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.component('friend-contact', {
    template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }}</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone}} </li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: { id: 'manuel', name: 'Manuel Lorenz', phone: '1312313', email: '01231@gmail.com' },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');