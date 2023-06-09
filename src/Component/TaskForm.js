
import React from 'react';

class TaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name: '',
            status: false
        }
    }
    componentWillMount(){
        if (this.props.task) {
                  this.setState({
                    id: this.props.task.id,
                    name: this.props.task.name,
                    status: this.props.task.status
                  });
                  console.log(this.state);
                }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps&&nextProps.task){
            this.setState({
                    id:nextProps.task.id,
                    name:nextProps.task.name,
                    status:nextProps.task.status
                });
        }else if(!nextProps.task){
            this.setState({
                id:'',
                name: '',
                status: false
            });
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    };
    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.name.trim() === '') {
            return;
        }
        this.props.onSubmit(this.state);
        this.onClear();
       
    }
    onClear=()=>{
        this.setState(
            {
                name: '',
                status:false
            }
        );
    }
   onCloseForm=()=>{
    this.props.onCloseForm();
   }
    render() {
        var {id}=this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title label label-warning">
                    {
                        id!==''?'Cập nhật công việc':'Thêm công việc'
                    }
                    <span
                    onClick={this.onCloseForm} 
                    style={{cursor:"pointer"}}
                    >
                    &times;
                    </span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" className="form-control"
                                name='name'
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" required="required"
                            name='status'
                            value={this.state.status}
                            onChange={this.onChange}

                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>

                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                            <button type="submit" className="btn btn-danger" onClick={this.onClear}>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div >
        );
    }

}

export default TaskForm;
