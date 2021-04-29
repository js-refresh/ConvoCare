import React from 'react';
import { Container, Dropdown, } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';

export default function Sidebar() {
  return (
    <div>
      <Container className='sidebar-container'>
        <h6>Mental Health Links</h6>
        <Dropdown>
          <DropdownToggle className='sidebar-buttons' variant="secondary btn-sm" id='dropdown-basic'>
            Mental Health Topics
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="/adhd">Attention Deficit Hyperactivity Disorders (ADHD)</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/anxiety">Anxiety Disorders</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/autism">Autism Spectrum Disorder</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/bipolar">Bi-polar Disorder</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/borderlinepersonality">Borderline Personality Disorder</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/depression">Depression</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/eatingdisorders">Eating Disorders</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/learningdisabilities">Learning Disabilities</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/ocd">Obsessive-compulsive Disorders</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/ptsd">Post-traumatic stress Disorders</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/schizophrenia">Schizophrenia</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/suicideprevention">Suicide prevention</DropdownItem>
            <Dropdown.Divider />            
            <DropdownItem href="/tourettes">Tourette's and Tic Disorders</DropdownItem>
          </DropdownMenu>
        </Dropdown>               
        <Dropdown xs={6}>
          <DropdownToggle className='sidebar-buttons' variant="secondary btn-sm" id='dropdown-basic'>
            Helpful Links 
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="/mentalhealthlinks">Mental Health Links</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/veteranlinks">Veteran Links</DropdownItem>                       
          </DropdownMenu>
        </Dropdown>

      </Container>
    </div>
  )
}
