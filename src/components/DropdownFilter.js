import Dropdown from 'react-bootstrap/Dropdown';

function DropdownFilter(props) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className="sm">
                Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">relevance</Dropdown.Item>
                <Dropdown.Item href="#/action-2">newest</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

    );
}

export default DropdownFilter;