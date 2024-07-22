export const piniaStore = defineStore('main', {
    state: () => {
        return {
            token: '',
        }
    },
    actions: {
        setToken(token: string) {
            this.token = token
        },
        deleteToken(){
            this.token = ''
        }
    }
})