import React from 'react'; 


const Toto = (props) => {

    const btnToto = (props.leState.ordre !== null)? (<button onClick={props.foncToto}> Réponse </button>) : (<button disabled> Réponse </button>)

        return (
            <div>
                <h2>{props.name}</h2>
                {btnToto}
                <p>{props.totoRep}</p>
                <hr />
            </div>
        );
}

export default Toto; 