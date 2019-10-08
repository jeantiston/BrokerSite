import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    users: {
        id1: {
            'firstname': 'Jon',
            'lastname': 'Howellski',
            'mobilenumber': '123-123-4567',
            'email': 'Jon@gmail.com',
            'status': 'Active'

        },
        id2: {
            'firstname': 'Bill',
            'lastname': 'Allen',
            'mobilenumber': '223-123-4567',
            'email': 'Bill@gmail.com',
            'status': 'Active'
        },
        id3: {
            'firstname': 'Harry',
            'lastname': 'Bower',
            'mobilenumber': '323-123-4567',
            'email': 'Harry@gmail.com',
            'status': 'Inactive'
        }
    },
    col_headers: ['firstname', 'lastname', 'mobilenumber', 'email', 'status']

}

const mutations = {
    updateUser(state, payload) {
        Object.assign(state.users[payload.id], payload.updates)
    },
    addNewUser(state, payload) {
        Vue.set(state.users, payload.id, payload.newUser)
    }
}

const actions = {
    updateUser({ commit }, payload) {
        commit('updateUser', payload)
    },
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