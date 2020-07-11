import React from 'react';
import SearchForm from '../../components/SearchForm';
import {Link} from 'react-router-dom';

function Search() {

    return (
        <div>
            <div>
                <SearchForm />
            </div>
            <Link to='/'><button type="button" className="home"> HOME </button></Link>
        </div>
    );
};

export default Search;