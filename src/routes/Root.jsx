import React from 'react';
import {
    BrowserRouter as Router, Route, Routes
} from 'react-router-dom';

import ListaBooks from '../pages/ListsBooks';
import Cadastrar from '../pages/cadastrar';
import NotFound from '../pages/NotFound';

const Root = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element= {<ListaBooks />}  />
                <Route path="/administrar/cadastrat" element={ <Cadastrar />}/>
                <Route path="*" element={ <NotFound />}/>
            </Routes>


        </Router>

    );
}

export default Root;