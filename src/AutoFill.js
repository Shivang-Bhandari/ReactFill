import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
  
const cardStyles = {
    backgroundColor : '#CFD8DC',
    maxWidth : 450,
  };

const listStyles = {
 backgroundColor : '#ECEFF1'
};

const textStyle = {
    minWidth : 400
};

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

function generateSuggestionsList(list, query){
    if(query!==''){
        const trimmed = query.trim() //removing whitespace
        let escapeTrimmed = escapeRegexCharacters(trimmed) //removing special characters
        if(escapeTrimmed===''){
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


let opt=[]


//AutoFill Component
class AutoFill extends Component{

    
    // to handle change in query
    handleChange(event) {
        let val=event.target.value; //fetches value
        opt = generateSuggestionsList(this.props.list, val); //fetches filtered list
        //takes care of null value for opt
        if(!opt){
            opt=[]
        }

        this.forceUpdate()
      }

    render(){  
        return(
            <Card style={cardStyles}>
                <CardContent>
                <TextField
                    style={textStyle}
                    id="search"
                    label="Search"
                    value={this.value}
                    onChange={this.handleChange.bind(this)}
                    margin="normal"
                />
                
      
                    {opt.map(item =>   
                    <MenuList>  
                        <MenuItem style={listStyles}>
                        <ListItemText inset primary={item} key={item}/> 
                        </MenuItem> 
                        <Divider />
                        </MenuList>
                    )}
                
                </CardContent>

            </Card>
                
                
              
        ); 
    }
};

export default AutoFill;