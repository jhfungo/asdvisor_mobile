const PropTypes = require('prop-types');
const { create } = require('zustand');

const articleStore = create((set) => ({
  articles: [], //store arrays
  setArticles: (articles) => set({ articles }),
}));

articleStore.propTypes = {
  articles: PropTypes.array,
  setArticles: PropTypes.func,
  addArticle: PropTypes.func,
};

export default articleStore;
