import { useEffect, useRef, useState } from "react";


const showAndHideToggle = () => {
    const [toggleAvatar, setToggleAvatar] = useState(false);
    const toggleRef = useRef(null);

    const toggleMenu = () => {
        setToggleAvatar(!toggleAvatar);
    };

    useEffect (() => {
        const handleClickOutside = (event) => {
            if (toggleRef.current && !toggleRef.current.contains(event.target)) {
                setToggleAvatar(false);
            };
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
};
export default showAndHideToggle;