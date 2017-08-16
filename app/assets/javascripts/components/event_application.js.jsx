class EventApplication extends React.Component {
    constructor(){
        super();
        this.state = { events: []}
    }
    componentDidMount(){
        this.getDataFromApi();
    };
    getDataFromApi(){
        $.getJSON('api/events', (response) => { this.setState({ events: response})})
    };
    render () {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Calendar on React</h1>
                    <p>By Sahil Thakur</p>
                </div>
                <div className="row">
                    <div className="col-md- 12">
                        <EventTable events={this.state.events}/>
                    </div>
                </div>
            </div>
        )
    }
};
