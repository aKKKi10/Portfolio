import styled from "styled-components"


const Container = styled.div `
    height: 30px;
    background-color: teal;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;

`;



const Announcement = () => {
  return (
   <Container>
    NEW YEAR SALE START ON 1ST JAN 12:00 AM !!
   </Container>
  )
}

export default Announcement;
