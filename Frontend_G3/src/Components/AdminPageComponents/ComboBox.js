import {Autocomplete, TextField} from "@mui/material";

export default function ComboBox({list,onSelect}) {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={list}
            getOptionLabel={(item) => item.id +" - "+ item.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            sx={{ width: 300 }}
           style={{width: '70%'}}
            renderInput={(params) => <TextField {...params} label={list=='product'?"Products":"Member"} />}
            onChange={(event,value)=>onSelect(event,value)}
        />
    );
}