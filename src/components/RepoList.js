import React from "react";

class RepoList extends React.Component {
  componentDidMount() {
    if (this.props.category === 0 || this.props.category === undefined) {
      this.props.getNewsHome();
    } else if (this.props.category > 0) {
      this.props.getNews(this.props.category);
    }
  }

  render() {
    const { repos, hasError, isLoading } = this.props;
    if (hasError) {
      return (
        <div className="container">
          <h6>Error al buscar los repos.</h6>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="container">
          <h6>Loading…</h6>
        </div>
      );
    }

    return (
      <main className="container-fluid m-0 text-center">
        <div className="row">
          {repos.slice(0, 10).map((repo, i) => (
            <div className="col-md-3 col-sm-6 mt-2 mb-3" key={i}>
              <div className="card">
                <img src={repo.img_url} className="card-img-top" alt="imagen" />
                <div className="card-body row d-flex align-items-center justify-content-center">
                  <p className="card-text tex-center p-2">{repo.title}</p>
                  <h5 className="card-title text-truncate" id="nameNew">
                    {repo.source_name}
                  </h5>
                </div>
                <div className="col-12 p-0">
                  <a
                    href={repo.url}
                    className="btn btn-success mt-2 mb-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    VER MÁS
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }
}

export default RepoList;
