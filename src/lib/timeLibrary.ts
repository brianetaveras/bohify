const calculateCurrentValue = (e: Event, maxValue: number): number => {
    const width = e.target.clientWidth;
    const newPos = maxValue * (e.offsetX / width);

    return newPos;
};

const convertTime = (seconds: number): string => {
    const addZeroes = (time: number) => time < 10? `0${time}` : `${time}`;

    const minute = Math.floor(seconds / 60) % 60;
    const secondsLeft = Math.floor(seconds) % 60;
    const currentMinute = addZeroes(minute);
    const currentSeconds = addZeroes(secondsLeft);
    
    return `${currentMinute}:${currentSeconds}`;
};

export { calculateCurrentValue, convertTime }