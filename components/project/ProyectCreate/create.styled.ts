import styled from 'styled-components';

export const HeaderCreate = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TitleContainer = styled.div`
    display:flex;
    align-items:center;
    gap: 1em;
`
export const TitleCreate = styled.h1``

export const SubTitleCreate = styled.h5``

export const CustomInput = styled.input.attrs({
    type: "text"
})``

export const TextArea = styled.textarea`
    margin-top:10px;
    width:100%;
    height: 20em;
`
export const DobleContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    gap: 1em;
    margin-top: 10px;
`

export const InputDate = styled.input.attrs({
    type: 'date'
})`
    margin-top: 10px;
    width: 50%;
    height: 3em;
    border-radius: 5px;
    outline: none;
    border: 1px solid grey;
`

export const DocumentInput = styled.input.attrs({
    type: 'file',
})`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 2em;
    border-radius: 7px;
    outline: none;
    border: 1px solid grey;
`