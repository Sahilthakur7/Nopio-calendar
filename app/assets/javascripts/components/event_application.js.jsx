var EventApplication = React.createClass({
    getInitialState: function() {
        return { events: [], sort: "name", order: "asc", page: 1, pages: 0 };

    },
    componentDidMount: function() {
        this.getDataFromApi();

    },
    handleUpdateRecord: function(old_event,event){
        var events = this.state.events.slice();
        var index = events.indexOf(old_event);
        events.splice(index,1,event);
        this.setState({events: events});
    },
    getDataFromApi: function() {
        var self = this;
        jQuery.ajax({
            url: '/api/events',
            success: function(data) {
                self.setState({ events: data.events, pages: parseInt(data.pages),page: parseInt(data.page) });

            },
            error: function(xhr, status, error) {
                alert('Cannot get data from API: ', error);

            }

        });

    },
    handleSearch: function(events){
        this.setState({events: events});
    },
    handleAdd: function(event){
        var events = this.state.events;
        events.push(event);
        this.setState({events: events});
    },
    handleDeleteRecord: function(event){
        var events = this.state.events.slice();
        var index = events.indexOf(event);
        events.splice(index,1);
        this.setState({events: events});
    },
    handleSortColumn: function(name,event){
        if(this.state.sort != name){
            order = 'asc';
        }
        $.ajax({
            url: '/api/events',
            data: { sort_by:name , order: order},
            method: 'GET',
            success: function(data){
                this.setState({events: data.events, sort: name,order: order});
            }.bind(this),
            error: function(xhr,status,error){
                alert('Cannot sort events',error);
            }
        });
    },
    handleChangePage: function(page){
        console.log(page);
    },
    render: function() {
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1>Calendar on React</h1>
                    <p>by Sahil Thakur</p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <SearchForm handleSearch={this.handleSearch}/>
                    </div>
                    <div className="col-md-8">
                        <NewForm handleAdd={this.handleAdd}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <EventTable events={this.state.events} sort={this.state.sort} order={this.state.order} handleDeleteRecord={this.handleDeleteRecord} handleUpdateRecord={this.handleUpdateRecord} handleSortColumn={this.handleSortColumn} />
                        <Pagination page={this.state.page}
                            pages={this.state.pages}
                            handleChangePage={this.handleChangePage}/>
                    </div>
                </div>
            </div>

        )

    }

});
