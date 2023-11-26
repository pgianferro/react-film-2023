
import Suschome from '../suschome/suschome';
import React, { useState } from 'react';
import { useAuth } from '../../../core/auth/hook/use_auth';

export default function App() {
    const { suscribe } = useAuth();

    return (
        <div>
            ¿Primera vez en Netflix?
            <button
                className='ml-1 text-default-800 relative overflow-hidden group'
                
            >
                Suscríbete ahora!
                <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
            </button>
        </div>
    );
}
