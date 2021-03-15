import axios from 'axios';
import propTipes from 'prop-types';


const pixabayApi = (value, page) => {

  return axios.get(
    `https://pixabay.com/api/?q=${value}&page=${page}&key=19922500-0aa846c7df203c993f2ecb489&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

export default pixabayApi;

pixabayApi.propTipes = {
  value: propTipes.string,
  page: propTipes.number,
};
