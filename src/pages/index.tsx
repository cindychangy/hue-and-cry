import React from 'react'
import Home  from './home'

import { articlesMock } from 'api/mocks/mockData';

const Index = () => <Home articles={articlesMock} />

export default Index;