import {Autocomplete, TextField} from "@mui/material";

export default function ComboBox({list,setSelectedItem}) {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={list}
            getOptionLabel={(item) => item.id +" - "+ item.name}
            sx={{ width: 300 }}
           style={{width: '80%'}}
            renderInput={(params) => <TextField {...params} label="Products" />}
            onChange={(event,value)=>setSelectedItem(value)}
        />
    );
}