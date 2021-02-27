import React from 'react';
import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class Search extends React.Component {

    onChange = (event) => {
        this.props.onSearchEvent(event.target.value);
    }

    render(){
        return(
            <div className={'searchContainer'}>
                <FontAwesomeIcon className={'searchIcon'} icon={faSearch}></FontAwesomeIcon>
                <input type='search' className='searchText' placeholder='Search projects...' name='searchText'  onChange={this.onChange}></input>
            </div>
        );
    }
}

export default Search;