import './scss/main.scss';
import Button from './components/button'

const App = () => {
  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
        <Button />
        <Button />
        <Button />
        <Button />
        </div>
        <div className="row">
        <Button />
        <Button />
        <Button />
        <Button />
        </div>
        <div className="row">
        <Button />
        <Button />
        <Button />
        <Button />
        </div>
        <div className="row">
        <Button />
        <Button />
        <Button />
        <Button />
        </div>
      </div>
    </div>
  )
};

export default App
