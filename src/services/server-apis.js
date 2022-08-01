import {
    BASE_URL
} from "../constants/menus/app.constants"

export const getStudentsApi = async () => {

    try {
        const res = await fetch(`${BASE_URL}/students`)

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }

        return res.json();

    } catch (error) {
        throw new Error(`HTTP error! message: ${error.message}`)
    }


}


export const getBooksApi = async () => {

    try {
        const res = await fetch(`${BASE_URL}/books`)

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }

        return res.json();

    } catch (error) {
        throw new Error(`HTTP error! message: ${error.message}`)
    }


}

export const patchBookApi = async (payload) => {
    debugger
    try {
        const res = await fetch(`${BASE_URL}/books/${payload.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }

        return await res.json();

    } catch (error) {
        throw new Error(`HTTP error! message: ${error.message}`)
    }


}

export const patchStudentApi = async (payload) => {
    try {
        const res = await fetch(`${BASE_URL}/students/${payload.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }

        return await res.json()

    } catch (error) {
        throw new Error(`HTTP error! message: ${error.message}`)
    }


}