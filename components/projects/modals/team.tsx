import { Box, Autocomplete, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { FontLiciFamilyDefaultName, ColorLiciPrimaryActive } from '@common';
import { getTeamWork, saveCV } from '../adapters/list.adapter';
import { useEffect, useState } from 'react';
import { ElementList, ItemList, Logo, PurpleButton } from '@global-styled';

export const TeamCVs = ({ id, close }) => {
    const [team, setTeam] = useState([]);

    // Styles
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        fontFamily: FontLiciFamilyDefaultName,
    };


    // Effects
    useEffect(() => {
        getTeamWork().then((e) => { setTeam(e.body) });
    }, []);

    // Functions
    const saveRole = (id, { value }) => {
        saveCV(id, { "curriculum-vitae-id": id, role: value }).then(console.log)
    }
    return (
        <>
            <Box sx={{ ...style, width: 700 }}>
                <h2 id="parent-modal-title" style={{ color: ColorLiciPrimaryActive }}>Equipo disponible</h2>
                {
                    team.length > 0 && team.map((cv, index) => {
                        return (
                                <ElementList key={index}>
                                    <div style={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
                                        <Logo></Logo>
                                        <ItemList>
                                            {cv['first-name']}
                                        </ItemList>
                                    </div>
                                    <select onChange={(e) => saveRole(cv?.id, e.target)}>
                                        <option value="Gerente">Gerente</option>
                                        <option value="Tecnico">Tecnico</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                    {/* <FormControl>
                                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Age"
                                        // onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl> */}
                                </ElementList>
                        )
                    })
                }
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <PurpleButton onClick={() => close()}>Seleccionar</PurpleButton>
                </div>
            </Box>
        </>
    );
}