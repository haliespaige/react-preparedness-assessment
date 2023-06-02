# Preparedness Assessment

1. Create the functionality when the 'Click Me' button is selected a modal appears.

2. The modal should have a header that greets the user with their name

3. The modal has a body with lorem ipsum filler text 

4. Create the functionality when the 'Reset' button is selected it clears the input field

     - Imported the {useState} from "react"
     - Added the state variable 'name' to store the value of the input field where the user enters their name. It is initialized as an empty string using useState('').
     - Added the state variable 'modalOpen' to track whether the modal is open or closed. It is initialized as 'false' using useState(false)
     - The 'handleNameChange' function is responsible for updating the 'name' state whenever the user types in the input field. 
     - The 'toggleModal' function is responsible for toggling the value of 'modalOpen' between true and false when called, which controls the visibility of the modal. 
     - The 'name' state is passed as a prop to the 'ModalComponent' so that it can display the name in the modal content.
     - Created an onChange event in the input field. When triggered (name is typed in), the 'handleNameChange' function is called. This ensures that the 'name' state variable is always up to date with the current value entered by the user. 
     - Created OnClick events for both 'Click Me' and 'Reset' buttons and attached them to the functions: {toggleModal}, {handleReset} so when the buttons are clicked, the functions are triggered. 
     - Added the 'isOpen' and the 'toggle' props to the 'ModalComponent' to control the modal's visibility

     - Create the structure and content of the modal in the 'ModalComponent' component file. 
     - The 'ModalHeater' includes the {name} prop to dispaly the current state of the 'name' variable. 
     - The 'ModalBody' dispalys the Lorem ipsum. 

5.      Frontend Styling Acceptance Criteria
    - ** Also made the buttons the same size **