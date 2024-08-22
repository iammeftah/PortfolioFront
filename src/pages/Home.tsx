import React from 'react';
import { ShootingStarsAndStarsBackgroundDemo } from "../components/ui/ShootingStarsAndStarsBackgroundDemo";


const Home: React.FC = () => {

    return (
        <div className="bg-darkModeBg text-darkModeTxt">
            <ShootingStarsAndStarsBackgroundDemo />
        </div>
    );
};

export default Home;