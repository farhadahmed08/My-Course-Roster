import './Cart.css'

const Cart = ({selectedCourse,remaining,totalCredit}) => {
    
    return (
        <div>
            <h5>Credit Hour Remaining: {remaining} hr</h5>
            <h2>Course Name</h2>
            
            
            {
                selectedCourse.map((course) => 
                
                    <li key={course.id}>{course.course}</li>
                    
                    
                )
            }
            <h5>totalCredit: {totalCredit} hr</h5>
        </div>
    );
};

export default Cart;