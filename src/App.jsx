import { Welcome } from './Welcome';
import { Button } from './Button';
import { Hello } from './Hello';
import { HelloWithoutJsx } from './Hello';

function App() {
  return (
    <div>
      <Hello/>
      <HelloWithoutJsx/>
      <Welcome/>
      <Button/>
    </div>
  )
}

export default App;
