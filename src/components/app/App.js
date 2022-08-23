import {Component} from 'react';
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';


class Amp extends Component {
    render() {
        return (
        <div>
            {this.props.children}
        </div>
        
        )     
    }
}

const Amps = (tir) =>  {
    return (
        <h2>{`qoirb`}</h2>
    )
    
}

class App extends Component {

    state= {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        });
    };

    render () {
        return (
            <div className="app">
            <AppHeader/>
            <main>
                <Amp>
                    <Amps tir='Истина'/>
                </Amp>
                <RandomChar/>
                <div className="char__content">
                    <CharList onCharSelected={this.onCharSelected}/>
                    <ErrorBoundary>
                        <CharInfo charId = {this.state.selectedChar}/>
                    </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
     )
    }
}

export default App;