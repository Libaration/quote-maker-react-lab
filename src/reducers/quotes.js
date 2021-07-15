export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      return [
        ...state.filter((quote) => {
          return quote.id !== action.quoteId;
        }),
      ];
    case 'UPVOTE_QUOTE':
      let foundQuote = state.findIndex((e) => {
        return e.id === action.quoteId;
      });
      return [{ ...state[foundQuote], votes: state[foundQuote].votes + 1 }];
    case 'DOWNVOTE_QUOTE':
      let foundQuote2 = state.findIndex((e) => {
        return e.id === action.quoteId;
      });

      if (state[foundQuote2].votes > 0) {
        return [{ ...state[foundQuote2], votes: state[foundQuote2].votes - 1 }];
      }
  }
  return state;
};
