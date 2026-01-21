import Heading from './components/Heading';

import './styles/theme.css'
import './styles/global.css'
import { Timer, TimerIcon } from 'lucide-react';



function App(){
    return(
        <>
        <Heading>
            Hello, World
            <button>
                <TimerIcon />
            </button>
        </Heading>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corporis ipsa quae, 
            repudiandae eaque incidunt exercitationem quibusdam veniam nostrum a magnam, officia 
            voluptas? Incidunt sapiente aliquid harum ea consectetur. Voluptas.
        </p>
        </>
    );
}

export default App;