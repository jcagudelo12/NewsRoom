import { connect } from "react-redux";
import { getActuallyNews, getNews } from "../actions";
import RepoList from "../components/RepoList";

const mapStateToProps = (state) => ({
  repos: state.repos,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getNewsHome: () => dispatch(getActuallyNews()),
  getNews: (category) => dispatch(getNews(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
