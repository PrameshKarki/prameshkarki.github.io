import { useEffect, useState } from "react";

const useTypeWriter = (text: string, delay = 100): string => {
    const [currentText, setCurrentText] = useState("");
    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex === text.length) {
                setCurrentText("");
                currentIndex = 0;
            } else {
                setCurrentText((prevText) => prevText + text[currentIndex]);
                currentIndex++;
            }
        }, delay);

        return () => {
            clearInterval(interval);
        };
    }, [text]);

    return currentText;

}

export default useTypeWriter;