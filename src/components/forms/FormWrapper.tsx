import React from 'react';

export type wrapperVariant = 'large' | 'medium' | 'small'

interface FormWrapperProps{
    wrapperVariant?: string;
}



export const FormWrapper: React.FC<FormWrapperProps> = ({wrapperVariant ='medium', children}) => {
    let width 
    if(wrapperVariant === 'large'){
        width = '80%'
    }else if(wrapperVariant === 'medium'){
        width = '60%'
    }else if(wrapperVariant === 'small'){
        width = '40%'
    }
        return (
            <div style={{width: width, margin:'0 auto'}}>
                {children}
            </div>
        );
};