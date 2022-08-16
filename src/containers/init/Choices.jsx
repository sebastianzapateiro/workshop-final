import React, { useState } from 'react';
import ChoiceGener from '../../modules/ChoiceGener';
import Caroucel from '../../modules/common/Caroucel';
import FakeChoice from '../../modules/common/FakeChoice';

const Choices = () => {
    const [ numChoice, useNumChoice ] = useState(0)

    const nextPage = () => useNumChoice((numChoice)=> numChoice +1)

    const What = () =>{
        switch (numChoice) {
            case 0:
                return(
                    <FakeChoice 
                        main_text={'Enter your height'}
                        nextPage={nextPage} >
                        <Caroucel
                            valueName={'Cm'}
                            valueMax={250}
                            valueMin={60}
                            defaultValue={150}
                        />
                    </FakeChoice>
                );
            case 1:
                return(
                    <FakeChoice 
                        main_text={'Enter your weight'}
                        nextPage={nextPage} >
                        <Caroucel
                            valueName={'Kg'}
                            valueMax={120}
                            valueMin={35}
                            defaultValue={50}
                        />
                    </FakeChoice>
                );
            case 2:
                return(
                    <FakeChoice 
                        main_text={'Enter your age'}
                        nextPage={nextPage} >
                        <Caroucel
                            valueName={'Age'}
                            valueMax={100}
                            valueMin={5}
                            defaultValue={18}
                        />
                    </FakeChoice>
                );
            case 3:
                return(
                    <FakeChoice 
                        main_text={'Choose gender'}
                        nextPage={nextPage} >
                        <ChoiceGener/>
                    </FakeChoice>
                );
            default:
                break;
        }
    }

    return (
        <div>
            {
                <What/>
            }
        </div>
    );
};

export default Choices;