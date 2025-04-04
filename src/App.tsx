import './App.css';
import Title from './components/title';
import Intro from './components/intro';
import Hobby1 from './components/hobby1';
import Hobby2 from './components/hobby2';

function App(): React.ReactElement {
    return (
        <div className="App">
            <Title />
            <Intro name1="Mohammed" name2="Mauricio" />
            <Hobby1 />
            <Hobby2 />
        </div>
    );
}

export default App;