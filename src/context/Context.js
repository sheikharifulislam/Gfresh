import React from 'react';
import FirebaseProvider from './FirebaseProvider';

const Context = ({children}) => {
    return (
        <>
            <FirebaseProvider>               
                {children}                
            </FirebaseProvider>           
        </>
    );
};

export default Context;