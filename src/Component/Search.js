import React from 'react';
class Search extends React.Component {
  constructor(props){
    super(props);
    this.state={
      keyword:''
    }
  }
  onChange=(event)=>{
    var target=event.target;
    var name=target.name;
    var value=target.value;
    this.setState({
      [name]:value
    });
  }
  onSearch=()=>{
    this.props.onSearch(this.state.keyword);
  }
  render() {
    var {keyword}=this.state;

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="input-group">
            <input 
            value={keyword}
            name="keyword"
            onChange={this.onChange}
            type="text" className="form-control" 
            placeholder="Nhập từ khóa..." 

            />
            <span className="input-group-btn">
              <button className="btn btn-primary" 
              type="submit"
              onClick={this.onSearch}
              >
                <span className="fa fa-search mr-5" />Tìm
              </button>
            </span>
          </div>
        </div>
    );
  }

}
export default Search;
