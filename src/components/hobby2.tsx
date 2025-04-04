import List2 from './list2';
import Table2 from './table2';
import Form2 from './form2';

const Hobby2: React.FC = () => {
    return (
        <div className="hobby-section">
            <h2>Mauricio's Hobby: Scuba Diving</h2>

            <div className="hobby-content">
                <img
                    src="public/ScubaDiving.png"
                    alt="Scuba Diving"
                    className="hobby-image"
                />
                <div>
                    <p>
                        I've been passionate about scuba diving for several years.
                        It allows me to explore the underwater world and discover
                        marine life in its natural habitat.
                    </p>
                </div>
            </div>

            <List2 />
            <Table2 />
            <Form2 />
        </div>
    );
};

export default Hobby2;
