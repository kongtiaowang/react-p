
class Title extends React.Component {
  render() {
      return (
    <div>
      <h2> {this.props.name}</h2>
      <h3> {this.props.age}</h3>
    </div>
  );
  }
}
class NameForm extends React.Component {

  render() {
      return (
        <div>
        <form onSubmit={this.props.handleClick}>

             <input type="text" name ="name" />
             <input type="text" name ="age"  />
             <button type="submit">Set Name</button>

        </form>
      </div>
  );
 }
}



class App extends React.Component {
  constructor(){
    super()
     this.state = {name:'Apple',age:'22'};
  }
  handleChange(e){

    e.preventDefault();
    var name = e.target.name.value;
    var age = e.target.age.value;
    this.setState({
        name:name,
        age:age
    });

       //
      //  alert(this.refs.name.value);

  }
    render() {
      var name = this.state.name;
      var age = this.state.age;
        return (
      <div>
        <Title name={name} age={age}/>
        <NameForm handleClick={this.handleChange.bind(this)}/>
    </div>
    );
  }
}
Title.defaultProps = {
  name: "defaultname",
};
 ReactDOM.render(
   <App name="wang"/>,
   document.getElementById('app')
 );
