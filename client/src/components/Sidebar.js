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
            <DropdownItem href="/anxietyadult">Anxiety Disorders</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/bipolaradult">Bi-polar Disorder</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/borderlinepersonality">Borderline Personality Disorder</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/depressionadult">Depression</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/eatingdisorders">Eating Disorders</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/ocd">Obsessive-compulsive Disorders</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/ptsd">Post-traumatic stress Disorders</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/schizophreniaadult">Schizophrenia</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/suicidepreventionadult">Suicide prevention</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownToggle className='sidebar-buttons' variant="secondary btn-md" id='dropdown-basic'>
            Child and Adolescent Mental Health Topics
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="/adhd">Attention Deficit Hyperactivity Disorders (ADHD)</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/anxietychildren">Anxiety Disorder</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/autism">Autism Spectrum Disorder</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/bipolarchildren">Bi-polar Disorder</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/depressionchildren">Depression</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/learningdisabilities">Learning Disabilities</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/schizophreniachildren">Schizophrenia</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/suicidepreventionchildren">Suicide Prevention</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/tourettes">Tourette's and Tic Disorders</DropdownItem>
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
