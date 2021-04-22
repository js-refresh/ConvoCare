import React from 'react';
import { Container, Dropdown, } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';

export default function Sidebar() {
  return (
    <div>
      <Container className='sidebar-container'>
        <h4>Mental Health Links</h4>
        <Dropdown>
          <DropdownToggle className='sidebar-buttons' variant="secondary btn-md" id='dropdown-basic'>
            Adult Mental Health Topics
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="">Anxiety Disorders</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="">Bi-polar Disorder</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="">Borderline Personality Disorder</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="">Depression</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="">Eating Disorders</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="">Obsessive-compulsive Disorders</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="">Post-traumatic stress Disorders</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="">Schizophrenia</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="">Suicide prevention</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownToggle className='sidebar-buttons' variant="secondary btn-md" id='dropdown-basic'>
            Child and Adolescent Mental Health Topics
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="">Attention Deficit Hyperactivity Disorders (ADHD)</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="">Anxiety Disorder</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="">Autism Spectrum Disorder</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="">Bi-polar Disorder</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="">Depression</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="">Learning Disabilities</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="">Schizophrenia</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="">Suicide Prevention</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="">Tourette's and Tic Disorders</DropdownItem>
          </DropdownMenu>
        </Dropdown>        
        <Dropdown xs={6}>
          <DropdownToggle className='sidebar-buttons' variant="secondary btn-md" id='dropdown-basic'>
            Links to get help
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="">Veteran Self Help Training Course</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="">Disability Rights</DropdownItem>
            <Dropdown.Divider />
          </DropdownMenu>
        </Dropdown>

      </Container>
    </div>
  )
}
