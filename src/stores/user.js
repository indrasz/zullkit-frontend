import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        user: false
    }),
    getters: {
        isLoggedIn: (state) => state.user !== false,
        getUser: (state) => state.user
    },
    action: {
        async fetchUser() {
            try {
                const { data } = await axios.get('https://zullkit-backend.buildwithangga.id/api/user', {
                    headers: {
                        Authorization: localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token')
                    }
                })

                this.user = data
            } catch (e) {
                this.user = false
                console.error(e);
            }
        }
    }
})