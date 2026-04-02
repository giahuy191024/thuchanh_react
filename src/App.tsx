import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import FPT, {ListCard} from "./FPT";
import {validateHeaderValue} from "node:http";

function App() {
    const [sv, setSvin] = useState<ListCard[]>(
        [
            {
                image : "https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-FPT.png",
                name:"do kim ngan",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
            },
            {
                image : "https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-FPT.png",
                name:"nguyen phuong thao",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
            },
            {
                image : "https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-FPT.png",
                name:"nguyen tien hung",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
            },
        ]
    );
    return (
        <>
            <header style={{
                backgroundColor: "grey",
                display: "flex",
                justifyContent: "space-between",
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }} className={logo}>
                    <img style={{
                        width: "100px",
                        height: "100%",
                    }} src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-FPT.png" alt=""/>
                    <div><p>FPT APTECH</p></div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap:"10px",
                }}>
                    <div>About us</div>
                    <div>About us</div>
                    <div>About us</div>
                    <div>About us</div>
                </div>
                <div>
                    <button style={{
                        backgroundColor: "orange",
                        height:"50px",
                        width: "100px",
                        border: "1px solid orange",
                        borderRadius: "5px",
                        margin: "10px",
                    }}>Sign In</button>
                    <button style={{
                        backgroundColor: "white",
                        height:"50px",
                        width: "100px",
                        border: "1px solid blue",
                        borderRadius: "5px",
                        margin: "10px",
                        color: "blue",
                    }}>Sign Up</button>
                </div>
            </header>
            <body>
            <img style={
                {
                    height: "200px",
                    width: "100%",
                    backgroundColor: "orange",
                    margin: "10px",
                    padding: "10px",
                }
            } src="https://upload.wikimedia.org/wikipedia/vi/2/2d/Logo_Trường_Đại_h%E1%BB%8Dc_FPT.svg" alt=""/>
            <h1 style={{textAlign:"center"}}>Danh sach sinh vien</h1>
            <div style={{display:"flex", justifyContent:"center",alignItems:"center",gap:"10px",}}>

                    {sv.map((item, index) => (

                            <FPT image={item.image} name={item.name} description={item.description}></FPT>

                    ))}

            </div>
            <h1 style={{textAlign:'center'}}>What is the course Program?</h1>
            <div style={{display:"flex", justifyContent:"center",alignItems:"center",gap:"10px",}}>
                <img style={{
                    width: "300px",
                    height: "100%",
                }} src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-FPT.png" alt=""/>
                <img style={{
                    width: "300px",
                    height: "100%",
                }} src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-FPT.png" alt=""/>
                <img style={{
                    width: "300px",
                    height: "100%",
                }} src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-FPT.png" alt=""/>
                <img style={{
                    width: "300px",
                    height: "100%",
                }} src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-FPT.png" alt=""/>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
            </body>
            <footer style={{
                backgroundColor:"grey",
                border:"none",
                borderRadius:"10px",
                height:"50px",
                margin:"10px",
                padding:"10px",
                paddingRight:"100px",
                textAlign:"right",
            }}>Ngo 8 -Ton That Thuy - My Dinh,Nam Tu Liem - Ha Noi</footer>
        </>
    );
}

export default App;
