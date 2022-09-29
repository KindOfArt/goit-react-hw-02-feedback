import { List, Item, Text } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <Item>
        <Text>Good: {good}</Text>
      </Item>
      <Item>
        <Text>Neutral: {neutral}</Text>
      </Item>
      <Item>
        <Text>Bad: {bad}</Text>
      </Item>
      <Item>
        <Text>Total: {total}</Text>
      </Item>
      <Item>
        <Text>Positive feedback: {positivePercentage}</Text>
      </Item>
    </List>
  );
};

export default Statistics;
