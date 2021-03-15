import propTipes from 'prop-types';

const Button = ({ loadMore }) => {
  console.log(loadMore);
  return <button onClick={loadMore} className="Button">Load more</button>;
};
export default Button;

Button.propTipes = {
  loadMore: propTipes.func.isRequired,
};