import "./NavBar.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const NavBar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate(); // useNavigate 훅을 통해 페이지 이동 처리

    const goToGuestLog = () => {
        navigate("/GuestLog"); // /GuestLog 경로로 이동
    };
    const goToBlog = () => {
        navigate("/"); // /GuestLog 경로로 이동
    };

    // 컴포넌트가 마운트될 때 html의 데이터셋을 설정
    useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("color-theme", darkMode ? "dark" : "light");
    }, [darkMode]); // darkMode 값이 변경될 때마다 실행

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <>
            <nav>
                <ul>
                    <div role='button' className="name">E0min</div>
                    <div role='button'> <a href=""></a> About</div>
                    <div role='button' onClick={goToBlog}>Blog</div>
                    <div role='button' > <a href="https://relieved-rutabaga-aa6.notion.site/Computer-07d20f5da92941ff953bea7f1b35911a?pvs=4">Note</a> </div>
                    <div role='button'onClick={goToGuestLog}>GuestLog</div>
                    {/* 토글 버튼 */}
                    <div className="toggle-container">
                        <label className="switch">
                            <input type="checkbox" onChange={toggleDarkMode} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
