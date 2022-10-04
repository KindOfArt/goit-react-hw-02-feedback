import PropTypes from 'prop-types';

import { List, Item, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map((option, idx) => {
        return (
          <Item key={idx}>
            <Button
              type="button"
              onClick={() => onLeaveFeedback(option.toLowerCase())}
            >
              {option}
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
