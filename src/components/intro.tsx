import * as React from 'react';

interface IntroProps {
    name1: string;
    name2: string;
}

const Intro = ({ name1, name2 }: IntroProps): React.ReactElement => {
    return (
        <section className="introduction">
            <p>
                Hi all! We are {name1} and {name2}, we made this website to share our hobbies with you!
            </p>
        </section>
    );
};

export default Intro;