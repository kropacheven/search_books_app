import Dropdown from 'react-bootstrap/Dropdown';

function DropdownCategory(props) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className="sm">
                Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">all</Dropdown.Item>
                <Dropdown.Item href="#/action-2">art</Dropdown.Item>
                <Dropdown.Item href="#/action-3">biography</Dropdown.Item>
                <Dropdown.Item href="#/action-4">computers</Dropdown.Item>
                <Dropdown.Item href="#/action-5">history</Dropdown.Item>
                <Dropdown.Item href="#/action-6">medical</Dropdown.Item>
                <Dropdown.Item href="#/action-7">poetry</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

    );
}

export default DropdownCategory;