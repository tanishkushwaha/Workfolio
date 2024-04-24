import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Stack } from 'react-bootstrap';

const App = () => {
  return (
    <Stack direction="horizontal" gap={2}>
      <Button as="a" variant="primary">
        Button as link
      </Button>
      <Button as="a" variant="success">
        Button as link
      </Button>
    </Stack>
  )
}

export default App