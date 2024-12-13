import { useState, useEffect } from "react";
// import { Component } from "react";
import CardList from "./component/card-list/card-list.component";
// import logo from "./logo.svg";
import Searchbox from "./component/search-box/search-box.component";
import "./App.css";



const App = () =>{
  const [searchfield, setsearchfield] = useState('');
  const [monsters,setMonsters] = useState([]);
  const [email,setEmail] = useState('');
  const [filteredMonsters, setfilteredMonster] = useState(monsters);
  const [filteredCompany, setfilteredCompany] = useState(monsters);    //extre line

  
  // console.log('rendered')

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);





  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchfield);
    });
    setfilteredMonster(newfilteredMonsters);
    
  }, [monsters, searchfield]);

 
  useEffect(() => {
    const newfilteredCompany = monsters.filter((monster) => {
      return monster.email.toLowerCase().includes(email);
    });
    setfilteredMonster(newfilteredCompany);
    
  }, [monsters, email]);
  //extre code


  const onSearchChange = (event) => {
    const searchfieldString = event.target.value.toLowerCase();
    setsearchfield(searchfieldString);
  }
  
  const onEmailChange = (event) => {
    const emailString = event.target.value.toLowerCase();
    setEmail(emailString);
  }  //extre code
  


  

  return(
    <div className="App">
        <h1 className="app-title">Ghost Buster</h1>
        <br/>
        <div className="search-container">
          <div>
            <Searchbox
            className = 'monsters-search-box'
            onChange = {onSearchChange} 
            placeholder='search monsters'
            />
          </div>
          <div>
            <Searchbox
            className = 'email-search-box'
            onChange = {onEmailChange} 
            placeholder='search email'
            />
          </div>
        </div>
        <div>
          <label for='cars'>Choosea company</label>
          <select name='' id=''>
            {monsters.map((monster) => {
              return(
                <option value= {monster.company.name}>
                  {monster.company.name}
                </option>
              )
            })}
          </select>
        </div>
        


      
        <CardList monsters={filteredMonsters} />
      </div>
  )
}



export default App;







 
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters:[],
//       searchfield: '',
//   };
//   // console.log('component');
  
//   }
//   componentDidMount() {
//     // console.log('didmount');
    
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => 
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//         ) 
//       );      
//   }

//   onSearchChange = (event) => {
//     const searchfield = event.target.value.toLowerCase();
//     this.setState(() => {
//       return {searchfield};
//     });
//   }

//   onSearchChange = (event) => {
//     const searchfield = event.target.value.toLowerCase();
//     this.setState(() => {
//       return {searchfield};
//     });
//   }


//   render() {
//     const {monsters,searchfield} = this.state;
//     const {onSearchChange} = this;
    
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchfield);

//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Ghost Buster</h1>
//         <Searchbox
//         className = 'monsters-search-box'
//         onChange = {onSearchChange} 
//         placeholder='search monsters'
//         />
      
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

// export default App;
