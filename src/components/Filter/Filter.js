import css from "./Filter.module.css";
import {  useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filter/filterSlice";
import { Input, Container } from '@mui/material';


export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    dispatch(filterContacts(e.target.value));
  };


  return (
    <Container sx={{display: 'flex', justifyContent: 'center', mb: '1rem'}}>
       <Input placeholder="Find contacts by name"
       className={css.input}
       type="text"
       name="filter"
       onChange={handleFilterChange}/>
</Container>
  );
};

export default Filter;
