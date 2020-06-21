import React, { Component } from 'react'; 
import Toto from './Toto'; 


class Maman extends Component {

    state = {
        ordre : null,
        repToto : null
    }

    donnerOrdre = () => {
        this.setState({ 
            ordre : "va ranger ta chambre enculé !" 
        }); 
    }

    reponseToto = () => {
        this.setState({
            repToto : "ça roule ma caille !"
        });
    }

    render () {
        
        return (
            <div>
                <h1>Maman</h1>
                <button onClick={this.donnerOrdre}> Ordre de la mère </button>
                <p>{this.state.ordre}</p>
                <hr />
                <Toto name="Toto" leState={this.state} foncToto={this.reponseToto} totoRep={this.state.repToto}> </Toto>
            </div>

        );
    }
}

export default Maman; 