function About({src="https://via.placeholder.com/215",about}){
    return (
        <aside>
               <img alt="blog logo" src={src}></img>
               <p>{about}</p>
        </aside>

    )
}
export default About 