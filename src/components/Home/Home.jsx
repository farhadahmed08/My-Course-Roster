/* eslint-disable react/jsx-key */


import { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";
const Home = () => {

    const [courses,setCourses] = useState([]);
    const [selectedCourse,setSelectedCourse] = useState([]);
    const [remaining,setRemaining] = useState(0);
    const [totalCredit,setTotalCredit] = useState(0)


    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setCourses(data))
    },[]);

    const handleSelectCourse = (course)=>{
        const isExist = selectedCourse.find(item=>item.id == course.id);
        let count =course.credit;
        if(isExist){
            return alert('already added')
        }
        else{

            selectedCourse.forEach(item=>{
                count = count+item.credit
            })
            
            const totalCreditRemaining = 20 - count;
            if(count>20){
                return alert("course er limit sesh")
            }
            
            else{
                setTotalCredit(count);

            setRemaining(totalCreditRemaining);

            setSelectedCourse([...selectedCourse,course]);
            }
        }
    }

    

    
    return (
        <div className="container">
            <div className="home-container">
                <div className="card-container">
                {
                    courses.map(course => (
                        <div key={course.id} className="card">
                    <div className="card-img">
                        <div>
                        <img className="photo" src={course.img} alt="" />
                        </div>
                        <h3>{course.course}</h3>
                        <p><small>{course.details}</small></p>
                        <div className="info">
                            <p>Price: {course.price} </p>
                            <p>Credit: {course.credit} hr</p>
                        </div>
                        <button onClick={()=>handleSelectCourse(course)} className="btn">select</button>

                        
                    </div>

                </div>
                    ))
                }
                </div>
                <div className="cart">
                    <Cart selectedCourse={selectedCourse} remaining={remaining} totalCredit={totalCredit}></Cart>
                </div>
            </div>
            

        </div>
    );
};

export default Home;