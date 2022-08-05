import {
  STUDENT_PAGE_ERROR,
  STUDENT_PAGE_LOADDING,
  SET_STUDENTS,
  SET_BOOKS,
  BOOK_PAGE_ERROR,
  BOOK_PAGE_LOADDING,
  TOGGLE_IS_MOBILE,
  SET_CURRENT_BOOK,
  SET_ONE_BOOK,
  SET_CURRENT_STUDENT,
  SET_ONE_STUDENT,
  CLOSE_ERROR,
  CLOSE_BOOK_ERROR,
  CLOSE_STUDENT_ERROR,
} from "../actions/actions";
import {
  initialState
} from "../constants";

export function commonReducer(state = initialState.common, action) {
  switch (action.type) {
    case TOGGLE_IS_MOBILE:
      return {
        ...state,

        isMobile: !state.isMobile,
      };
    default:
      return state;
  }
}

export function studentsReducer(state = initialState.studentPage, action) {
  switch (action.type) {
    case SET_STUDENTS:
      return {
        ...state,
        students: action.payload,
          isLoading: false,
          isError: false,
      };

    case SET_CURRENT_STUDENT:
      return {
        ...state,
        student: action.payload,
          isLoading: false,
          isError: false,
      };

    case SET_ONE_STUDENT:
      return {
        ...state,
        students: state.students.map((student) => {
            if (+student.id === +action.payload.id) {
              return action.payload;
            }
            return student;
          }),
          student: null,
          isLoading: false,
          isError: false,
      };

    case STUDENT_PAGE_LOADDING:
      return {
        ...state,
        isLoading: true,
          isError: false,
      };

    case STUDENT_PAGE_ERROR:
      return {
        ...state,
        isError: true,
          isLoading: false,
      };


    case CLOSE_STUDENT_ERROR:
      return {
        ...state,
        isError: false,
      }

      default:
        return state;
  }
}

export function booksReducer(state = initialState.bookPage, action) {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload,
          isLoading: false,
          isError: false
      };

    case SET_CURRENT_BOOK:
      return {
        ...state,
        book: action.payload,
          isLoading: false,
          isError: false
      };

    case SET_ONE_BOOK:
      return {
        ...state,
        books: state.books.map((book) => {
            if (+book.id === +action.payload.id) {
              return action.payload;
            }
            return book;
          }),
          book: null,
          isLoading: false,
          isError: false
      };

    case BOOK_PAGE_LOADDING:
      return {
        ...state,
        isLoading: true,
          isError: false,
      };

    case BOOK_PAGE_ERROR:
      return {
        ...state,
        isError: true,
          isLoading: false,
      };

    case CLOSE_BOOK_ERROR:
      return {
        ...state,
        isError: false
      }

      default:
        return state;
  }
}