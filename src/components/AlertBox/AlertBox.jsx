import PropTypes from 'prop-types';
import * as A from './AlertBox.style';

function AlertBox({ message }) {
  return (
    <A.Border>
      <A.Left>
        <div>❗</div>
        <div className="message">{message}</div>
      </A.Left>
      <div>
        <A.Button type="button">업로드 하러 가기</A.Button>
      </div>
    </A.Border>
  );
}

AlertBox.propTypes = {
  message: PropTypes.string.isRequired,
};

export default AlertBox;
