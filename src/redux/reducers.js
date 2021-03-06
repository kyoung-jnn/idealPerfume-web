const CHANGE_PAGE = "CHANGE_PAGE";
const SAVE_PAGE = "SAVE_PAGE";

const currentPage_initialState = {
  page: "pageHome",
};

const questionSelection_initialState = {
  results: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
  },

  // // example
  // results: {
  //   0: 1,
  //   1: 4,
  //   2: 2,
  //   3: 1,
  //   4: 4,
  //   5: 2,
  //   6: 1,
  //   7: 1,
  //   8: 1,
  //   9: 1,
  // },
};

export const nextPageReducer = (state = currentPage_initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        page: `${action.page}`,
      };
    default:
      return state;
  }
};

export const questionSelectionReducer = (
  state = questionSelection_initialState,
  action
) => {
  switch (action.type) {
    case SAVE_PAGE: {
      const page = action.answerLocation;
      state.results[page] = action.answer;
      return state;
    }
    default:
      return state;
  }
};
