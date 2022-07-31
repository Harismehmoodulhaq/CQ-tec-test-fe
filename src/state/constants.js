const flags = {
    isError: false,
    isLoadding: false
}

export const initialState = {
    studentPage: {
        students: [{
                id: 1,
                firstName: "Abdullah",
                lastName: "Mehmood",
            },

            {
                id: 2,
                firstName: "Bilal",
                lastName: "Zafar",
            }

        ],
        student: null,
        ...flags
    },

    bookPage: {
        books: [{
                id: 1,
                bookName: "In the line of fire",
                authorName: "XYZ",
                borrowedBy: "Bilal Zafar",
                dateOfBorrow: "2022-07-30T12:01:33.156Z",
                expectedDateOfReturn: "2022-07-30T12:01:33.156Z",
            },

            {
                id: 2,
                bookName: "In the line of duty",
                authorName: "ABC",
                borrowedBy: '',
                dateOfBorrow: "",
                expectedDateOfReturn: "",
            }
        ],
        book: null,
        ...flags
    },

    common: {
        isMobile: false,
    }
}