import Button from "./components/atoms/Button/Button";
import GridLayout from "./components/layout/GridLayout/index";
import "./styles/index.css";

function App() {
    return (
        <GridLayout>
            <div class="sidebar">
                <Button type="tertiary">Hola Mundo</Button>
            </div>
        </GridLayout>
    );
}

export default App;
