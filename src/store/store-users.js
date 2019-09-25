const state = {
    users: {
        id1: {
            firstname: 'Jon',
            lastname: 'Howellski',
            mobilenumber: '1231234567',
            email: 'Jon@gmail.com',
            status: 'Active'
        },
        id2: {
            firstname: 'Bill',
            lastname: 'Allen',
            mobilenumber: '2231234567',
            email: 'Bill@gmail.com',
            status: 'Active'
        },
        id3: {
            firstname: 'Harry',
            lastname: 'Bower',
            mobilenumber: '3231234567',
            email: 'Harry@gmail.com',
            status: 'Inactive'
        }
    },
    col_headers: ['First Name', 'Last Name', 'Mobile Number', 'Email', 'Status']

}

const mutations = {
    setSort(state, value) {
        state.sort = value
    }
}

const actions = {
    updateTask({ dispatch }, payload) {
        dispatch('fbUpdateTask', payload)
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