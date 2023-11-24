
import React from 'react';

export default function Suscbutton() {
    const redirectToSuscHome = () => {
        // Coloca la URL correcta a la que quieres redirigir
        window.location.href = '../suschome/suschome.jsx';
    };

    return (
        <div>
            ¿Primera vez en Netflix?
            <button
                className='ml-1 text-default-800 relative overflow-hidden group'
                onClick={redirectToSuscHome}
            >
                Suscríbete ahora!
                <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
            </button>
        </div>
    );
}

