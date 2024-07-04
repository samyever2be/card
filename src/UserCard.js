function Status(){
    return(
    <h3>Hello Team Members,</h3>
    );
}

const UserData = [
    {
        name: "Neha",
        city: "Newyork",
        profile: "Images/one.jpeg",
        designation: "Wordpress Developer",
        skills: ["HTML", "CSS", "Javascript", "PHP", "Wordpress"],
        online: false
    },
    {
        name: "Shyam",
        city: "Canada",
        profile: "Images/two.jpeg",
        designation: "Wordpress Developer",
        skills: ["HTML", "CSS", "Javascript", "PHP", "Wordpress"],
        online: true
    },
    {
        name: "Krish",
        city: "United Kingdom",
        profile: "Images/three.jpeg",
        designation: "Front-end Developer",
        skills: ["HTML", "CSS", "Javascript", "JQuery", "React", "Node"],
        online: true
    },
    

    

];


function User(props){
    return(
        <div className="card-container">
            <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
            <img class="img" src={props.profile} alt="" width="200" height="200"/>
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.designation}</p> 
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill,index)=>(
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
}


const UserCard =() =>{
    return(
        <>
          <Status/>
        <div className="content">
      
       {
        UserData.map((user, index) =>(
            
              <User key={index} name ={user.name} online={user.online} city={user.city} profile={user.profile} designation={user.designation} skills = {user.skills}/>
            
        ))}
       </div>
       </>
    );
}
export default UserCard;