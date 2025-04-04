import List1 from './list1';
import Table1 from './table1';
import Form from './form';

const Hobby1 = () => {
    return (
        <section className="hobby-section">
            <h2>Arabic Poetry</h2>
            <div className="hobby-content">
                <img src="/BurdahSS.png" alt="Burdah Picture" className="hobby-image" />
                <p>
                    To combat the tendency CS has to suck the soul out of you,
                    I've grown an affinity to Arabic spiritual poetry. Their meanings strike my heart and they are performed in such a
                    variety of ways! Here's a
                    <a href="https://www.youtube.com/watch?v=EMAiEWnncDo"> link to a rendition of
                        Chapter 1 of Imam Busiri's Mantle Ode. Translation included!</a>
                </p>
            </div>
            <List1 />
            <Table1 />
            <Form />
        </section>
    );
};

export default Hobby1;