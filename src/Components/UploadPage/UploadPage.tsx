import React from 'react';
import { BiImageAlt } from "react-icons/bi"
import styled from 'styled-components';

const UploadPage = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Card>
                    <Circle>
                        <BiImageAlt />
                    </Circle>
                    <Use id="pix" type={"file"} />
                    <Button htmlFor= "pix">Upload Cover Image</Button>
                    <Input placeholder = "Enter Tittle" />
                    <TextArea placeholder = "Summary...." />
                    <Input placeholder = "Enter Author Name" />
                    <Select>
                        <option>Choose Options</option>
                        <option>Comedy</option>
                        <option>Fiction</option>
                        <option>Poet</option>
                        <option>Romance</option>
                        <option>Legends</option>
                        <option>Fantasy</option>
                        <option>Contemporary</option>
                        <option>Others</option>
                    </Select>
                    <Submit>Submit</Submit>
                </Card>
            </Wrapper>
        </Container>
    </div>
  )
}

export default UploadPage;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Wrapper = styled.div``;
const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
`;
const Circle = styled.div`
    width: 250px;
    height: 150px;
    border-radius: 5px;
    background-color: lavender;
    display: flex;
    justify-content: center;
    font-size: 40px;
    align-items: center;
    flex-direction: column;

    ::after{
        content: "upload file";
        font-size: 14px;
        color: rgb(0, 0, 0, 0.6);
        font-weight: 500;
    }
`;
const Button = styled.label`
    height: 40px;
    width: 200px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: all 350ms;
    cursor: pointer;
    margin-top: 20px;
    :hover{
        transform: scale(0.9);
    }
`;
const Input = styled.input`
    margin: 10px;
    width: 300px;
    border-radius: 3px;
    outline-color: #f8cbe0;
    border: 0.7px solid silver;
    height: 30px;

    ::placeholder{
        padding-left: 10px;
    }
`;
const TextArea = styled.textarea`
    margin: 10px;
    height: 70px;
    width: 300px;
    border-radius: 3px;
    outline-color: #f8cbe0;
    border: 0.7px solid silver;
    resize: none;
    ::placeholder{
        padding-left: 10px;
    }
`;
const Use = styled.input`
    display: none;
`;
const Select = styled.select`
    margin: 10px;
    height: 70px;
    border-radius: 3px;
    outline-color: #f8cbe0;
    border: 0.7px solid silver;
    resize: none;
    width: 370px;
`;
const Submit = styled.button`
    width: 150px;
    border: none;
    border-radius: 5px;
    color: white;
    text-transform: capitalize;
    font-size: 18px;
    font-weight: 500;
    transition: all 350ms;
    cursor: not-allowed;
    height: 40px;
    background-color: #c5bebe;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, 
                rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    @media screen and (max-width: 500px) {
        width: 120px;
        font-size: 14px;
    }
`;
