var EventTable = React.createClass({
    handleDeleteRecord(event){
        this.props.handleDeleteRecord(event);
    },
    handleUpdateRecord(old_event,event){
        this.props.handleUpdateRecord(old_event,event);
    },

    render (){
        var events = [];
        this.props.events.forEach(function(event){
            events.push(<Event event={event} key={'event' + event.id} handleDeleteRecord={this.handleDeleteRecord} handleUpdateRecord={this.handleUpdateRecord}/>)
        }.bind(this));
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="col-md-2">
                            <SortColumn name="name"
                                text="Name"
                                sort={this.props.sort}
                                order={this.props.order}/>
                        </th>
                        <th className="col-md-2">
                            <SortColumn name="event_date"
                                text="Date"
                                sort={this.props.sort}
                                order={this.props.order}/>
                        </th>
                        <th className="col-md-2">
                            <SortColumn name="place"
                                text="Place"
                                sort={this.props.sort}
                                order={this.props.order}/>
                        </th>
                        <th className="col-md-2">
                            <SortColumn name="description"
                                text="Description"
                                sort={this.props.sort}
                                order={this.props.order}/>
                        </th>
                        <th className="col-md-2">Actions</th>

                    </tr>
                </thead>
                <tbody>{events}</tbody>
            </table>
        )
    }
});
