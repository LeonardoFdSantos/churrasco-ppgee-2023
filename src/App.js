import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';

import Home from './components/home';
import Pagamentos from './components/Pagamentos';
import Participantes from './components/Participantes';
import Gepoc from './components/GEPOC';
import Gedre from './components/GEDRE';
import Ceesp from './components/CEESP';

import { ChevronRightIcon } from '@chakra-ui/icons';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';

function App() {
  return (
    <Router>
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='/pagamentos'>Pagamentos</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='/participantes'>Participantes Totais</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='/gepoc'>GEPOC</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='/gedre'>GEDRE</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='/ceesp'>CEESP</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagamentos" element={<Pagamentos />} />
          <Route path="/participantes" element={<Participantes />} />
          <Route path="/gepoc" element={<Gepoc />} />
          <Route path="/gedre" element={<Gedre />} />
          <Route path="/ceesp" element={<Ceesp />} />
        </Routes>
    </Router>
  );
}

export default App;