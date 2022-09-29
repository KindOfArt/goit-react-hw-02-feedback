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
