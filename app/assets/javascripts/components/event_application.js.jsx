class EventApplication extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Calendar on React</h1>
                    <p>By Sahil Thakur</p>
                </div>
                <div className="row">
                    <div className="col-md- 12">
                        <EventTable/>
                    </div>
                </div>
            </div>
        )
    }
};
