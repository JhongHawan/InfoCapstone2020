import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   formControl: {
     margin: theme.spacing(1),
     minWidth: 120,
   },
 }));

 /**
   * Generic drop down button to use for different filter items. 
   */
function FilterOpenSelect(props) {
   const classes = useStyles();

   const [data, setState] = React.useState(
      props.data
   );
   
   const [open, setOpen] = React.useState(false);

   const handleChange = (event) => {
      setState(event.target.value);
   };
  
   const handleClose = () => {
      setOpen(false);
   };
  
   const handleOpen = () => {
      setOpen(true);
   };

   return (
      <div>
         <FormControl className={classes.formControl}>
         <InputLabel id="open-select-label">{props.label}</InputLabel>
            <Select
               labelId="open-select-label"
               id="open-select"
               open={open}
               onClose={handleClose}
               onOpen={handleOpen}
               value={data}
               onChange={handleChange}
            >
            {data.map((val, name) => (
               <MenuItem value={val}>{name}</MenuItem>
            ))}
            </Select>
            <FormHelperText></FormHelperText>
         </FormControl>
      </div>
   );
}

export default FilterOpenSelect; 