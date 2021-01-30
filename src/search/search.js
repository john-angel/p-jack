import React from 'react';
import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class Search extends React.Component {

    constructor(props){
        super(props);
        this.searchRef = React.createRef();
    }

    onChange = () => console.log('onChange')

    render(){
        return(
            <div className={'searchContainer'}>
                <FontAwesomeIcon className={'searchIcon'} icon={faSearch}></FontAwesomeIcon>
                <input type='search' className='searchText' placeholder='Search projects...' name='searchText' required ref={this.searchRef} onChange={this.onChange}></input>
            </div>
        );
    }
}

export default Search;