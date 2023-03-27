import { Form, FormGroup, Input, Label } from 'reactstrap';
import { useAppDispatch } from '../../../hooks/reduxTypes';
import { changeNewsDisplay, DisplayOptions } from '../../../slices/newsDisplay';

const Dropdown = () => {
  const dispatch = useAppDispatch();

  return (
    <Form className="w-50">
      <FormGroup className="form-group d-flex justify-content-end align-items-center">
        <Label for="exampleEmail">Display as:</Label>
        <Input
          className="ms-2 border border-secondary py-2 ps-1 w-50 me-3 shadow-sm"
          id="exampleSelect"
          name="select"
          type="select"
          onChange={(event) => dispatch(changeNewsDisplay(event.target.value as DisplayOptions))}
        >
          <option>List</option>
          <option>Tiles</option>
        </Input>
      </FormGroup>
    </Form>
  );
};

export default Dropdown;
