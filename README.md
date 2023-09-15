# Course-registration

# 3 Project features
1. one of the feature is student can take maximum 20 credit.if it goes more than student will get alert and can not add credit.

2. student cannot take one subject twice.if he tried it will give error alert.

3. according to subject credit it will add total credit and credit will reduce from the remaning credit,

# Discuss how you managed the state in your assignment project.

i used two react hooks to manage state one of them are useState and another one is useEffect.useEffect usually i use for fetch data and handle outside effect most time i used useState.I use const [courses,setCourses] = useState([]);
    const [selectedCourse,setSelectedCourse] = useState([]);
    const [remaining,setRemaining] = useState(0);
    const [totalCredit,setTotalCredit] = useState(0)

    these useState.



