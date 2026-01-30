import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeButton = (props) => {
    const { theme, setTheme } = props;

    useEffect(() => {
        // ! this code checke the theme of our system dark or light
        const prefersDarkMode = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;
        // ! if theme (dark) and system (dark) we go with 1st else with 2nd
        setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
    }, []);

    // ! this useEffect render whene ever the theme is changed
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <>
            <button>
                {theme === "dark" ? (
                    <img
                        onClick={() => {
                            setTheme("light");
                        }}
                        src={assets.sun_icon}
                        className="size-8.5 p-1.5 border border-gray-500 rounded-full"
                        alt=""
                    />
                ) : (
                    <img
                        onClick={() => {
                            setTheme("dark");
                        }}
                        src={assets.moon_icon}
                        className="size-8.5 p-1.5 border border-gray-500 rounded-full"
                        alt=""
                    />
                )}
            </button>
        </>
    );
};

export default ThemeButton;
