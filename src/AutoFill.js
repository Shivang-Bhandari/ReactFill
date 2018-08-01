import React, { Component } from 'react';
import './App.css';

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }




function generateSuggestionsList(list, query){
    if(query!==''){
        const trimmed = query.trim() //removing whitespace
        let escapeTrimmed = escapeRegexCharacters(trimmed) //removing special characters
        if(escapeTrimmed=''){
            return '';
        }
        // checks if the query is a substring of any item in the list, returns items for which it is true
        let newL = list.filter((item) => item.toLowerCase().indexOf(query.toLowerCase())>=0)
        return newL
    }
    else{
        return null
    }        
}





//AutoFill Component
class AutoFill extends Component{

    // to handle change in query
    handleChange(event) {
        let val=event.target.value; //fetches value
        let opt = generateSuggestionsList(this.props.list, val); //fetches filtered list
        console.log(opt);
      }

    render(){
        return(

            <input type='text' name='query' value={this.value} onChange={this.handleChange.bind(this)}/>

        ); 
    }
}

export default AutoFill