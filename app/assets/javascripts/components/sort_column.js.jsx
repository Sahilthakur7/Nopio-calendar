class SortColumn extends React.Component {
    render(){
        var active = this.props.sort == this.props.name;
        var display_name = active? <u>{this.props.text}</u> : this.props.text;
        var direction;
        if(active){
            direction = this.props.order == "asc" ? <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>

        }
        return(
            <span>
                {display_name}
                {direction}
            </span>
        )
    }
}
