import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Comment from "../components/Comment";

const GuestLog= () => {
    const postId = "0"; // 해당 페이지에서 고유한 게시글 ID

    return (
        <>
            <div className="container-row">
                <NavBar />
            </div>
            <hr/>
            <div className="page-intro">
                <h1>GuestLog</h1>
                <h3>댓글창 구현</h3>
                <Comment postId={"GuestLog"}/>

            </div>
            <hr/>
        </>



    )

}

export default GuestLog;// src/pages/GuestLog.js
