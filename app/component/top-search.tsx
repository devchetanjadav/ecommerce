export default function TopSearch() {
  return (
    <div className="top-search">
      <div className="container">
        <div className="input-group">
          <span className="input-group-addon">
            <i className="fa fa-search" />
          </span>
          <input type="text" className="form-control" placeholder="Search" />
          <span className="input-group-addon close-search">
            <i className="fa fa-times" />
          </span>
        </div>
      </div>
    </div>
  );
}