import styled from "vue-styled-components";

const PlayerButton = styled.button`
    width: 35px;
    height: 35px;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 100%;
    cursor: pointer;
`;

const ButtonIcon = styled.img`
    width: 15px;
`;

export { PlayerButton, ButtonIcon };