import { connect } from "react-redux";
import { getRepos, getActuallyNews, getNews } from "../actions";
import SearchMenu from "../components/SearchMenu";

const mapStateToProps = (state, ownProps) => ({
  defaultUser: ownProps.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGet: (input) => dispatch(getRepos(input)),
  getNewsHome: () => dispatch(getActuallyNews()),
  getNews: (category) => dispatch(getNews(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMenu);
