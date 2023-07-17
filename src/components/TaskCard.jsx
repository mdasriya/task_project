import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from '@emotion/styled';
import Context, { Data } from './Context';
import { Avatar, AvatarGroup, Box,Image,Text } from '@chakra-ui/react';
// import CustomAvatar from '../TableComponents/CustomAvatar'
// import { ReactComponent as RedArrow } from '../../assets/icons/High.svg'
// import { ReactComponent as YellowArrow } from '../../assets/icons/Medium.svg'
// import { ReactComponent as BlueArrow } from '../../assets/icons/Low.svg'

const TaskInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 15px;
  min-height: 106px;
  border-radius: 5px;
  max-width: 311px;
  /* background: ${({ isDragging }) =>
    isDragging ? 'rgba(255, 59, 59, 0.15)' : 'white'}; */
  background: #ffffff;
  margin-top: 15px;

  .secondary-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    font-weight: 400px;
    color: #7d7d7d;
  }
  /* .priority{ */
  /* margin-right: 12px; */
  /* align-self: center;
    svg{
      width: 12px !important;
      height: 12px !important;
      margin-right: 12px; */
  /* margin-top: 2px; */
  /* } */
  /* } */
`;

const TaskCard = ({ item, index }) => {
 


  return (
    <Draggable key={item.id} draggableId={item.id} index={index}
    //  border="1px solid green"
     >
      {(provided) => (
        <Box 
           ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskInformation >


            <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
              {item.Priority==="completed"? <Text color={"green"} fontSize={"13px"} borderRadius={5} bg={"rgba(17, 241, 9, 0.2)"} padding={1.5}>{item.Priority}</Text>:<Text color={"#d58d49"} fontSize={"13px"} borderRadius={5} bg={"rgba(223,168,116,.2)"} padding={1.5}>{item.Priority}</Text>}
              <i className="bi bi-three-dots"></i>
              </Box>


            <Text fontSize={"xl"}>{item.Task}</Text>
            <Text  textAlign={"left"} fontSize={"14px"}>{item.detail}</Text>
{
  item.img && <Image src={item.img} alt='Dan Abramov' />
}

<Box display={"flex"} justifyContent={"space-between"} p={2}  width={"100%"}  textAlign={"center"}> 


<Box>                            
<AvatarGroup size='sm' max={2}>
  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
</AvatarGroup>
</Box>
<Box display={"flex"} alignItems={"center"} gap={2}>
<i style={{fontSize:"13px"}} className="bi bi-chat-square-dots"></i>
  <Text fontSize={"13px"}>{item.comments} comments</Text>
  <i style={{fontSize:"13px"}} className="bi bi-file-earmark-text"></i>
  <Text fontSize={"13px"}>{item.file} file</Text>
</Box>

</Box>
        
            
           
        
          </TaskInformation>
        </Box>
      )}
    </Draggable>
  );
};

export default TaskCard;


