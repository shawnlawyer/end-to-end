import { Link, withRouter } from 'react-router-dom';
import { Result, Button } from 'antd';
function NotFound() {
  return (
      <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist fucker."
    extra={<Link to='/'><Button type="primary">Back Home</Button></Link>}
  />
  );
}

export default withRouter(NotFound);
