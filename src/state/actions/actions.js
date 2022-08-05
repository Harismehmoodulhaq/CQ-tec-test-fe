import {
  useDispatch
} from "react-redux";
import {
  bindActionCreators
} from "redux";
import {
  getBooksApi,
  getStudentsApi,
  patchBookApi,
  patchStudentApi
} from '../../services/server-apis';

import {
  CLOSE_TOAST
} from '../../state/constants'

export const TOGGLE_IS_MOBILE = "toggleIsMobile";

function toggleIsMobile() {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: TOGGLE_IS_MOBILE,
      });
    }, 2000)
  };
}

export const STUDENT_PAGE_ERROR = "studentPageError";
export const STUDENT_PAGE_LOADDING = "studentPageLodding"
export const SET_STUDENTS = "setStudents";

function getStudents() {
  return async (dispatch) => {

    dispatch({
      type: STUDENT_PAGE_LOADDING,
    })

    try {
      const payload = await getStudentsApi()
      dispatch({
        type: SET_STUDENTS,
        payload,
      })
    } catch (error) {
      dispatch({
        type: STUDENT_PAGE_ERROR,
      })
    }
  };
}


export const SET_ONE_STUDENT = "setOneStudent"
export const CLOSE_STUDENT_ERROR = "closeStudentError"

function patchStudent(payload) {
  return async (dispatch, getState) => {
    const presentState = getState()
    dispatch({
      type: STUDENT_PAGE_LOADDING,
    })

    try {
      await patchStudentApi(payload)
      dispatch({
        type: SET_ONE_STUDENT,
        payload,
      })
    } catch (error) {
      dispatch({
        type: STUDENT_PAGE_ERROR,

      });
      setTimeout(() => {
        dispatch({
          type: CLOSE_STUDENT_ERROR,
        })
      }, CLOSE_TOAST)
    }
  };
}



export const BOOK_PAGE_ERROR = "bookPageError";
export const BOOK_PAGE_LOADDING = "bookPageLodding"
export const SET_BOOKS = "setBooks";

function getBooks() {
  return async (dispatch) => {

    dispatch({
      type: BOOK_PAGE_LOADDING,
    })

    try {
      const payload = await getBooksApi()
      dispatch({
        type: SET_BOOKS,
        payload,
      })
    } catch (error) {
      dispatch({
        type: BOOK_PAGE_ERROR,
      })
    }
  };
}

export const SET_ONE_BOOK = "setOneBook"
export const CLOSE_BOOK_ERROR = "closeError"

function patchBook(payload) {
  return async (dispatch) => {

    dispatch({
      type: BOOK_PAGE_LOADDING,
    })

    try {
      await patchBookApi(payload)
      dispatch({
        type: SET_ONE_BOOK,
        payload,
      })
    } catch (error) {
      dispatch({
        type: BOOK_PAGE_ERROR,
      });
      setTimeout(() => {
        dispatch({
          type: CLOSE_BOOK_ERROR,
        })
      }, CLOSE_TOAST)
    }
  };
}

export const SET_CURRENT_BOOK = "setCurrentBook";


function setCurrentBook(payload) {
  return (dispatch) => {
    dispatch({
      type: SET_CURRENT_BOOK,
      payload,
    });


  }

}

export const SET_CURRENT_STUDENT = "setCurrentStudent";

function setCurrentStudent(payload) {
  return (dispatch) =>
    dispatch({
      type: SET_CURRENT_STUDENT,
      payload,
    });
}



export const actionCreators = {
  toggleIsMobile,
  getStudents,
  getBooks,
  setCurrentStudent,
  setCurrentBook,
  patchBook,
  patchStudent
};

export const useActionCreator = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};