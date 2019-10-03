import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    users: {
        id1: {
            'First Name': 'Jon',
            'Last Name': 'Howellski',
            'Mobile Number': '123-123-4567',
            'Email': 'Jon@gmail.com',
            'Status': 'Active'

        },
        id2: {
            'First Name': 'Bill',
            'Last Name': 'Allen',
            'Mobile Number': '223-123-4567',
            'Email': 'Bill@gmail.com',
            'Status': 'Active'
        },
        id3: {
            'First Name': 'Harry',
            'Last Name': 'Bower',
            'Mobile Number': '323-123-4567',
            'Email': 'Harry@gmail.com',
            'Status': 'Inactive'
        }
    },
    col_headers: ['First Name', 'Last Name', 'Mobile Number', 'Email', 'Status']

}

const mutations = {
    addNewUser(state, payload) {
        Vue.set(state.users, payload.id, payload.newUser)
    }
}

const actions = {
    addNewUser({ commit }, newUser) {
        let payload = {
            id: uid(),
            newUser: newUser
        }
        commit('addNewUser', payload)
    }
}

const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}