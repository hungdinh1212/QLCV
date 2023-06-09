
import React from 'react';
import TaskItem from './TaskItem'
class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        var { filterName } = this.state;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus,
        )
        this.setState({
            [name]: value
        });
    }

    render() {
        var { filterName, filterStatus } = this.state;
        var { tasks } = this.props;
        var elementTask = tasks.map((tasks, index) => {
            return <TaskItem key={tasks.id}
                index={index} tasks={tasks}
                onUpdate={this.props.onUpdate}
                onUpdateStatus={this.props.onUpdateStatus}
                onDelete={this.props.onDelete}

            />
        });

        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td />
                        <td>
                            <input type="text" className="form-control"
                                name="filterName"
                                value={this.state.filterName}
                                onChange={this.onChange}

                            />
                        </td>
                        <td>
                            <select className="form-control"
                                name="filterStatus"
                                value={this.state.filterStatus} // Sử dụng value và thêm hàm xử lý onChange
                                onChange={this.onChange}

                            >
                                <option value={-1}>Tất Cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích Hoạt</option>
                            </select>
                        </td>
                        <td />
                    </tr>
                    {elementTask}
                </tbody>
            </table>



        );
    }

}

export default TaskList;












